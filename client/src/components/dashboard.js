import React, { useEffect } from "react";
import useAuth from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";

// Setting the spotifyApi, so that we can use it's functions
const spotifyApi = new SpotifyWebApi({
  clientId: "7b215911d14245089d73d78055353cb2",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;

    // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again.
    spotifyApi.setAccessToken(accessToken);

    // Get user details with help of getMe() function
    spotifyApi.getMe().then((data) => {
      console.log(data);
    });
  }, [accessToken]);

  return <div>{code}</div>;
};

export default Dashboard;
