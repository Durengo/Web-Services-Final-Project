import React from "react";
import ReactDOM from "react-dom";
import "../css/Globals.css"
import "../css/Styleguide.css"

import App from "./App";
import {Provider} from "react-redux";
import store from "../redux/store";

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("app"));