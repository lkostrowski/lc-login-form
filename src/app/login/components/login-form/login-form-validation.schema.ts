import { object, string } from 'yup';
import { LoginFormValues } from './login-form-values';

export const loginFormValidationSchema = object<LoginFormValues>({
    email: string()
        .email()
        .required(),
    password: string()
        .length(6)
        .test(
            'oneUpper',
            'Password must contain at least one uppercase letter',
            (value: string) => {
                return /[A-Z]/.test(value);
            },
        )
        .test(
            'oneLower',
            'Password must contain at least one lowercase letter',
            (value: string) => {
                return /[a-z]/.test(value);
            },
        )
        .test(
            'oneDigit',
            'Password must contain at least one number',
            (value: string) => {
                return /[0-9]/.test(value);
            },
        )
        .required(),
});
