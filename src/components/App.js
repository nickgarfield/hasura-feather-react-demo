import React from "react";
import { withCurrentUser } from "feather-client-react";
import Todos from "./Todos";
import SignIn from "./SignIn";

function App(props) {
  if (!props.currentUser) {
    return (
      <div className="app">
        <SignIn />
      </div>
    );
  }
  return (
    <div className="app">
      <div className="app-header">
        <h1>My to-do list</h1>
        <p>{props.currentUser.email}</p>
      </div>
      <Todos />
    </div>
  );
}

export default withCurrentUser(App);
