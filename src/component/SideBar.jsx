import React from 'react';
import Warpper from "../assets/wrappers/BigSidebar";
import Logo from './Logo';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
const SideBar = () => {
    let { isOpenSideBar } = useSelector(state => state.user)
    return (
        <Warpper>
            <div className={isOpenSideBar ? "sidebar-container show-sidebar" : "sidebar-container"}>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <div className="nav-links">
                        <Link className="nav-link active" to="/" aria-current="page"><span className="icon"></span>stats</Link>
                        <Link className="nav-link" to="/all-jobs"><span className="icon"></span>all jobs</Link>
                        <Link className="nav-link" to="/add-job"><span className="icon"></span>add job</Link>
                        <Link className="nav-link" to="/profile"><span className="icon"></span>profile</Link>
                    </div>
                </div>
            </div>
        </Warpper>
    );
}

export default SideBar;
