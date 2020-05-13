import React, { useState } from 'react';
import { ModalContainer, ModalBody } from './styles';

function Modal({ handleClose, show, children }) {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName}>
            <ModalContainer>
                <ModalBody>
                    {children}
                    <button onClick={handleClose}>close</button>
                </ModalBody>
            </ModalContainer>
        </div>
    )
}

export default Modal;