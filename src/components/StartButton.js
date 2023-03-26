import React from "react";

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

function App() {
  function handleLoveClick() {
    console.log("Love button clicked");
  }

  function handleXClick() {
    console.log("X button clicked");
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* Heart Button */}
      <Button icon="♥" color="#4CAF50" onClick={handleLoveClick}  width="80px" />
      {/* X Button */}
      <Button icon="X" color="#F0080A" onClick={handleXClick}  width="80px" />
    </div>
  );
}

export default App;