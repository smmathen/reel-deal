import React from "react";


const StartButton = ({
    border,
    color,
    children,
    height,
    onClick,
    radius,
    width
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                color: "#F0080A",
                border,
                borderRadius: radius,
                height,
                width,
                fontSize: "50px",
            }}
        >
            {children}
        </button>
    );
}

export default StartButton;
