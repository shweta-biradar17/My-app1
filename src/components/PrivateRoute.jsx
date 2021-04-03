import React from "react";
import fire from "firebase";
import Home from "./Home";
import { Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function PrivateRoute() {
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [progress, setProgress] = React.useState(true);

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
    <div className="loader">
      <CircularProgress />
    </div>
  ) : loginStatus ? (
    <Home />
  ) : (
    <Redirect to="/login" />
  );
}
