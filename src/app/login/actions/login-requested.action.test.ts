import { createLoginRequestedAction } from './login-requested.action';

describe('Login Requested Action', function() {
    it('Should match snapshot', () => {
        expect(
            createLoginRequestedAction({
                keepLogged: false,
                email: 'some-email@test.com',
                password: 'Password1',
            }),
        ).toMatchSnapshot();
    });
});
