import { AnyAction } from 'redux';

interface Payload {
    email: string;
    password: string;
}

export interface LoginRequestedAction extends AnyAction {
    type: 'login:login-requested';
    payload: Payload;
}

export const createLoginRequestedAction = (
    payload: Payload,
): LoginRequestedAction => ({
    type: 'login:login-requested',
    payload,
});
