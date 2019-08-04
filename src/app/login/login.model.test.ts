import { LoginModel, loginReducer, LoginState } from './login.model';
import { createLoginRequestedAction } from './actions/login-requested.action';
import { createLoginSucceedAction } from './actions/login-succeed.action';
import { createLoginFailedAction } from './actions/login-failed.action';

describe('Login Model reducer', function() {
    let state: LoginModel;

    beforeEach(() => {
        state = {
            error: null,
            state: null,
        };
    });

    it('Should set loading state', () => {
        const newState = loginReducer(
            state,
            createLoginRequestedAction({
                keepLogged: false,
                password: 'SomePass1',
                email: 'asd@asd.com',
            }),
        );

        expect(newState.state).toBe(LoginState.PENDING);
    });

    it('Should set success state', () => {
        const newState = loginReducer(
            state,
            createLoginSucceedAction({
                uid: 'some-id',
                email: 'asd@asd.com',
            }),
        );

        expect(newState.state).toBe(LoginState.SUCCESS);
    });

    it('Should set error state', () => {
        const newState = loginReducer(
            state,
            createLoginFailedAction({
                error: {
                    message: 'Error',
                },
            }),
        );

        expect(newState.state).toBe(LoginState.ERROR);
        expect(newState.error).toEqual({ message: 'Error' });
    });
});
