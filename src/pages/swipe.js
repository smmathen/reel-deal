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
      <Logo />
      {/* Movie Poster */}
      {/* <img src={imageURL} alt="movie poster" style={{ maxWidth: "100%", maxHeight: "20vh" }} /> */}

      {/* Card Component */}
        <Card index={index} /> 

      {/* Two Buttons */}
      <div style={{ display: "flex", flexDirection: "row", marginTop: "6rem" }}>
        {/* Heart Button */}
        <Button icon="x" color="#F0080A" onClick={handleLoveClick} radius="70%" width="100px" />
        <div style={{ marginRight: "7rem" }} />
        {/* X Button */}
        <Button icon="♥" color="#4CAF50" onClick={handleXClick} radius="80%" width="100px" />
      </div>
      <div style={{ marginBottom: "1rem" }} />
      { /* menu bar  <div style={{ marginRight: "7rem" }} />or the bottom */}
      <Bar />
    </div>
  );
}
