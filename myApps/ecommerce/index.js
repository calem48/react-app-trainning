import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProviderProduct } from './context/ContextProduct';
import { AppProviderFilter } from './context/contextFilter';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AppProviderProduct>
        <AppProviderFilter>
            <App />
        </AppProviderFilter>
    </AppProviderProduct>
);




