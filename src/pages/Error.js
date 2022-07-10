import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-container'>
            <h1>oops! it's a dead end</h1>
            <Link to="/" className='btn btn-primary'>Back to home</Link>
        </div>
    );
}

export default Error;
