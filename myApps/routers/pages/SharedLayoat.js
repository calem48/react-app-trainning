import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
const SharedLayoat = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>

    );
};
export default SharedLayoat;