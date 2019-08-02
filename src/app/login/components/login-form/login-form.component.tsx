import React, { HTMLProps } from 'react';
import { FormikProps } from 'formik';
import cx from 'classnames'

import { LoginFormValues } from './login-form-values';
import { TextField } from '../../../common/text-field/text-field.component';
import { compose } from 'recompose';
import { withLoginFormState } from './with-login-form-state';
import { Button } from '../../../common/button/button.component';

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
    className
}) => {
    return (
        <form onSubmit={handleSubmit} className={cx(className)}>
            <TextField
                error={errors.email}
                label="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
            />
            <TextField
                error={errors.password}
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
            />
            {globalError && <span>{globalError}</span>}
            <Button type="submit">Let me in!</Button>
        </form>
    );
};

export const StatefulLoginForm = compose<Props, LoginFormOuterProps>(
    withLoginFormState,
)(LoginForm);
