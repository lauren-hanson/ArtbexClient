import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../components/home/Home"
import { FormatList } from '../components/format/FormatList'


export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                <Home />

            </Route>
            <Route path="/format">
                <Route index element={<FormatList />} />
            </Route>
        </>
    )
}
