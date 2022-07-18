import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppContext } from './context/context';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="dev-fskqcjgb.us.auth0.com"
        clientId="8OK2bhhCwstuDZLVynV6WYAySyaspbmc"
        redirectUri={window.location.origin}
    >

        <AppContext>
            <App />
        </AppContext>

    </Auth0Provider>


);




