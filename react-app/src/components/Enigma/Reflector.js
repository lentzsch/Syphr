import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setReflector } from '../../store/enigma';
import './Reflector.css'

const Reflector = () => {
    const dispatch = useDispatch();
    const selectedReflector = useSelector(state => state.enigma.reflector)

    const onClickReflector = (setting) => () => {
        dispatch(setReflector(setting))
    }

    return (
        <div className="reflector">
            <div className="reflector-selection-container">
                <button className="reflector-selection-a" onClick={onClickReflector('A')}>A</button>
            </div>
            <div className="reflector-selection-container">
                <button className="reflector-selection-b" onClick={onClickReflector('B')}>B</button>
            </div>
            <div className="reflector-selection-container">
                <button className="reflector-selection-c" onClick={onClickReflector('C')}>C</button>
            </div>
        </div>
    )
}

export default Reflector;