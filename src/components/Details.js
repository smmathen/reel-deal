import React from "react";
import YouTube from "react-youtube";
  

function Details(props){

}

export default Details;

export default class Details 
extends React.Component {
    render() {
        const opts = {
        height: "400vh",
        width: "700vh",
        playerVars: {
            autoplay: 1,
        },
        };
    
        return (
        <div style = {{position: "absolute", right: "0px", left: "0px", top: "0px", bottom: "0px", backgroundColor: "white", }}>
            <h3 style = {{fontSize: "5vh", textAlign: "center", margin: "2vh", color: "#F0080A"}}> Insert Movie Title Here </h3>
            <div style = {{marginLeft: "auto", marginRight: "auto", width: "100vh"}}>
                <YouTube videoId="Md6Dvxdr0AQ" 
                    opts={opts} onReady={this._onReady} />
            </div>
            <div style = {{fontSize: "3vh", marginTop: "2vh", width: "100vh", marginLeft: "60vh"}}>
                <p>
                    Insert genre
                </p>
                <p>
                    Insert rating
                </p>
                <p>
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