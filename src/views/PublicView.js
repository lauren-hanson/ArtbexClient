import { Outlet, Route, Routes } from "react-router-dom"
import "./ApplicationViews.css"
import { Home } from "../components/home/Home"


export const PublicViews = () => {

    return (
        <Routes>

            <Route path="/" element={
                <div className="views">
                    <div>PUBLIC</div>

                    <h1 className="title-main">Baxter Williams</h1>
                    <Outlet />
                </div>
            }>

                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
}