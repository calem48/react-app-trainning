import React, { useState } from 'react';
import Warpper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { openSideBar, logOutUser } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
    let { user } = useSelector(state => state.user)
    const [show, setShow] = useState(false);
    let dispatch = useDispatch()
    return (
        <Warpper>
            <div className="nav-center">
                <button onClick={() => dispatch(openSideBar())} type="button" className="toggle-btn"><FaAlignLeft /></button>
                <div>
                    <Logo />
                    <h3 className="logo-text">dashboard</h3>
                </div>
                <div className="btn-container">
                    <button
                        onClick={() => setShow(!show)}
                        type="button"
                        className="btn"
                    >
                        <FaUserCircle />{user?.name}<FaCaretDown />
                    </button>
                    <div className={show ? "dropdown show-dropdown" : "dropdown"}>
                        <button onClick={() => dispatch(logOutUser())} type="button" className="dropdown-btn">logout</button>
                    </div>
                </div>
            </div>
        </Warpper >
    );
}

export default Navbar;
