import React from 'react';


const Rotors = () => {

    settings = [];
    for (let i = 1; i < 27; i++) {
        setting.push(i.toString())
    }

    return (
        <div className="rotors-container">
            <div className="rotor-container-three">
                <div className="rotor-position-setting-three-container">
                    <h3>n</h3>
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
        </div>
    )
}

export default Rotors;