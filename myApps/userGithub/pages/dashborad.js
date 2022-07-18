import React from 'react';
import { Info, Navbar, Search, User, Repos } from '../compenent/index';
import { useGlobalContext } from "../context/context";
import img from '../images/preloader.gif'
const Dashborad = () => {
    let { loading } = useGlobalContext()
    if (loading) {
        return <main>
            <Navbar />
            <Search />
            <img src={img} alt="" className='loading-img' />
        </main>
    }
    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />

        </main>
    );
}

export default Dashborad;
