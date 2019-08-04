import { withFormik } from 'formik';

import { LoginFormDto } from '../../login-form.dto';
import { loginFormValidationSchema } from '../../validators/login-form-validation.schema';

import { LoginFormOuterProps } from './login-form.component';

/**
 * Form state on separate layer. It can be swapped to e.g Redux bindings or other library, without tight coupling with
 * UI.
 * It might be used as Hook but I find this easier to test.
 */
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
