import React from 'react';
import MessagesBox from './MessagesBox';
import InputBox from './InputBox';
import Enigma from './Enigma';
import OutputBox from './OutputBox';


const Main = () => {
    return (
        <div className="main-container">
            <MessagesBox />
            <InputBox />
            <Enigma />
            <OutputBox />
        </div>
    );
};

export default Main;