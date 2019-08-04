import { CanRequestLogin } from './can-request-login';

export class MockRequestLoginService implements CanRequestLogin {
    async requestLogin(
        email: string,
        password: string,
    ): Promise<{ uid: string; email: string }> {
        const emailWhitelisted = 'test@test.pl';
        const passwordWhitelisted = 'Password1';

        await new Promise((res) => setTimeout(res, 500));

        if (email === emailWhitelisted && password === passwordWhitelisted) {
            return {
                uid: 'some-id',
                email: 'test@test.pl',
            };
        }

        throw new Error('Not authorized');
    }
}

export const mockRequestLoginService = new MockRequestLoginService();
