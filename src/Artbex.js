import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./views/ApplicationViews";
// import { NavBar } from "../src/components/nav/NavBar";


export const Artbex = () => {

  return (
    <>
      <Route path="/">
        {/* <NavBar /> */}
        <ApplicationViews />
      </Route>
    </>
  )
}