import React from 'react';
import './Lightboard.css'

const Lightboard = () => {

    const lightboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('')

    return (
        <div className="lightboard">
            {lightboardAlpha.map((char) => {
                return (
                    <div className="character-container"
                         style={{ gridPosition: char }}
                    >
                        {char}
                    </div>
                )
            })}
        </div>
    )
}

export default Lightboard;