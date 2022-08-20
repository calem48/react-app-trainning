import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import links from '../utils/Links';

const NavLinks = () => {
    // const [active, setActive] = useState(1);
    return (
        <div className="nav-links">
            {
                links.map((link) => {
                    let { id, name, icon, path } = link
                    return (
                        <NavLink
                            key={id}
                            // onClick={() => setActive(id)}
                            // className={active === id ? "nav-link active" : "nav-link"}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}

                            to={path} aria-current="page">
                            <span className="icon">{icon}</span>
                            {name}
                        </NavLink>
                    )
                })
            }

        </div>
    );
}

export default NavLinks;
