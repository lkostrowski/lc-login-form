import { boolean, object, string } from 'yup';
import { LoginFormDto } from '../login-form.dto';
import { passwordValidation } from './password-validation';

export const loginFormValidationSchema = object<LoginFormDto>({
    email: string()
        .required('Email is required')
        .email('This is not proper email format'),
    password: passwordValidation,
    keepLogged: boolean(),
});
