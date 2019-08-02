export type IFetch = (
    input: RequestInfo,
    init?: RequestInit,
) => Promise<Response>;

export interface CanFetch {
    fetch(endpoint: string, config: RequestInit): Promise<Response>;
}

export class ApiService implements CanFetch {
    constructor(private fetchApi: IFetch = window.fetch.bind(window)) {}

    async fetch(endpoint: string, config: RequestInit = {}) {
        return this.fetchApi(endpoint, {
            ...config,
        });
    }
}
