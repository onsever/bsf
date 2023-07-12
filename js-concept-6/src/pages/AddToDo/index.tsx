import React, {JSX, useEffect, useState} from "react";
import NavigationBar from "../../components/NavigationBar";
import {TodoProps} from "../../App.tsx";
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "../../hooks/useLocalStorage.ts";

export default function AddToDo(): JSX.Element {
    const navigate = useNavigate();
    const [localData, setLocalData] = useLocalStorage<TodoProps[]>("todos");
    const [todo, setTodo] = useState<TodoProps | null>(null);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [completed, setCompleted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const newTodo: TodoProps = {
            userId: 1,
            id: Math.floor(Math.random() * 1000),
            title,
            description,
            completed
        };

        setTodo(newTodo);
        setLocalData([...localData, newTodo]);

        setTitle("");
        setDescription("");
        setCompleted(false);
    }

    useEffect(() => {
        if (todo) {
            navigate("/");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todo]);

    return (
        <>
            <NavigationBar />
            <div className="container">
                <h1>Add New Item</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Completed:
                        <input type="checkbox" name="completed" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}
