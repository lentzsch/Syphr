import React from 'react';
import MessagesBox from './MessagesBox'
import InputBox from './InputBox'
import Enigma from './Enigma'
import OutputBox from './OutputBox'
import TutorialModal from './TutorialModal';

const Main = () => {
    return (
        <div className="main-container">
            <MessagesBox />
            <InputBox />
            <Enigma />
            <OutputBox />
            <TutorialModal />
        </div>
    )
}

export default Main