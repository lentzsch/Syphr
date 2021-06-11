import React, { useSate } from 'react';
import { useSelector } from 'react-redux'
// import PlugCable from './PlugCable'
import './Plugboard.css'


const Plugboard = () => {
    const user = useSelector(state => state.session.user)
    const plugboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('')
    const plugboardOutput = {}
    
    const handleClick = () => {
        
    }


    return (
        <div className="plugboard">
            {plugboardAlpha.map((char) => {
                return (
                    <div className="plug-socket-container"
                          style={{ gridPosition: char}}
                    >
                        <div className="plug-socket-lable">
                            {char}
                        </div>
                        <div className="plug-socket" id={char} value={char}/>
                    </div>
                )
            })}
            {/* <PlugCable /> */}
        </div>
    )
}

export default Plugboard;