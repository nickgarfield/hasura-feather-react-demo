import React from "react";
import { AuthenticationForm, withFeather } from "feather-client-react";

function SignIn(props) {
  return <AuthenticationForm feather={props.feather} />;
}

export default withFeather(SignIn);
