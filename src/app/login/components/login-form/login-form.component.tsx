import React, { HTMLProps } from 'react';
import { FormikProps } from 'formik';
import cx from 'classnames';

import { LoginFormValues } from './login-form-values';
import { TextField } from '../../../common/text-field/text-field.component';
import { compose } from 'recompose';
import { withLoginFormState } from './with-login-form-state';
import { Button } from '../../../common/button/button.component';
import { ErrorBar } from '../../../common/error-bar/error-bar.component';

import { ReactComponent as ArrowIcon } from '../../../../images/arrow.svg';

import styles from './login-form.module.scss';

export interface LoginFormOuterProps extends HTMLProps<HTMLFormElement> {
    onFormSubmit(email: string, password: string): unknown;
    globalError?: string;
}

interface Props extends FormikProps<LoginFormValues>, LoginFormOuterProps {}

export const LoginForm: React.FC<Props> = ({
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    globalError,
    className,
    touched,
}) => {
    return (
        <form onSubmit={handleSubmit} className={cx(className)}>
            {globalError && (
                <ErrorBar className={styles.globalError}>
                    {globalError}
                </ErrorBar>
            )}
            <TextField
                errorMessage={errors.email}
                hasError={Boolean(errors.email && touched.email)}
                label="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                className={styles.field}
            />
            <TextField
                hasError={Boolean(errors.password && touched.password)}
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                className={styles.field}
            />
            <Button fullWidth type="submit" rightIcon={<ArrowIcon />}>
                Let me in!
            </Button>
        </form>
    );
};

export const StatefulLoginForm = compose<Props, LoginFormOuterProps>(
    withLoginFormState,
)(LoginForm);
