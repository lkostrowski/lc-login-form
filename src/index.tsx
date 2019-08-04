import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { StoreProvider } from './app/store/store-provider';
import './index.module.scss';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root'),
);
