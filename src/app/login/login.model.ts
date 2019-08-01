import { LoginFailedAction } from './actions/login-failed.action';
import { LoginRequestedAction } from './actions/login-requested.action';
import { LoginSucceedAction } from './actions/login-succeed.action';

export enum LoginState {
    PENDING = 'pending',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface LoginModel {
    error: {
        message: string;
    } | null;
    state: LoginState | null;
}

const initialState: LoginModel = {
    error: null,
    state: null,
};

type Actions = LoginFailedAction | LoginRequestedAction | LoginSucceedAction;

/**
 * For more complex app I will look for some redux-actions or other util to avoid switch-cases and boilerplate
 */
export const loginReducer = (
    state = initialState,
    action: Actions,
): LoginModel => {
    switch (action.type) {
        case 'login:login-requested': {
            return { ...state, state: LoginState.PENDING, error: null };
        }
        case 'login:login-failed': {
            return {
                ...state,
                state: LoginState.ERROR,
                error: action.payload.error,
            };
        }
        case 'login:login-succeed': {
            return {
                ...state,
                state: LoginState.SUCCESS,
                error: null,
            };
        }
    }
    return state;
};
