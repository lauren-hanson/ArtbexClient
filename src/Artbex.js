import React from "react";
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { DragDrop } from "./components/artbex/DragDrop";



export const Artbex = () => {

  return (
    <>
      <NavBar />
      <ApplicationViews />
      {/* <DragDrop /> */}
    </>
  )
}

