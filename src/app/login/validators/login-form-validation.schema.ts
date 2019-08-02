import { boolean, object, string } from 'yup';
import { LoginFormValues } from '../components/login-form/login-form-values';
import { passwordValidation } from './password-validation';

export const loginFormValidationSchema = object<LoginFormValues>({
    email: string()
        .required('Email is required')
        .email('This is not proper email format'),
    password: passwordValidation,
    keepLogged: boolean(),
});
