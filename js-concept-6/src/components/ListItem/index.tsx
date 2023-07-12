import {JSX} from "react";
import {TodoProps} from "../../App.tsx";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {Link} from "react-router-dom";

type ListItemProps = {
    onDelete?: (id: number) => void;
} & TodoProps;

export default function ListItem({ id, title, description, completed, onDelete }: ListItemProps): JSX.Element {
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
                <RiDeleteBin6Fill className="list_item_delete" onClick={
                    () => {
                        onDelete && onDelete(id);
                    }
                }/>
            </div>
        </li>
    )
}
