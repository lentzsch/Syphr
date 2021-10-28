import React from 'react';
import { useSelector } from 'react-redux';
import './Lightboard.css';

const Lightboard = () => {
    const currentChar = useSelector(state => state.enigma.currentChar);
    const lightboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('');

    return (
        <div className="lightboard">
            {lightboardAlpha.map((char) => {
                if (char === currentChar) {
                    return (
                        <div className="character-container-currentChar lightboard"
                            key={char}
                            style={{ gridPosition: char }}
                        >
                            {char}
                        </div>
                    )
                } else {
                    return (
                        <div className="character-container lightboard"
                            key={`position-${char}`}
                            style={{ gridPosition: char }}
                        >
                            {char}
                        </div>
                    )
                };
            })};
        </div>
    )
};

export default Lightboard;