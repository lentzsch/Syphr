import React from 'react';
import './Reflector.css'

const Reflector = () => {
    return (
        <div className="reflector">
            <div className="reflector-selection-container">
                <button className="reflector-selection-a">A</button>
            </div>
            <div className="reflector-selection-container">
                <button className="reflector-selection-b">B</button>
            </div>
            <div className="reflector-selection-container">
                <button className="reflector-selection-c">C</button>
            </div>
        </div>
    )
}

export default Reflector;