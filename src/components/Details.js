import React, {useState, useEffect } from 'react';
import YouTube from "react-youtube";
  

function updateVideoId(newVideoId) {
    setVideoId(newVideoId);
  }

function Details({ index, movies }){
    const { Title: title, Trailer_Link: trailer_link ,Genre: genre, Rating: rating, Description: description} = movies[index];
    const opts = {
        height: "400vh",
        width: "700vh",
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        console.log(trailer_link);
      }, [index, movies]);

    const _onReady = (event) => {
        event.target.pauseVideo();
    }

    return(
        <div>
            <h3 style = {{fontSize: "5vh", textAlign: "center", margin: "2vh", color: "#F0080A"}}>{title}</h3>
            <div style = {{width: "20%"}}>
                <YouTube videoId={trailer_link} opts={opts} onReady={_onReady}/>
            </div>
            <div style={{ fontSize: "3vh", marginTop: "2vh", width: "100vh", marginLeft: "60vh" }}>
                <p>{trailer_link}</p>
                <p>{rating}</p>
                <p>{description}</p>
            </div>
        </div>     
    );
}

export default Details;