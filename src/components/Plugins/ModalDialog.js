import React, { useState } from "react";


export const ModalDialog = (message) => {

    const [modal, setModal] = useState(false);

    const toggleModal = ()=>{
        setModal(!modal)
    }

    return(
        <div className="modal-Dialog">
            <div className="overlay" onClick={toggleModal}>
                <div className="message-content">
                    <p>TEST MESSAGE</p>
                </div>
                <button className="close-modal" onClick={toggleModal}>close</button>
            </div>
        </div>
    );
};