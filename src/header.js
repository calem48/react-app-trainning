
import React, { useRef, useState, useEffect } from 'react';

const Header = () => {
    const [show, setshow] = useState(false);
    const containerNav = useRef(null)
    const nav = useRef(null)

    useEffect(() => {
        let height = nav.current.getBoundingClientRect()

    }, []);
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <img src="images/logo.png" alt="logo" />
                    </a>

                    <button onClick={() => setshow(!show)} className="mobile">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                <div className={`${show ? "nav active" : "nav"}`} ref={containerNav} >
                    <ul className="parent" ref={nav}>
                        <li><a href="#home">home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#services">services</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#team">team</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>

            </div>
        </header>
    );
}

export default Header;
