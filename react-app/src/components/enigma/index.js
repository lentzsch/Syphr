import React from 'react';
import Reflector from './Reflector';
import Rotors from './Rotors';
import Lightboard from './Lightboard';
import Plugboard from './Plugboard';
import './index.css'

const Enigma = () => {
    return (
        <div className="enigma-container">
            <div className="reflector-container">
                <Reflector />
            </div>
            <div className="rotors-container">
                <Rotors />
            </div>
            {/* <div>
                <h1>Place Holder Div</h1>
            </div> */}
            <div className="lightboard-container">
                <Lightboard />
            </div>
            <div className="plugboard-container">
                <Plugboard />
            </div>
        </div>
    )
}

export default Enigma;