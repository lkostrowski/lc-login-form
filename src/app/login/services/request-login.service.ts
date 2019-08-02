import { ApiService, CanFetch } from '../../api/api-service';

const api = new ApiService();

interface CanRequestLogin {
    requestLogin(
        email: string,
        password: string,
    ): Promise<{ uid: string; email: string }>;
}

export class RequestLoginService implements CanRequestLogin {
    private endpoint = '/api/login';

    constructor(private apiService: CanFetch = api) {}

    requestLogin(email: string, password: string) {
        return this.apiService
            .fetch(this.endpoint, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
            .then((resp) => {
                if (resp.status >= 400) {
                    throw new Error(resp.statusText);
                }

                return resp.json();
            });
    }
}

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

export const requestLoginService = new RequestLoginService();
export const mockRequestLoginService = new MockRequestLoginService();
