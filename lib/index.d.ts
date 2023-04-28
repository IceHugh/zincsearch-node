import Request from './client';
import Indices from './api/indices';
import Document from './api/document';
import Es from './api/es';
import User from './api/user';
import { ZincSearchOptions, V1Search, MetaSearchResponse } from './type';
export * from './type';
export default class ZincSearch {
    readonly indices: Indices;
    readonly document: Document;
    readonly client: Request;
    readonly user: User;
    readonly es: Es;
    constructor(options: ZincSearchOptions);
    healthz(): Promise<any>;
    version(): Promise<any>;
    search(params: V1Search): Promise<MetaSearchResponse>;
}
//# sourceMappingURL=index.d.ts.map