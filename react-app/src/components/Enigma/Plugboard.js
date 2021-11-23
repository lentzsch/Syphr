import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlugboard } from '../../store/enigma';
import './Plugboard.css';

const Plugboard = () => {
    const dispatch = useDispatch();
    const plugboardSettings = useSelector(state => state.enigma.plugboard);
    const plugboardAlpha = 'QWERTZUIOASDFGHJKPYXCVBNML'.split('');
    const [selectedCharacter, setSelectedCharacter] = useState('');
    const [charToRevert, setCharToRevert] = useState('')

    const handleClick = (char) => (event) => {
        event.stopPropagation();
        if (selectedCharacter && plugboardSettings[char] !== char) {
            return;
        }

        if (!selectedCharacter && plugboardSettings[char] !== char) {
            setCharToRevert(plugboardSettings[char]);
            console.log(charToRevert)
            setSelectedCharacter(char);
        } else if (selectedCharacter && charToRevert) {
            dispatch(setPlugboard(selectedCharacter, char));
            dispatch(setPlugboard(charToRevert, charToRevert));
            setSelectedCharacter('');
            setCharToRevert('')
        } else if (selectedCharacter) {
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
                        { plugboardSettings[char] === selectedCharacter
                            ? <div className="plug-socket-selected" id={`${char}-socket`} key={char} onClick={handleClick(plugboardSettings[char])} value={char}>
                                {plugboardSettings[char]}
                            </div>
                            :( plugboardSettings[char] !== char
                            ? <div className="plug-socket-swapped" id={`${char}-socket`} key={char} onClick={handleClick(plugboardSettings[char])} value={char}>
                                {plugboardSettings[char]}
                            </div>
                            :<div className="plug-socket" id={`${char}-socket`} key={char} onClick={handleClick(plugboardSettings[char])} value={char}>
                                {plugboardSettings[char]}
                            </div>
                            )
                        }
                    </div>
                );
            })}
        </div>
    );
};

export default Plugboard;