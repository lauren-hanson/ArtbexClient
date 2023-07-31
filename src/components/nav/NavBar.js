import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    return (
        <ul className="navbar">

            <li className="navbar_item active">
                <Link className="navbar_link" to="/">create</Link>
                <Link to="/submissions" className="navbar-item">
                    Submissions
                </Link>
            </li>

        </ul>

    )

}
    // if (!fatbackUserObject) {
    //     return <>
    //         <PublicNavBar />
    //     </>
    // }
    // else if (fatbackUserObject.staff) {
    //     return <>
    //         <StaffNavBar />
    //     </>
    // }
    // else {
    //     return <>
    //         <ClientNavBar />
    //     </>
    // }


