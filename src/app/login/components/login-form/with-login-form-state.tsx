import { withFormik } from 'formik';

import { LoginFormDto } from '../../login-form.dto';
import { loginFormValidationSchema } from '../../validators/login-form-validation.schema';

import { LoginFormOuterProps } from './login-form.component';

export const withLoginFormState = withFormik<
    LoginFormOuterProps,
    LoginFormDto
>({
    handleSubmit(values, formikBag) {
        formikBag.props.onFormSubmit(values);
    },
    mapPropsToValues(props) {
        return {
            email: '',
            password: '',
            keepLogged: false,
        };
    },
    validationSchema: loginFormValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
});
