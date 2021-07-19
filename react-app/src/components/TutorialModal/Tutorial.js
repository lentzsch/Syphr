import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import TutorialOne from './TutorialOne';

function Tutorial() {
    const [showModal, setShowModal] = useState(true);
    
    return (
        <>
        {/* <button onClick={() => setShowModal(true)}>Yes</button> */}
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                TEST NEXT MODAL
            </Modal>
        )}
        </>
    );
}

export default Tutorial;