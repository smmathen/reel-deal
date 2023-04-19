import React, {useState, useEffect } from 'react';
import Details from "../components/Details";
import Logo from "../components/Logo";

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [movies, setMovies] = useState([]);
    const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./movies.json");
      const data = await response.json();
      setMovies(data);
      setImageURL(data[props.index].Image_Poster_Link);
    };

    fetchData();
  }, [props]);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className ="card" onClick={handleClick}>
                {!isFlipped && (
                    <div style={{height:"100%"}}>
                        <Logo/>
                        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={imageURL} alt="movie poster" style={{ width:"250px"}} />
                        </div>
                    </div>
                )}
                {isFlipped && (
                    <div>
                        <Details index={props.index} movies={movies} />
                    </div>
                )}
        </div>
    );
}

export default Card;