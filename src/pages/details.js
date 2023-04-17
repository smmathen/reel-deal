import React from "react";
import YouTube from "react-youtube";
  
export default class Details 
extends React.Component {
    render() {
        const opts = {
        height: "400vh",
        width: "700vw",
        playerVars: {
            autoplay: 1,
        },
        };
    
        return (
        <div style = {{position: "absolute", right: "0px", left: "0px", top: "0px", bottom: "0px", backgroundColor: "white", }}>
            <h3 style = {{fontSize: "5vh", textAlign: "center", margin: "2vw", color: "#F0080A"}}> Insert Movie Title Here </h3>
            <div style = {{display: "flex", justifyContent: "center", marginTop: "2vh"}}>
                <YouTube videoId="Md6Dvxdr0AQ" 
                    opts={opts} onReady={this._onReady} />
            </div>
            <div style = {{fontSize: "3vh", marginTop: "2vh", textAlign: "center", width: "50vw", marginLeft: "30vw"}}>
                <p style = {{textAlign: "left"}}>
                    Insert genre
                </p>
                <p style = {{textAlign: "left"}}>
                    Insert rating
                </p>
                <p style = {{textAlign: "left"}}>
                    Insert description
                </p>
            </div>
        </div>
        );
    }
    
    _onReady(event) {
        event.target.pauseVideo();
    }
}