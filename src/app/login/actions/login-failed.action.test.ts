import { createLoginFailedAction } from './login-failed.action';

describe('Login Failed Action', function() {
    it('Should match snapshot', () => {
        expect(
            createLoginFailedAction({
                error: {
                    message: 'test error',
                },
            }),
        ).toMatchSnapshot();
    });
});
