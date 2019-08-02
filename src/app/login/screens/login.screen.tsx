import React from 'react';
import { useLoginActions } from '../hooks/use-login-actions';
import { StatefulLoginForm } from '../components/login-form/login-form.component';

import { ReactComponent as Logo } from '../../../images/logo.svg';

import styles from './login-screen.module.scss';

export const LoginScreen = () => {
    const { requestLogin, error, logged } = useLoginActions();

    const onLoginRequested = (email: string, password: string) => {
        requestLogin(email, password);
    };

    return (
        <div className={styles.container}>
            <div className={styles.paper}>
                <Logo className={styles.logo} />
                <StatefulLoginForm
                    className={styles.form}
                    onFormSubmit={onLoginRequested}
                    globalError={(error && error.message) || undefined}
                />
            </div>
        </div>
    );
};
