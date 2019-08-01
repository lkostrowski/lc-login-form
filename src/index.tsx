import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import { StoreProvider } from './app/store/store-provider';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root'),
);
