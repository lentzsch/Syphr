import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlugboard } from '../../store/enigma';
// import PlugCable from './PlugCable';
import './Plugboard.css';

//TO DO:
    //Plugboard currently allows the same character to occupy the value in two different key value pairs.

const Plugboard = () => {
    const dispatch = useDispatch();
    const plugboardSettings = useSelector(state => state.enigma.plugboard);
    const plugboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('');
    const [selectedCharacter, setSelectedCharacter] = useState('');
    const [charToRevert, setCharToRevert] = useState('')

    const handleClick = (char) => (event) => {
        event.stopPropagation();

        if (!selectedCharacter && plugboardSettings[char] !== char) {
            console.log('No selected char and plugboardsetting != char')
            console.log('Plugboard settings char: ', plugboardSettings[char], " char: ", char)
            setCharToRevert(plugboardSettings[char]);
            console.log(charToRevert)
            setSelectedCharacter(char);
        } else if (charToRevert) {
            console.log("selected char and char to revert")
            console.log("char to revert: ", charToRevert)
            dispatch(setPlugboard(selectedCharacter, char));
            dispatch(setPlugboard(charToRevert, charToRevert))
            setSelectedCharacter('');
        } else if (selectedCharacter) {
            console.log("seleceted char")
            console.log(charToRevert)
            dispatch(setPlugboard(selectedCharacter, char));
            setSelectedCharacter('');
        } else {
            setSelectedCharacter(char);
        }
    }

    const releasePlug = () => setSelectedCharacter('');

    useEffect(() => {
        document.addEventListener('click', releasePlug);
        return () => document.removeEventListener('click', releasePlug);
    }, []);

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
                        <div className="plug-socket" id={`${char}-socket`} key={char} onClick={handleClick(plugboardSettings[char])} value={char}>
                            {plugboardSettings[char]}
                        </div>
                    </div>
                );
            })}
            {/* <PlugCable /> */}
        </div>
    );
};

export default Plugboard;