import React from "react";

const Button = ({
    border,
    color,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                color: "#F0080A",
                border,
                borderRadius: "36px",
                height: "8vh",
                width: "300px",
                maxWidth: "100%",
                fontSize: "2.5vw",
            }}
        >
            {children}
        </button>
    );
};

export default Button;