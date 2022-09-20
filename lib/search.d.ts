import Request from './client';
import Indices from './api/indices';
import Document from './api/document';
import Search from './api/search';
export interface ZincSearchOptions {
    url: string;
    user: string;
    password: string;
}
export default class ZincSearch {
    readonly indices: Indices;
    readonly document: Document;
    readonly search: Search;
    readonly client: Request;
    constructor(options: ZincSearchOptions);
    healthz(): Promise<any>;
    version(): Promise<any>;
}
//# sourceMappingURL=search.d.ts.map