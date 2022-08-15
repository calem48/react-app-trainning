import React from 'react';
import { Link } from 'react-router-dom';
import mains from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../component';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>Tracking</span> App
                    </h1>
                    <p>
                        Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette
                        taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
                    </p>
                    <Link className="btn btn-hero" to="/register">Login/Register</Link>
                </div>
                <img src={mains} alt="main" className='img main-img' />
            </div>
        </Wrapper>
    );
}



export default Landing;
