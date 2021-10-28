import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as enigmaActions from '../../store/enigma';
import './Rotors.css';

const Rotors = () => {
    const dispatch = useDispatch();
    const { rotor1, rotor2, rotor3, rotorToSet } = useSelector(state => state.enigma);

    const onclickRotorName = (rotor, rotorToSet) => () => {
        if (rotorToSet){
            dispatch(enigmaActions[`setRotor${rotor}name`](rotorToSet));
        };
    };

    const onChangeRotorPosition = (rotor) => (event) => {
        dispatch(enigmaActions[`setRotor${rotor}position`](+event.target.value));
    };

    let settings = [];
    for (let i = 1; i < 27; i++) {
        settings.push(i.toString());
    };

    return (
        <div className="rotors-container">
            <div className="rotor-container-three">
                <div className="rotor-number-container">
                    <h3 onClick={onclickRotorName(3, rotorToSet)}>{rotor3.name}</h3>
                </div>
                <div className="rotor-position-select-three-container">
                    <select
                        className="rotor-position-select-three"
                        id="rotor-position-select-three"
                        name="rotor-position-select-three"
                        size="3"
                        onChange={onChangeRotorPosition(3)}
                        value={rotor3.position}
                    >
                        {settings.map((setting) => {
                            return (
                                <option key={`rotor-three-setting-${setting}`}
                                        value={setting}
                                >
                                    {setting}
                                </option>
                            );
                        })};
                    </select>
                </div>
            </div>
            <div className="rotor-container-two">
                <div className="rotor-number-container">
                    <h3 onClick={onclickRotorName(2, rotorToSet)}>{rotor2.name}</h3>
                </div>
                <div className="rotor-position-select-two-container">
                    <select
                        className="rotor-position-select-two"
                        id="rotor-position-select-two"
                        name="rotor-position-select-two"
                        size="3"
                        onChange={onChangeRotorPosition(2)}
                        value={rotor2.position}
                    >
                        {settings.map((setting) => {
                            return (
                                <option key={`rotor-two-setting-${setting}`}
                                    value={setting}
                                >
                                    {setting}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="rotor-container-one">
                <div className="rotor-number-container">
                    <h3 onClick={onclickRotorName(1, rotorToSet)}>{rotor1.name}</h3>
                </div>
                <div className="rotor-position-select-one-container">
                    <select
                        className="rotor-position-select-one"
                        id="rotor-position-select-one"
                        name="rotor-position-select-one"
                        size="3"
                        onChange={onChangeRotorPosition(1)}
                        value={rotor1.position}
                    >
                        {settings.map((setting) => {
                            return (
                                <option key={`rotor-one-setting-${setting}`}
                                    value={setting}
                                >
                                    {setting}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Rotors;