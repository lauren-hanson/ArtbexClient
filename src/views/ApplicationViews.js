import React from "react"
import { Route } from "react-router-dom";
import { Home } from "../components/home/Home"
import { FormatList } from '../components/format/FormatList'
import { DropZone } from "../components/dropzone/Dropzone"


export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/format">
                <Route index element={<FormatList />} />
            </Route>
            <Route path="/dropzone">
                <Route index element={<DropZone />} />
            </Route>
        </>
    )
}
