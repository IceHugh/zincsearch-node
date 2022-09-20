interface ClientOptions {
    url: string;
    user: string;
    password: string;
    connections?: number;
}
export default class Request {
    private readonly options;
    private client;
    headers: any;
    constructor(options: ClientOptions);
    request(options: any): Promise<any>;
}
export {};
//# sourceMappingURL=client.d.ts.map