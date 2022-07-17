import React from 'react';
import styled from 'styled-components';
import logo from '../images/login-img.svg'
const Login = () => {
    return (
        <Wrapper>
            <div className="container">
                <img src={logo} alt="github user" />
                <h1>github user</h1>
                <button className="btn">Log In / Sign Up</button>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    text-align: center;
    height: 100vh;
    display: grid;
    align-items: center;

    .container h1 {
        padding: 20px 0;
    }

    .container img{
        width: 600px;
        margin: 0 auto;
    }



`
export default Login;
