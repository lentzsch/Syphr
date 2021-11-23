import React from 'react';
import MessagesBox from './MessagesBox';
import InputBox from './InputBox';
import Enigma from './Enigma';
import OutputBox from './OutputBox';
import WelcomeModal from './WelcomeModal';

const Main = () => {
    return (
        <div className="main-container">
            <WelcomeModal />
            <MessagesBox />
            <InputBox />
            <Enigma />
            <OutputBox />
        </div>
    );
};

export default Main;