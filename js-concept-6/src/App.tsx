import {JSX, useEffect } from "react";
import {useFetch} from "./hooks/useFetch.ts";
import {useLocalStorage} from "./hooks/useLocalStorage.ts";
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
    const [localData, setLocalData] = useLocalStorage<TodoProps[]>("todos", []);

    const handleDelete = (id: number): void => {
        setLocalData(localData.filter((todo: TodoProps) => todo.id !== id));
    }

    useEffect(() => {
        if (localData.length === 0 && data) {
            setLocalData(data);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

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
                                onDelete={() => handleDelete(todo.id)}
                            />
                    ))}
                </ul>
            </div>
        </>
    )
}
