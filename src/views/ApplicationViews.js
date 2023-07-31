import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../components/home/Home"
import { Submissions } from "../components/submissions/Submissions"



export const ApplicationViews = () => {

    return (
        <>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/submissions">
                    <Submissions />
                </Route>

        </>
    )
}
