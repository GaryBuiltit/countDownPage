import React from "react";
import { ReactDOM } from "react";
import {createRoot} from "react-dom/client"
import App from "./components/App";

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const root = createRoot(document.getElementById("root"));
root.render(
  <App/>
)



