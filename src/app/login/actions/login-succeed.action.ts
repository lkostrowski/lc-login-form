import { AnyAction } from 'redux';

/**
 * Some payload returned from server with user data
 */
interface Payload {
    uid: string;
    email: string;
}

export interface LoginSucceedAction extends AnyAction {
    type: 'login:login-succeed';
    payload: Payload;
}

export const createLoginSucceedAction = (
    payload: Payload,
): LoginSucceedAction => ({
    type: 'login:login-succeed',
    payload,
});
