export type IFetch = (
    input: RequestInfo,
    init?: RequestInit,
) => Promise<Response>;

export interface CanFetch {
    fetch(endpoint: string, config: RequestInit): Promise<Response>;
}

/**
 * It's just a simple wrapper on native Fetch api. It can add some headers here etc. Also can inject e.g Axios or other
 * HTTP client.
 */
export class ApiService implements CanFetch {
    constructor(private fetchApi: IFetch = window.fetch.bind(window)) {}

    async fetch(endpoint: string, config: RequestInit = {}) {
        return this.fetchApi(endpoint, {
            ...config,
        });
    }
}
