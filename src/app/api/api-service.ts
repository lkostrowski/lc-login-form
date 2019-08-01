export type IFetch = (
    input: RequestInfo,
    init?: RequestInit,
) => Promise<Response>;

export class ApiService {
    constructor(private fetchApi: IFetch = window.fetch.bind(window)) {}

    async fetch(endpoint: string, config: RequestInit = {}) {
        return this.fetchApi(endpoint, {
            ...config,
        });
    }
}
