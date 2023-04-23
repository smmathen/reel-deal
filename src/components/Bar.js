import React from "react";
import { useRouter } from 'next/router'

const Bar = ({ color, radius, width }) => {
  const router = useRouter();

  const handleMovieClick = () => {
    router.push("/likedMovies");
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: ".01rem",
        paddingBottom: "3rem",
        justifyContent: "center",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70px",
        borderRadius: radius,
      }}
    >
      <button style={{ background: "none", border: "none", cursor: "pointer" }} onClick={handleMovieClick}>
        <i className="fas fa-film" style={{ fontSize: "2rem" }}></i>
        <span style={{ fontSize: "4rem" }}>🎬</span>
      </button>
      <div style={{ marginRight: "2rem" }} />
      <button style={{ background: "none", border: "none", cursor: "pointer" }}>
        <i className="fas fa-star" style={{ fontSize: "2rem", marginRight: "1rem" }}></i>
        <span style={{ fontSize: "4rem" }}>⭐</span>
      </button>
      <div style={{ marginRight: "2rem" }} />
      <button style={{ background: "none", border: "none", cursor: "pointer" }}>
        <i className="fas fa-cog" style={{ fontSize: "2rem", marginRight: "1rem", color: "#fa0000"}}></i>
        <span style={{ fontSize: "4rem" }}>❔</span>
      </button>
    </div>
  );
};

export default Bar;
