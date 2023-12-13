import React from "react"
import { ReactDOM } from "react"
import "../../index.css";
import App from "../../App";

export * from "./Inicio"
export * from "./Nosotros"
export * from "./Productos"


ReactDOM.render(
    <App/>,

    document.getElementById("root")
);