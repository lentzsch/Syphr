import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRotorToSet } from '../../store/enigma';
import './RotorSelector.css';

const RotorSelector = () => {
    const dispatch = useDispatch();

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
                <div className="rotor-one">
                    <h1 onClick={onclick('I')}>I</h1>
                </div>
                <div className="rotor-two">
                    <h1 onClick={onclick('II')}>II</h1>
                </div>
                <div className="rotor-three">
                    <h1 onClick={onclick('III')}>III</h1>
                </div>
            </div>
            <div className="rotor-selector-bottom-row">
                <div className="rotor-four">
                    <h1 onClick={onclick('IV')}>IV</h1>
                </div>
                <div className="rotor-five">
                    <h1 onClick={onclick('V')}>V</h1>
                </div>
            </div>
        </div>
    )
}

export default RotorSelector;