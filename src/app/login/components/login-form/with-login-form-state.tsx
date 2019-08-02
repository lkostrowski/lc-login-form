import { withFormik } from 'formik';

import { LoginFormOuterProps } from './login-form.component';
import { LoginFormDto } from '../../login-form.dto';
import { loginFormValidationSchema } from '../../validators/login-form-validation.schema';

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
