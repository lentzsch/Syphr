import React from 'react';
import './Plugboard.css'


const Plugboard = () => {

    const plugboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('')

    return (
        <div className="plugboard">
            {plugboardAlpha.map((char) => {
                return (
                    <div className="plug-socket"
                          style={{ gridPosition: char}}
                    >
                        {char}
                    </div>
                )
            })}
        </div>
    )
}

export default Plugboard;