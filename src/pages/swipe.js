import React from "react";
import Logo from "../components/Logo";
import Bar from "../components/Bar"
import { useState, useEffect } from "react";
import Card from '../components/Card';

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






  return (
    <div className="Home" style={{ height: "100vh", width: "75vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>

      {/* Card Component */}
      <Card index={index} style={{ height: "40%" }} />

      { /* menu bar  <div style={{ marginRight: "7rem" }} />or the bottom */}
      <Bar />
    </div>
  );
}
