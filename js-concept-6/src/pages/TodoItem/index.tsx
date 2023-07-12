import {JSX} from "react";
import NavigationBar from "../../components/NavigationBar";
import {TodoProps} from "../../App.tsx";
import {useParams} from "react-router-dom";
import { useLocalStorage} from "../../hooks/useLocalStorage.ts";

export default function TodoItem(): JSX.Element {
    const { id } = useParams();
    const [localData] = useLocalStorage<TodoProps[]>("todos");
    const currentTodo = localData.find((todo: TodoProps) => todo.id === Number(id));

    return (
        <>
            <NavigationBar />
            <div className="container">
                <h1>Todo Item {id}</h1>
                <p>{currentTodo && currentTodo.title}</p>
                <p>{currentTodo && (currentTodo.description ? currentTodo.description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur dicta eius eveniet excepturi, ipsam iusto, laboriosam molestiae nam nihil quas suscipit! Aperiam ea eos fuga impedit labore non possimus?")}</p>
            </div>
        </>
    )
}
