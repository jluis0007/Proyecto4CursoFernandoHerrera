import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import { HooksApp } from './HooksApp';
/* import { TrafficLight } from "./01-useState/TrafficLight";
import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect"; */
import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    <TrafficLightWithHook />
  </StrictMode>
);
