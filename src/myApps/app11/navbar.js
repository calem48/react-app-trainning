import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { useGlobalContext } from './context';
const Navbar = () => {
    let { amount } = useGlobalContext()
    return (
        <nav>
            <div className="nav-center">
                <h3>useReducer</h3>
                <div className="nav-container">
                    <FaShoppingBag />
                    <div className="amount-container">
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
