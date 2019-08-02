import { useDispatch, useSelector } from 'react-redux';
import { getIsUserLogged } from '../selectors/get-is-user-logged.selector';
import { getLoginError } from '../selectors/get-login-error.selector';
import { createLoginRequestedAction } from '../actions/login-requested.action';
import { LoginFormDto } from '../login-form.dto';

export const useLoginActions = () => {
    const dispatch = useDispatch();
    const logged = useSelector(getIsUserLogged);
    const error = useSelector(getLoginError);

    const requestLogin = (dto: LoginFormDto) => {
        dispatch(createLoginRequestedAction(dto));
    };

    return {
        logged,
        error,
        requestLogin,
    };
};
