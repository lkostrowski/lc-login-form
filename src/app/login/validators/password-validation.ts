import { string } from 'yup';

export const minLength = string().min(
    6,
    'Password should be at least 6 characters long',
);

export const oneUpper = string().test(
    'oneUpper',
    'Password must contain at least one uppercase letter',
    (value: string) => {
        return /[A-Z]/.test(value);
    },
);

export const oneLower = string().test(
    'oneLower',
    'Password must contain at least one lowercase letter',
    (value: string) => {
        return /[a-z]/.test(value);
    },
);

export const oneDigit = string().test(
    'oneDigit',
    'Password must contain at least one number',
    (value: string) => {
        return /[0-9]/.test(value);
    },
);

export const passwordValidation = string()
    .required('Password is required')
    .concat(minLength)
    .concat(oneUpper)
    .concat(oneLower)
    .concat(oneDigit);
