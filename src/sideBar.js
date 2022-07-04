import React from 'react';
import logo from "./logo.svg"
import { FaTimes } from "react-icons/fa";
import { navLinks, socialLinks } from "./data"
import { useGlobalContext } from './context';

const SideBar = () => {
    let { isShowBar, barColse } = useGlobalContext()

    return (
        <aside className={`${isShowBar ? "sidebar show-sidebar " : "sidebar"}`}  >
            <div className="sidebar-header">
                <img src={logo} alt="logo" />
                <button onClick={() => barColse()} className='close-btn'><FaTimes /></button>
            </div>
            <ul className="links">
                {
                    navLinks.map(link => {
                        return <li key={link.id}>
                            <a href={link.url}>{link.icon}{link.text}</a>
                        </li>
                    })
                }

            </ul>
            <ul className="social-icons">
                {
                    socialLinks.map(link => {
                        return <li key={link.id}>
                            <a href={link.url}>{link.icon}</a>
                        </li>
                    })
                }

            </ul>
        </aside >
    );
}

export default SideBar;
