import React from 'react';

import { LoginScreen } from './login/screens/login.screen';

const App: React.FC = () => {
    return (
        <main>
            {/** Shortcut - normally there will be some routing here */}
            <LoginScreen />
        </main>
    );
};

export default App;
