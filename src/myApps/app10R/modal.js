import React, { useEffect } from 'react';

const Modal = ({ msg, close }) => {

    useEffect(() => {
        setTimeout(() => {
            close()
        }, 3000)
    });
    return (
        <div className='modal'>
            <p>{msg}</p>
        </div>
    );
}

export default Modal;
