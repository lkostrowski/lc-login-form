import { useDispatch, useSelector } from 'react-redux';
import { getIsUserLogged } from '../selectors/get-is-user-logged.selector';
import { getLoginError } from '../selectors/get-login-error.selector';
import { createLoginRequestedAction } from '../actions/login-requested.action';

export const useLoginActions = () => {
    const dispatch = useDispatch();
    const logged = useSelector(getIsUserLogged);
    const error = useSelector(getLoginError);

    const requestLogin = (email: string, password: string) => {
        dispatch(
            createLoginRequestedAction({
                email,
                password,
            }),
        );
    };
};
