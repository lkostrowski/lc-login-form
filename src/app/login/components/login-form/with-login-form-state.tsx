import { withFormik } from 'formik';

import { LoginFormOuterProps } from './login-form.component';
import { LoginFormValues } from './login-form-values';
import { loginFormValidationSchema } from './login-form-validation.schema';

export const withLoginFormState = withFormik<
    LoginFormOuterProps,
    LoginFormValues
>({
    handleSubmit(values, formikBag) {
        formikBag.props.onFormSubmit();
    },
    mapPropsToValues(props) {
        return {
            email: '',
            password: '',
        };
    },
    validationSchema: loginFormValidationSchema,
});