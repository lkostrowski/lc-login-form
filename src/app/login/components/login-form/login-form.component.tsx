import React, { HTMLProps } from 'react';
import { FormikProps } from 'formik';

import { LoginFormValues } from './login-form-values';
import { TextField } from '../../../common/text-field/text-field.component';

export interface LoginFormOuterProps {
    onFormSubmit(): unknown;
}

interface Props
    extends FormikProps<LoginFormValues>,
        LoginFormOuterProps,
        HTMLProps<HTMLFormElement> {}

export const LoginForm: React.FC<Props> = ({
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
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
            </fieldset>
        </form>
    );
};
