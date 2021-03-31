import React from "react";
import fire from "firebase";
import Dash1 from "../Dash1";
import { Redirect } from "react-router-dom";

export default function PrivateRoute() {
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [progress, setProgress] = React.useState(false);

  React.useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setLoginStatus(true);
        console.log("user logined");
      }
      setProgress(false);
    });
  }, []);


  return progress ? (
    "Loading...."
  ) : (loginStatus ? (
      <Dash1/>

  ) : (
    <Redirect to="/login" />
  ));
}