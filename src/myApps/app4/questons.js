import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';

const Questons = ({ title, info }) => {
    const [show, setshow] = useState(false);
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={() => { setshow(!show) }} className='btn'>
                    {show ? <FaMinus /> : <FaPlus />}
                </button>
            </header>
            {
                show && <p>{info}</p>
            }
        </article>
    );
}

export default Questons;
