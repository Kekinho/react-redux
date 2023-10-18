import React, { useState } from 'react';
import './FlipCard.css';

export default function FlipCard(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`FlipCard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="FlipCard-inner">
            <div className="FlipCard-front">
                    <div className="Header">
                        <span className="Title">{props.title}</span>
                    </div>
                    <p>Frente</p>
                </div>
                <div className="FlipCard-back">
                    <p>Conteúdo da parte de trás</p>
                </div>
            </div>
        </div>
    );
}
