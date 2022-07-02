import React from 'react';

const Alert = ({ type, msg }) => {
    console.log(type, msg);
    return (
        <div>
            <p className={`alert alert-${type}`}>{msg}</p>
        </div>
    );
}

export default Alert;
