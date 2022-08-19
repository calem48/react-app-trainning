import React from 'react';
import Warpper from "../assets/wrappers/BigSidebar";
import Logo from './Logo';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { NavLinks } from './index'
const SideBar = () => {
    let { isOpenSideBar } = useSelector(state => state.user)
    return (
        <Warpper>
            <div className={!isOpenSideBar ? "sidebar-container show-sidebar" : "sidebar-container"}>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Warpper>
    );
}

export default SideBar;
