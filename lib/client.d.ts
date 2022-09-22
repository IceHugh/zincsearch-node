import { ClientOptions } from './type';
export default class Request {
    private readonly options;
    private client;
    headers: any;
    constructor(options: ClientOptions);
    request<T = any>(options: any): Promise<T>;
}
//# sourceMappingURL=client.d.ts.map