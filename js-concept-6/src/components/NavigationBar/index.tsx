import { JSX } from "react";
import {Link} from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai"

export default function NavigationBar(): JSX.Element {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to={"/"} className="navbar_logo">Taskify</Link>
                <Link to={"/add"} className="navbar_link">
                    <AiOutlinePlus />
                    New Task
                </Link>
            </div>
        </nav>
    )
}
