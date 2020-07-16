import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloProvider } from "@apollo/client";
import { apollo } from "./apollo.js";
import { Feather } from "feather-client-react";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

// Run the React app
ReactDOM.render(
  <Feather apiKey="pk_live_G92B6M6Gxo7QzpVcAM4BXHtcvDs3Sb">
    <ApolloProvider client={apollo}>
      <App />
    </ApolloProvider>
  </Feather>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
