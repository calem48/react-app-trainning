import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const PrivateRouter = ({ children }) => {

    let { user } = useSelector(state => state.user)
    if (!user) {
        console.log("inside");
        return <Navigate to='/landing' />

    }

    return children

}

export default PrivateRouter;
