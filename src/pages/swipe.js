import React from "react";
import Logo from "../components/Logo";
import Bar from "../components/Bar"
import { useState, useEffect } from "react";
import Card from '../components/Card';

const Button = ({ color, icon, onClick, radius, width }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "#ffffff",
        border: "none",
        borderRadius: radius,
        height: "80px",
        width: width,
        fontSize: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      {icon}
    </button>
  );
};

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./movies.json");
      const data = await response.json();
      setMovies(data);
      setImageURL(data[0].Image_Poster_Link);
    };

    fetchData();
  }, []);

  function handleLoveClick() {

    const likedMovie = async () => {
      console.log("YOU LIKED A MOVIE")
      const sessionId = window.sessionStorage.getItem('sessionId');

      fetch('/api/addLikedMovie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: parseInt(sessionId),
          index,
        }),
      }).then(response => response.json())
        .then(data => {
          console.log("Response data: ", data);

          if (data.agreedOn) {
            alert("Both people have selected this movie!");
          }
        });



    };

    likedMovie();

    setIndex(index => (index + 1) % movies.length);
    setImageURL(movies[(index + 1) % movies.length].Image_Poster_Link);
  }

  function handleXClick() {
    setIndex(index => (index + 1) % movies.length);
    setImageURL(movies[(index + 1) % movies.length].Image_Poster_Link);
  }

  return (
    <div className="Home" style={{ height: "100vh", width: "75vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
      {/* Logo */}

      {/* Movie Poster */}
      {/* <img src={imageURL} alt="movie poster" style={{ maxWidth: "100%", maxHeight: "20vh" }} /> */}

      {/* Card Component */}
      <Card index={index} style={{ height: "40%" }} />

      {/* Two Buttons */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* X Button */}
        <Button icon="x" color="#F0080A" onClick={handleXClick} radius="70%" width="100px" />
        <div style={{ marginRight: "7rem" }} />
        {/* Heart Button */}
        <Button icon="♥" color="#4CAF50" onClick={handleLoveClick} radius="80%" width="100px" />
      </div>
      <div />
      { /* menu bar  <div style={{ marginRight: "7rem" }} />or the bottom */}
      <Bar />
    </div>
  );
}
