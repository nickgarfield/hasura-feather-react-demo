import React, { useEffect, useState } from "react";
import { AuthenticationForm, withFeather } from "feather-client-react";
import { createUserProfile, getUserProfile } from "api";
import Todos from "components/Todos";

import "./App.css";

function App(props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    props.feather.onStateChange(user => {
      if (mounted) setCurrentUser(user);
      if (user) {
        getUserProfile(user.id)
          .then(userProfile => {
            if (!userProfile) createUserProfile(user);
          })
          .catch(error => console.log(error));
      }
    });
    return () => (mounted = false);
  }, [props.feather]);

  return (
    <div className="app">
      <h1>My to-do list</h1>
      {currentUser ? (
        <div>
          <div className="app-header">
            <p>{currentUser.email}</p>
          </div>
          <Todos />
        </div>
      ) : (
        <AuthenticationForm feather={props.feather} />
      )}
    </div>
  );
}

export default withFeather(App);
