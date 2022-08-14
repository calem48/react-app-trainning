import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { amount } = useSelector((state) => state.cart)

    return (
        <nav>
            <div className="nav-center">
                <h3>Redux</h3>
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
