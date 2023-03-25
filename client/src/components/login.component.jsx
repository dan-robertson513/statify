import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { loginUrl } from "./../spotify";

function Login() {
  // const classes = useStyles();
  return (
    <div>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-Logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
