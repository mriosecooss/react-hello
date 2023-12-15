//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Mi componente de trafico
import { TrafficLights } from "./TrafficlLights";

//render your react application
ReactDOM.render(<TrafficLights />, document.querySelector("#app"));
