import React, {useState, useEffect } from 'react';
import Details from "../components/Details";

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
        <div className ="card" onClick={handleClick} style={{height: "40%"}}>
            <div>
                {!isFlipped && (
                    <div>
                        <img src={imageURL} alt="movie poster" style={{marginTop: "8vh", width:"250px"}} />
                    </div>
                )}
                {isFlipped && (
                    <div>
                        <Details index={props.index} movies={movies} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;