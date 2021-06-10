import React from 'react';
import './Plugboard.css'


const Plugboard = () => {

    const plugboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('')

    return (
        <div className="plugboard">
            {plugboardAlpha.map((char) => {
                return (
                    <div className="plug-socket-container"
                          style={{ gridPosition: char}}
                    >
                        <div className="plug-socket-lable">
                            {char}
                        </div>
                        <div className="plug-socket" value={char}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Plugboard;