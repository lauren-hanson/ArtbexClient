import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ApplicationViews } from "./views/ApplicationViews";



export const Artbex = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <ApplicationViews />
    </DndProvider>
  )
}

