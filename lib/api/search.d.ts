export declare type SEARCH_TYPE = 'matchall' | 'match' | 'matchphrase' | 'term' | 'querystring' | 'prefix' | 'wildcard' | 'fuzzy' | 'daterange';
export interface SearchParams {
    index: string;
    search_type: SEARCH_TYPE;
    query: Record<string, string>;
    from: number;
    max_results: number;
    sort_fields?: [string];
    _source?: [string];
}
export interface EsSearchParams {
    index: string;
    query: Record<string, any>;
    aggs?: Record<string, any>;
    from: number;
    size: number;
    sort?: [string];
    _source?: [string];
}
export default class Search {
    private readonly client;
    constructor(client: any);
    search(params: SearchParams): any;
    esSearch(params: EsSearchParams): any;
}
//# sourceMappingURL=search.d.ts.map