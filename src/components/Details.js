import React from "react";
import YouTube from "react-youtube";


function Details({ index, movies }) {
    const { Title: title, Genre: genre, Rating: rating, Description: description, Trailer_Link: videoId } = movies[index];
    const opts = {
        height: "300vh",
        width: "500vh",
        playerVars: {
            autoplay: 1,
        },
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
    }
    return (
        <div>
            <h3 style={{ fontSize: "5vh", textAlign: "center", margin: "2vh", color: "#F0080A", marginTop: "5vh"}}> {title} </h3>
            <div style={{ marginLeft: "auto", marginRight: "auto", width: "100vh" }}>
                <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
            </div>
            <div style={{ fontSize: "3vh", marginTop: "2vh", width: "100vh", marginLeft: "60vh" }}>
                <p>{genre}</p>
                <p>{rating}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Details;