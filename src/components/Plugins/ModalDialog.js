import React from "react";


export const ModalDialog = (props) => {

    return (
        <div className="modal-dialog" onClick={props.hide}>
            <div className="overlay" >
                <div className="message-content">
                    <p>{props.text}</p>
                </div>
                <button className="close-modal" onClick={props.isHidding}>Close</button>
            </div>
        </div>
    );
};