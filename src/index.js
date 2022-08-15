import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "normalize.css/normalize.css"
import { store } from './sotre'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);




