import React, { JSX } from "react";
import styles from "./TodoList.module.css";
import { Task } from "../../App.tsx";
import ListItem from "../ListItem";

type TodoListProps = {
  tasks: Task[];
  onCheckBoxClick?: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  onCheckBoxClick,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {tasks.map((task: Task) => (
          <ListItem task={task} onCheckBoxClick={onCheckBoxClick} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
