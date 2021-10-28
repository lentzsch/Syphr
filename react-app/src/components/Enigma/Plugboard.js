import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setPlugboard } from '../../store/enigma';
// import PlugCable from './PlugCable'
import './Plugboard.css'

//TO DO:
    //Plugboard currently allows the same character to occupy the value in two different key value pairs.

const Plugboard = () => {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.session.user)
    const plugboardSettings = useSelector(state => state.enigma.plugboard)
    const plugboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('')
    const [selectedCharacter, setSelectedCharacter] = useState('')

    const handleClick = (char) => (event) => {
        event.stopPropagation()
        if (selectedCharacter) {
            dispatch(setPlugboard(selectedCharacter, char))
            setSelectedCharacter('')
        } else {
            setSelectedCharacter(char)
        }
    }

    const releasePlug = () => setSelectedCharacter('')

    useEffect(() => {
        document.addEventListener('click', releasePlug)
        return () => document.removeEventListener('click', releasePlug)
    }, [])

    return (
        <div className="plugboard">
            {plugboardAlpha.map((char) => {
                return (
                    <div className="plug-socket-container"
                         key={`${char}-socket-container`}
                         style={{ gridPosition: char}}
                    >
                        <div className="plug-socket-lable" key={`${char}-socket-lable`}>
                            {char}
                        </div>
                        <div className="plug-socket" id={`${char}-socket`} key={char} onClick={handleClick(char)} value={char}>
                            {plugboardSettings[char]}
                        </div>
                    </div>
                )
            })}
            {/* <PlugCable /> */}
        </div>
    )
}

export default Plugboard;