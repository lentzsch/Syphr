import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import Tutorial from './Tutorial';

function TutorialModal() {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        if (!user) {
            setShowModal(true)
        }
    }, [])

    const handleClick = () => {
        // setShowModal(false)
        return (
            <Tutorial />
        )
    }

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>Welcome agent. Are you familiar with how to operate enigma or do you need a refresher?</div>
                    <button className="tutorial-start-button" onClick={() => handleClick()}>Yes</button>
                    {/* <Tutorial /> */}
                    <button className="tutorial-close-button" onClick={() => setShowModal(false)}>
                        I know what I'm doing.
                    </button>
                </Modal>
            )}
        </>
    );
}

export default TutorialModal;