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
 * For more complex app I will look for some redux-actions or other util to avoid switch-cases and boilerplate.
 * I've tried plenty of implementations but its hard to choose between good Typescript integration and high level
 * abstraction. However it changes every TS minor is released.
 */
const handlers: {
    [K in Actions['type']]: (
        state: LoginModel,
        action: Actions[K],
    ) => LoginModel
} = {
    'login:login-requested': (state, action: LoginRequestedAction) => {
        return { ...state, state: LoginState.PENDING, error: null };
    },
    'login:login-failed': (state, action: LoginFailedAction) => {
        return {
            ...state,
            state: LoginState.ERROR,
            error: action.payload.error,
        };
    },
    'login:login-succeed': (state, action: LoginSucceedAction) => {
        return {
            ...state,
            state: LoginState.SUCCESS,
            error: null,
        };
    },
};

export const loginReducer = (
    state = initialState,
    action: Actions,
): LoginModel => {
    return handlers[action.type] ? handlers[action.type](state, action) : state;
};
