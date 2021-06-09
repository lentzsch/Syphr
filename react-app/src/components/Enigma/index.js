import React from 'react';
import Reflector from './Reflector';
import Rotors from './Rotors';
import RotorSelector from './RotorSelector'
import Lightboard from './Lightboard';
import Plugboard from './Plugboard';
import './index.css';

const Enigma = () => {
    return (
        <div className="enigma-container">
            <div className="reflector-container">
                <Reflector />
            </div>
            {/* <div className="rotors-container"> */}
                <Rotors />
            {/* </div> */}
            {/* <div> */}
                <RotorSelector />
            {/* </div> */}
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