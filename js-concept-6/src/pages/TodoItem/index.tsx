import {JSX} from "react";
import NavigationBar from "../../components/NavigationBar";
import {TodoProps} from "../../App.tsx";
import {useParams} from "react-router-dom";

export default function TodoItem({ title, description }: TodoProps): JSX.Element {
    const { id } = useParams();

    return (
        <>
            <NavigationBar />
            <div className="container">
                <h1>Todo Item {id}</h1>
                <p>{title}</p>
                <p>{description ? description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur dicta eius eveniet excepturi, ipsam iusto, laboriosam molestiae nam nihil quas suscipit! Aperiam ea eos fuga impedit labore non possimus?"}</p>
            </div>
        </>
    )
}
