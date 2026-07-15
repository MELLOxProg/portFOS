import React from "react";
import Mwindow from "./Mwindow";
import "./spotify.scss";

const Spotify = () => {
  return (
    <Mwindow width="27vw">
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1EIenRw7a52He7?utm_source=generator&si=4c48b6a7accc47e5"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </Mwindow>
  );
};

export default Spotify;
