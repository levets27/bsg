import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./main";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Main />, document.getElementById("main-root"));
registerServiceWorker();
