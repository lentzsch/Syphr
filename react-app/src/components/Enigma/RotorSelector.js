import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRotorToSet } from '../../store/enigma';
import './RotorSelector.css';

const RotorSelector = () => {
    const dispatch = useDispatch();
    const enigma = useSelector(state => state.enigma)
    const rotors = [enigma.rotor1.name, enigma.rotor2.name, enigma.rotor3.name]
    console.log("ROTORS ------->", rotors)

    const onclick = (name) => (event) => {
        event.stopPropagation()
        dispatch(setRotorToSet(name))
    }

    const releaseName = () => dispatch(setRotorToSet(''))

    useEffect(() => {
        document.addEventListener('click', releaseName)
        return () => document.removeEventListener('click', releaseName)
    }, [])

    return (
        <div className="rotor-selector">
            <div className="rotor-selector-top-row">
                <div className="rotor-container">
                    {enigma.rotorToSet === "I" || rotors.includes('I')
                        ?<div className="selected-rotor" onClick={onclick('I')}>I</div>
                        :<div className="unselected-rotor" onClick={onclick('I')}>I</div>
                    }
                </div>
                <div className="rotor-container">
                    {enigma.rotorToSet === "II" || rotors.includes('II')
                        ? <div className="selected-rotor" onClick={onclick('II')}>II</div>
                        : <div className="unselected-rotor" onClick={onclick('II')}>II</div>
                    }
                </div>
                <div className="rotor-container">
                    {enigma.rotorToSet === "III" || rotors.includes('III')
                        ? <div className="selected-rotor" onClick={onclick('III')}>III</div>
                        : <div className="unselected-rotor" onClick={onclick('III')}>III</div>
                    }
                </div>
            </div>
            <div className="rotor-selector-bottom-row">
                <div className="rotor-container">
                    {enigma.rotorToSet === "IV" || rotors.includes('IV')
                        ? <div className="selected-rotor" onClick={onclick('IV')}>IV</div>
                        : <div className="unselected-rotor" onClick={onclick('IV')}>IV</div>
                    }
                </div>
                <div className="rotor-container">
                    {enigma.rotorToSet === "V" || rotors.includes('V')
                        ? <div className="selected-rotor" onClick={onclick('V')}>V</div>
                        : <div className="unselected-rotor" onClick={onclick('V')}>V</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default RotorSelector;