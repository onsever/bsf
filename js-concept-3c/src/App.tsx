import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const taskList: Task[] = [
  {
    id: 1,
    name: "Task 1",
    completed: false,
  },
  {
    id: 2,
    name: "Task 2",
    completed: false,
  },
  {
    id: 3,
    name: "Task 3",
    completed: true,
  },
];

const App = () => {
  const [tasks, setTasks] = React.useState<Task[]>(taskList);
  const [newTask, setNewTask] = React.useState<string>("");

  const handleItemComplete = (id: number): void => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const nTask: Task = {
      id: tasks.length + 1,
      name: newTask,
      completed: false,
    };
    setTasks([...tasks, nTask]);

    setNewTask("");
  };

  return (
    <>
      <h1 className="title">Task List</h1>
      <TodoList tasks={tasks} onCheckBoxClick={handleItemComplete} />
      <div>
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            className="task-input"
          />
          <button className="task-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
