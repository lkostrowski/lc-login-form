import { createLoginSucceedAction } from './login-succeed.action';

describe('Login Succeed Action', function() {
    it('Should match snapshot', () => {
        expect(
            createLoginSucceedAction({
                email: 'some-email@test.com',
                uid: 'user-id',
            }),
        ).toMatchSnapshot();
    });
});
