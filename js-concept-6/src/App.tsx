import {JSX, useEffect, useState } from "react";
import {useFetch} from "./hooks/useFetch.ts";
import NavigationBar from "./components/NavigationBar";
import ListItem from "./components/ListItem";

export type TodoProps = {
    userId: number;
    id: number;
    title: string;
    description?: string;
    completed: boolean;
};

const FETCH_URL = "https://jsonplaceholder.typicode.com/todos/?_limit=10";

export default function App(): JSX.Element {
    const { data, loading, error } = useFetch<TodoProps[]>(FETCH_URL);
    const [localData, setLocalData] = useState<TodoProps[]>([]);

    useEffect(() => {
        if (data) {
            if (!localStorage.getItem("todos")) {
                localStorage.setItem("todos", JSON.stringify(data));
            }
        }
    }, [data]);

    useEffect(() => {
        const todoList = localStorage.getItem("todos");
        const parsedTodoList = todoList ? JSON.parse(todoList) as TodoProps[] : [];
        setLocalData(parsedTodoList);

        console.log(data);
        console.log(localData);
    }, []);

    return (
        <>
            <NavigationBar />
            <div className="container">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <ul className="list">
                    {localData && localData.map((todo: TodoProps) => (
                            <ListItem
                                key={todo.id}
                                userId={todo.userId}
                                id={todo.id}
                                title={todo.title}
                                description={todo.description}
                                completed={todo.completed}
                            />
                    ))}
                </ul>
            </div>
        </>
    )
}
