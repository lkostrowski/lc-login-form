import { AnyAction } from 'redux';

interface Payload {
    error: {
        message: string;
    };
}

export interface LoginFailedAction extends AnyAction {
    type: 'login:login-failed';
    payload: Payload;
}

export const createLoginFailedAction = (
    payload: Payload,
): LoginFailedAction => ({
    type: 'login:login-failed',
    payload,
});
