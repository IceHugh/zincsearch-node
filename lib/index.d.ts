import Request from './client';
import Indices from './api/indices';
import Document from './api/document';
import Search from './api/search';
import Es from './api/es';
import User from './api/user';
import { ZincSearchOptions } from './type';
export * from './type';
export default class ZincSearch {
    readonly indices: Indices;
    readonly document: Document;
    readonly search: Search;
    readonly client: Request;
    readonly user: User;
    readonly es: Es;
    constructor(options: ZincSearchOptions);
    healthz(): Promise<any>;
    version(): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map