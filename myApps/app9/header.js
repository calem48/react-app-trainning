
import React, { useRef, useState, useEffect } from 'react';
import { navLinks } from "./data"


const Header = () => {
    const [show, setshow] = useState(false);
    const containerNav = useRef(null)
    const nav = useRef(null)

    useEffect(() => {
        let height = nav.current.getBoundingClientRect().height
        if (show) {
            containerNav.current.style.height = height + "px"

        } else {
            containerNav.current.style.height = 0 + "px"
        }
        if (containerNav.current.classList.contains("active")) {

        }

    }, [show]);
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="#home">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                    <button onClick={() => setshow(!show)} className="mobile">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                {/* {`${show ? "nav active" : "nav"}`} */}
                <div className="nav" ref={containerNav} >
                    <ul className="parent" ref={nav}>
                        {
                            navLinks.map(item => {
                                const { id, url, text } = item
                                return (
                                    <li key={id}><a href={url} >{text}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </header>
    );
}

export default Header;
