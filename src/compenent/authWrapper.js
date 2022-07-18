import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import img from '../images/preloader.gif'

const AuthWrapper = ({ children }) => {
    const { isLoading, error } = useAuth0();
    if (isLoading) {
        return <main>
            <img src={img} alt="" className='loading-img' />
        </main>
    }

    if (error) {
        return <div>error ...</div>;
    }
    return children
};



export default AuthWrapper;
