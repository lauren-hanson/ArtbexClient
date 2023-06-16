import React from "react";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"



export const Artbex = () => {

  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  )
}

