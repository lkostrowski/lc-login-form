import { AnyAction } from 'redux';
import { LoginFormDto } from '../login-form.dto';

type Payload = LoginFormDto;

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
