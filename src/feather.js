import { Feather } from "feather-client-react";

export const feather = Feather("pk_live_G92B6M6Gxo7QzpVcAM4BXHtcvDs3Sb");

const unsubscribe = feather.onStateChange(user => {
  sessionStorage.setItem("idToken", user ? user.tokens.idToken : null);
});

unsubscribe();