import { ApiService, CanFetch } from '../../api/api-service';
import { CanRequestLogin } from './can-request-login';

const api = new ApiService();

export class RequestLoginService implements CanRequestLogin {
    /**
     * Depending on design this can be on some config level or even env.
     */
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

export const requestLoginService = new RequestLoginService();
