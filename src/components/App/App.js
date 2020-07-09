import React, { useEffect, useState } from "react";
import { AuthenticationForm, withFeather } from "feather-client-react";
import { getTodos } from "./api";

function App(props) {
  // Initialize the app state (this can also be done with something like Redux)
  const [currentUser, setCurrentUser] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Listen for authentication state changes
    let mounted = true;
    props.feather.onStateChange(user => {
      if (user) {
        // If there is an authenticated user, fetch their todos
        return getTodos(user)
          .then(todos => {
            if (mounted) {
              setCurrentUser(user);
              setTodos(todos);
            }
          })
          .catch(error => console.log(error));
      } else {
        // If there is not an authenticated user, nullify the app state
        if (mounted) {
          setCurrentUser(null);
          setTodos([]);
        }
      }
    });
    return () => (mounted = false);
  }, [props.feather]);

  return (
    <div className="App">
      {currentUser ? (
        <p>{JSON.stringify(todos)}</p>
      ) : (
        <AuthenticationForm feather={props.feather} />
      )}
    </div>
  );
}

export default withFeather(App);
