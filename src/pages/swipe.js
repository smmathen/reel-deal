import React from "react";
import Logo from "../components/Logo";
import Bar from "../components/Bar";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [index, setIndex] = useState(
    typeof sessionStorage !== "undefined" && sessionStorage.getItem("index") !== null ? parseInt(sessionStorage.getItem("index")) : 0
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./movies.json");
        const data = await response.json();
        setMovies(data);

        const storedIndex = typeof sessionStorage !== "undefined" && sessionStorage.getItem("index");
        setIndex(storedIndex !== null ? parseInt(storedIndex) : 0);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("index", index);
      if (movies[index]) {
        setImageURL(movies[index].Image_Poster_Link);
      }
    }
  }, [index, movies]);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      const storedIndex = sessionStorage.getItem("index");
      setIndex(storedIndex !== null ? parseInt(storedIndex) : 0);
    }
  }, []);

  return (
    <div
      className="Home"
      style={{
        height: "100vh",
        width: "75vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {/* Card Component */}
      <Card index={index} setIndex={setIndex} style={{ height: "40%" }} />

      {/* menu bar */}
      <Bar />
    </div>
  );
}
