import { ApiService } from '../../api/api-service';

const api = new ApiService();

export class RequestLoginService {
    private endpoint = '/api/login';

    constructor(private apiService = api) {}

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
