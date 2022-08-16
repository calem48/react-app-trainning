import React from 'react';
import Warpper from "../../assets/wrappers/SharedLayout";
import { NavBar, SidebarSmall, SideBar } from '../../component';
import { Outlet } from 'react-router-dom'
const SharedLayoat = () => {
    return (
        <Warpper>
            <main className='dashboard'>
                <SideBar />
                <SidebarSmall />
                <div>
                    <NavBar />
                    <div className="dashboard-page">
                        <Outlet />
                    </div>
                </div>
            </main>
        </Warpper>
    );
}

export default SharedLayoat;
