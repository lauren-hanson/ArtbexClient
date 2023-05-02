import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./views/ApplicationViews";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { NavBar } from "../src/components/nav/NavBar";


export const Artbex = () => {

  return (
    <DndProvider backend={HTML5Backend}>
        <Route path="/">
          {/* <NavBar /> */}
          <ApplicationViews />
        </Route>
    </DndProvider>
  )
}

