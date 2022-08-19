import React from 'react';
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useSelector, useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { openSideBar } from '../features/user/userSlice';
import { NavLinks } from './index'

const SidebarSmall = () => {
    let { isOpenSideBar } = useSelector(state => state.user)

    let dispatch = useDispatch()
    return (
        <Wrapper>
            <div
                className={isOpenSideBar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
                <div className='content'>
                    <button className='close-btn' onClick={() => dispatch(openSideBar())}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
}

export default SidebarSmall;
