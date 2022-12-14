import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './WelcomeModal.css'


function WelcomeModal() {
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="welcome-container">
                    <h1>Welcome to Syphr!</h1>
                    <p>
                        Syphr is a messaging app that encrypts messages using an emulation of the Enigma machine from WWII.
                        Enigma utilized what is essentially a Caesar sypher on steroids. It was still considered unbreakable however,
                        due to the fact that the settings had 158,962,555,217,826,360,000 potential combinations.
                    </p>
                    <p>
                        To quickly get started, press the "Demo" button and you will be logged in as a.turing@blecthleypark.gov,
                        codename "Turing". When searching for users to send a messages to, you may see
                        some other members from MI6's XX committee, but you are looking for "C", the codename
                        for Stuart Menzies, the head of MI6. He has sent you instructions encrypted with the default enigma settings.
                    </p>
                    <p>
                        Back in the day, Enigma users would adjust the settings as necessary, choosing which letters to swap
                        using the plugboard (bottom section), which of five rotors to place in which of three slots
                        (top right and top center respectively), the starting position of each rotor (the scroll wheels top center)
                        and finally, one of three reflectors (top left), and then one by one, they would press each character of the message
                        to be sent or decoded on the keyboard, writing down which character would light up in response on the
                        lightboard (middle section). Thank God for copy and paste, eh?
                    </p>
                    <button className="welcome-button" onClick={() => setShowModal(false)}>Let's get started!</button>
                    </div>              
                </Modal>
            )}
        </>
    );
};

export default WelcomeModal;