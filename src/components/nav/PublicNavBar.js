import { Link } from "react-router-dom"
import "./NavBar.css"

export const PublicNavBar = () => {

    //const navigate = useNavigate()

    return (
        <ul className="navbar">
                        
            <li className="navbar_item active">
                <Link className="navbar_link" to="/">hi</Link>
            </li>

        </ul>

    )
}


