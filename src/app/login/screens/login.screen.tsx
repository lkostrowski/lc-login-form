import cx from 'classnames';
import React from 'react';

import { ReactComponent as Logo } from '../../../images/logo.svg';
import { StatefulLoginForm } from '../components/login-form/login-form.component';
import { LoginSuccessful } from '../components/login-successful/login-successful.component';
import { useLoginActions } from '../hooks/use-login-actions';
import { LoginFormDto } from '../login-form.dto';

import styles from './login-screen.module.scss';

/**
 * In "real" app this will have some route props injected.
 */
export const LoginScreen = () => {
    const { requestLogin, error, logged, loading } = useLoginActions();

    const onLoginRequested = (dto: LoginFormDto) => {
        requestLogin(dto);
    };

    return (
        <div className={styles.container}>
            <div className={styles.paper}>
                {!logged && <Logo className={styles.logo} />}
                <StatefulLoginForm
                    isLoading={loading}
                    className={cx(styles.form, {
                        [styles.formLogged]: logged,
                    })}
                    onFormSubmit={onLoginRequested}
                    globalError={(error && error.message) || undefined}
                />
                <LoginSuccessful
                    className={cx(styles.successScreen, {
                        [styles.successScreenLoaded]: logged,
                    })}
                />
            </div>
        </div>
    );
};
