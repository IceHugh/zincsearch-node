import { V1Search, MetaSearchResponse } from '../type';
import Request from '../client';
export default class Search {
    private readonly client;
    constructor(client: Request);
    search(params: V1Search): Promise<MetaSearchResponse>;
}
//# sourceMappingURL=search.d.ts.map