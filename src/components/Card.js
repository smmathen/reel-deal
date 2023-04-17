import React, {useState} from 'react';

function Card() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className ="card" onClick={handleClick}>
            <div className={isFlipped ? "card__back" : "card__front"}>
                <h2>{isFlipped ? "Back" : "Front"}</h2>
            </div>
        </div>
    );
}

export default Card;