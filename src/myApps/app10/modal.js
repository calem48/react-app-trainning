import React from 'react';
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from './context';
const Modal = () => {
    let { isShowModal, modalColse } = useGlobalContext()
    return (
        <div className={`${isShowModal ? "modal-overlay show-modal" : "modal-overlay"}`}  >
            <div className="modal-container">
                <h3>modal content</h3>
                <button onClick={() => modalColse()} className='close-modal-btn'>
                    <FaTimes />
                </button>
            </div>
        </div >
    );
}

export default Modal;
