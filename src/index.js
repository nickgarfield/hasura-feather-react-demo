import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { FeatherContext } from "feather-client-react";
import { feather } from "feather";
import App from "components/App";

// Run the React app
ReactDOM.render(
  <React.StrictMode>
    <FeatherContext.Provider value={feather}>
      <App />
    </FeatherContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
