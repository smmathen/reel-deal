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
            <h3 style={{ fontSize: "5vh", textAlign: "center", marginBottom: "2vh", marginTop: "20px", color: "#F0080A"}}> {title} </h3>
            <div style={{ marginLeft: "35vw", width: "100vw" }}>
                <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
            </div>
            <div style={{ fontSize: "3vh", marginTop: "2vh", width: "70vw", marginLeft: "32vw"}}>
                <p>{genre}</p>
                <p>{rating}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Details;