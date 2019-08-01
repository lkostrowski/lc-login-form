import { LoginFailedAction } from './actions/login-failed.action';
import { LoginRequestedAction } from './actions/login-requested.action';
import { LoginSucceedAction } from './actions/login-succeed.action';

export interface LoginModel {
    logged: boolean;
    error: {
        message: string;
    } | null;
}

const initialState: LoginModel = {
    error: null,
    logged: false,
};

type Actions = LoginFailedAction | LoginRequestedAction | LoginSucceedAction;

/**
 * For more complex app I will look for some redux-actions or other util to avoid switch-cases and boilerplate
 */
export const loginReducer = (
    state = initialState,
    action: Actions,
): LoginModel => {
    return state;
};
