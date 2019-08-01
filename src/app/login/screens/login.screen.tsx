import React from 'react';
import { useLoginActions } from '../hooks/use-login-actions';
import { StatefulLoginForm } from '../components/login-form/login-form.component';

export const LoginScreen = () => {
    const { requestLogin, error, logged } = useLoginActions();

    const onLoginRequested = (email: string, password: string) => {
        requestLogin(email, password);
    };

    return (
        <StatefulLoginForm
            onFormSubmit={onLoginRequested}
            globalError={(error && error.message) || undefined}
        />
    );
};
