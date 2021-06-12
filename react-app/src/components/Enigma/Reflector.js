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
                <div className="reflector-selection-light">
                    {   selectedReflector === 'A'
                        ?<div className="selected-reflector-light" />
                        : <div/>
                    }
                </div>
                <button className="reflector-selection-button" onClick={onClickReflector('A')}>A</button>
            </div>
            <div className="reflector-selection-container">
                <div className="reflector-selection-light">
                    {selectedReflector === 'B'
                        ? <div className="selected-reflector-light" />
                        : <div />
                    }
                </div>
                <button className="reflector-selection-button" onClick={onClickReflector('B')}>B</button>
            </div>
            <div className="reflector-selection-container">
                <div className="reflector-selection-light">
                    {selectedReflector === 'C'
                        ? <div className="selected-reflector-light" />
                        : <div />
                    }
                </div>
                <button className="reflector-selection-button" onClick={onClickReflector('C')}>C</button>
            </div>
        </div>
    )
}

export default Reflector;