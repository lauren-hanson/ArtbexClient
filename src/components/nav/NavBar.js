import { PublicNavBar } from "./PublicNavBar"
import "./NavBar.css"

export const NavBar = () => {

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    return(<>
    <PublicNavBar/>
    </>)

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


