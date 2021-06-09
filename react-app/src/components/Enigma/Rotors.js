import React from 'react';
import './Rotors.css';

const Rotors = () => {

    let settings = [];
    for (let i = 1; i < 27; i++) {
        settings.push(i.toString())
    }

    return (
        <div className="rotors-container">
            <div className="rotor-container-three">
                <div className="rotor-number-three-container">
                    <h3>I</h3>
                </div>
                <div className="rotor-position-select-three-container">
                    <select
                        className="rotor-position-select-three"
                        id="rotor-position-select-three"
                        name="rotor-position-select-three"
                    >
                        {settings.map((setting) => {
                            return (
                                <option key={`rotor-three-setting-${setting}`}
                                        value={setting}
                                >
                                    {setting}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="rotor-container-two">
                <div className="rotor-number-two-container">
                    <h3>II</h3>
                </div>
                <div className="rotor-position-select-two-container">
                    <select
                        className="rotor-position-select-two"
                        id="rotor-position-select-two"
                        name="rotor-position-select-two"
                    >
                        {settings.map((setting) => {
                            return (
                                <option key={`rotor-two-setting-${setting}`}
                                    value={setting}
                                >
                                    {setting}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="rotor-container-one">
                <div className="rotor-number-one-container">
                    <h3>III</h3>
                </div>
                <div className="rotor-position-select-one-container">
                    <select
                        className="rotor-position-select-one"
                        id="rotor-position-select-one"
                        name="rotor-position-select-one"
                    >
                        {settings.map((setting) => {
                            return (
                                <option key={`rotor-one-setting-${setting}`}
                                    value={setting}
                                >
                                    {setting}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Rotors;