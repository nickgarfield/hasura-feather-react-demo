import React from "react";
import { AuthenticationForm, withCurrentUser } from "feather-client-react";
import Todos from "./Todos";

function App(props) {
  if (props.isLoadingCurrentUser) return <div />;
  if (!props.currentUser) {
    return (
      <div className="app">
        <AuthenticationForm />;
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
