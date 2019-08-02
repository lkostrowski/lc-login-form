import React, { HTMLProps } from 'react';
import { FormikProps } from 'formik';
import cx from 'classnames';

import { LoginFormDto } from '../../login-form.dto';
import { TextField } from '../../../common/text-field/text-field.component';
import { compose } from 'recompose';
import { withLoginFormState } from './with-login-form-state';
import { Button } from '../../../common/button/button.component';
import { ErrorBar } from '../../../common/error-bar/error-bar.component';

import { ReactComponent as ArrowIcon } from '../../../../images/arrow.svg';

import styles from './login-form.module.scss';
import { PasswordField } from '../password-field/password-field.component';
import { Checkbox } from '../../../common/checkbox/checkbox.component';
import { LoadingSpinner } from '../../../common/loading-spinner/loading-spinner.component';

export interface LoginFormOuterProps extends HTMLProps<HTMLFormElement> {
    onFormSubmit(dto: LoginFormDto): unknown;
    globalError?: string;
    isLoading?: boolean;
}

interface Props extends FormikProps<LoginFormDto>, LoginFormOuterProps {}

export const LoginForm: React.FC<Props> = ({
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    globalError,
    className,
    touched,
    isLoading,
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
            <PasswordField
                hasError={Boolean(errors.password && touched.password)}
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                className={styles.field}
            />
            <Checkbox
                onChange={handleChange}
                name="keepLogged"
                className={styles.keepLogged}
                label="Keep me logged"
                checked={values.keepLogged}
            />
            <Button
                fullWidth
                disabled={isLoading}
                type="submit"
                rightIcon={isLoading ? <LoadingSpinner /> : <ArrowIcon />}
            >
                Let me in!
            </Button>
        </form>
    );
};

export const StatefulLoginForm = compose<Props, LoginFormOuterProps>(
    withLoginFormState,
)(LoginForm);
