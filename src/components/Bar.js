import React from "react";

const Bar = ({ color, radius, width }) => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1rem",
        paddingBottom: "1.2rem",
        justifyContent: "center",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "60px",
        borderRadius: radius,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <i className="fas fa-film" style={{ fontSize: "2rem" }}></i>
        <span style={{ fontSize: "4rem" }}>🎬</span>
      </div>
      <div style={{ marginRight: "2rem" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <i className="fas fa-star" style={{ fontSize: "2rem", marginRight: "1rem" }}></i>
        <span style={{ fontSize: "4rem" }}>⭐</span>
      </div>
      <div style={{ marginRight: "2rem" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <i className="fas fa-cog" style={{ fontSize: "2rem", marginRight: "1rem" }}></i>
        <span style={{ fontSize: "4rem" }}>⚙️</span>
      </div>
    </div>
  );
};

export default Bar;