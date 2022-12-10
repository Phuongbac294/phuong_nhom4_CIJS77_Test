import { Link } from "react-router-dom"

export default function Header() {
    return (
        <ul className="header">
            <li className="header-item">
                <Link to="/add">
                    Add
                </Link>
            </li>
            <li className="header-item">
            <Link to="/active">
                    Active
                </Link>
            </li>
            <li className="header-item">
            <Link to="/completed">
                Completed
            </Link>
            </li>
        </ul>
    )
}