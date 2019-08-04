import { RequestLoginService } from './request-login.service';
import { CanFetch } from '../../api/api-service';

describe('Request Login service', function() {
    it('Should call request method', () => {
        const mockFetchMethod = jest.fn(
            async (endpoint, config) =>
                ({
                    json: async () => 'ok',
                } as Response),
        );

        class MockFetch implements CanFetch {
            async fetch(endpoint: string, config: RequestInit) {
                return mockFetchMethod(endpoint, config);
            }
        }
        const service = new RequestLoginService(new MockFetch());

        service.requestLogin('foo@bar.com', 'Password1');

        expect(mockFetchMethod).toBeCalled();
    });
});
