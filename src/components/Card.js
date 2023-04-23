import React, { useState, useEffect } from 'react';
import Details from "../components/Details";
import Logo from "../components/Logo";
import Bar from "../components/Bar"
import classNames from 'classnames';
import styles from '../styles/Home.module.css';

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

function Card() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [movies, setMovies] = useState([]);
    const [imageURL, setImageURL] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("./movies.json");
            const data = await response.json();
            setMovies(data);
            setImageURL(data[index].Image_Poster_Link);
        };
        fetchData();
    }, []);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    function handleLoveClick() {
        setIndex(index => (index + 1) % movies.length);
        setImageURL(movies[(index + 1) % movies.length].Image_Poster_Link);
    }

    function handleXClick() {
        setIndex(index => (index + 1) % movies.length);
        setImageURL(movies[(index + 1) % movies.length].Image_Poster_Link);
    }

    console.log(imageURL);
    return (
        <div>
            <div className= {classNames(styles.box, { [styles.card__front]: !isFlipped, [styles.card__back]: isFlipped})}  onClick={handleClick}>
                {!isFlipped && (
                    <div style={{ height: "100%"}}>
                        {/* Logo */}
                        <Logo />

                            {/* Movie Poster */}
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img src={imageURL} alt="movie poster" style={{ width: "250px" }} />
                        </div>
                    </div>
                )}
                
                {isFlipped && (
                    <div style={{height:"100%"}}>
                        <Details index={index} movies={movies} />
                    </div>
                )}
            </div>
            {!isFlipped && (
                <div style={{height:"100%", marginTop: "15px"}}>
                    {/* Two Buttons */}
                    <div style={{ display:"flex", justifyContent: "center", alignItems: "center"}}>
                        {/* X Button */}
                        <Button icon="x" color="#F0080A" onClick={handleLoveClick} radius="70%" width="100px" />
                        <div style={{ marginRight: "7rem" }} />
                        {/* Heart Button */}
                        <Button icon="♥" color="#4CAF50" onClick={handleXClick} radius="80%" width="100px" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;