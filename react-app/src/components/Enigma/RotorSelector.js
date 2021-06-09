import React from 'react';
import './RotorSelector.css'

const RotorSelector = () => {
    return (
        <div className="rotor-selector">
            <div className="rotor-selector-top-row">
                <div className="rotor-one">
                    <h1>I</h1>
                </div>
                <div className="rotor-two">
                    <h1>II</h1>
                </div>
                <div className="rotor-three">
                    <h1>III</h1>
                </div>
            </div>
            <div className="rotor-selector-bottom-row">
                <div className="rotor-four">
                    <h1>IV</h1>
                </div>
                <div className="rotor-five">
                    <h1>V</h1>
                </div>
            </div>
        </div>
    )
}

export default RotorSelector;