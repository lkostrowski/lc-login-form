import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Polyfill for IE
 * Normally should be feature-detected for performance reasons
 */
import 'whatwg-fetch';

import App from './app/app';
import { StoreProvider } from './app/store/store-provider';
import './index.module.scss';

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root'),
);
