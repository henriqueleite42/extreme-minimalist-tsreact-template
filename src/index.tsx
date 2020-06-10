import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import Home from "Views/Home";

import "Config/fontawesome";

import "./index.css";

ReactDOM.render(<Home />, document.getElementById("root"));

serviceWorker.register();
