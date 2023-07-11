import {JSX} from "react";
import {TodoProps} from "../../App.tsx";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {Link} from "react-router-dom";

export default function ListItem({ id, title, description, completed }: TodoProps): JSX.Element {

    const handleDelete = (): void => {
        const todoList = localStorage.getItem("todos");
        const parsedTodoList = todoList ? JSON.parse(todoList) as TodoProps[] : [];
        const filteredTodoList = parsedTodoList.filter((todo: TodoProps) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(filteredTodoList));
    }

    return (
        <li className="list_item">
            <div className="list_item_title">
                <Link to={`/${id}`} className="list_item_title_link">{title.substring(0, 10)}</Link>
            </div>
            <p>{ description ? description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur dicta eius eveniet excepturi, ipsam iusto, laboriosam molestiae nam nihil quas suscipit! Aperiam ea eos fuga impedit labore non possimus?"}</p>
            <div className="divider" />
            <div className="list_item_status">
                <div className="list_item_status_icon">
                    {completed ? "✅" : "❌"}
                </div>
                <RiDeleteBin6Fill className="list_item_delete" onClick={handleDelete}/>
            </div>
        </li>
    )
}
