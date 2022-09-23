export interface AggregationHistogramBound {
    max?: number;
    min?: number;
}
export interface AuthLoginRequest {
    _id?: string;
    password?: string;
}
export interface AuthLoginResponse {
    user?: AuthLoginUser;
    validated?: boolean;
}
export interface AuthLoginUser {
    _id?: string;
    name?: string;
    role?: string;
}
export declare type CoreIndex = object;
export interface IndexAnalyzeResponse {
    tokens?: IndexAnalyzeResponseToken[];
}
export interface IndexAnalyzeResponseToken {
    end_offset?: number;
    keyword?: boolean;
    position?: number;
    start_offset?: number;
    token?: string;
    type?: string;
}
export interface IndexIndexListResponse {
    list?: CoreIndex[];
    page?: MetaPage;
}
export interface MetaAggregationAutoDateHistogram {
    buckets?: number;
    field?: string;
    format?: string;
    keyed?: boolean;
    minimum_interval?: string;
    time_zone?: string;
}
export interface MetaAggregationDateHistogram {
    calendar_interval?: string;
    extended_bounds?: AggregationHistogramBound;
    field?: string;
    fixed_interval?: string;
    format?: string;
    hard_bounds?: AggregationHistogramBound;
    interval?: string;
    keyed?: boolean;
    min_doc_count?: number;
    size?: number;
    time_zone?: string;
}
export interface MetaAggregationDateRange {
    field?: string;
    format?: string;
    keyed?: boolean;
    ranges?: MetaDateRange[];
    time_zone?: string;
}
export interface MetaAggregationHistogram {
    extended_bounds?: AggregationHistogramBound;
    field?: string;
    hard_bounds?: AggregationHistogramBound;
    interval?: number;
    keyed?: boolean;
    min_doc_count?: number;
    offset?: number;
    size?: number;
}
export interface MetaAggregationIPRange {
    field?: string;
    keyed?: boolean;
    ranges?: MetaIPRange[];
}
export interface MetaAggregationMetric {
    field?: string;
    weight_field?: string;
}
export interface MetaAggregationRange {
    field?: string;
    keyed?: boolean;
    ranges?: MetaRange[];
}
export interface MetaAggregationResponse {
    buckets?: any;
    interval?: string;
    value?: any;
}
export interface MetaAggregations {
    aggs?: Record<string, MetaAggregations>;
    auto_date_histogram?: MetaAggregationAutoDateHistogram;
    avg?: MetaAggregationMetric;
    cardinality?: MetaAggregationMetric;
    count?: MetaAggregationMetric;
    date_histogram?: MetaAggregationDateHistogram;
    date_range?: MetaAggregationDateRange;
    histogram?: MetaAggregationHistogram;
    ip_range?: MetaAggregationIPRange;
    max?: MetaAggregationMetric;
    min?: MetaAggregationMetric;
    range?: MetaAggregationRange;
    sum?: MetaAggregationMetric;
    terms?: MetaAggregationsTerms;
    weighted_avg?: MetaAggregationMetric;
}
export interface MetaAggregationsTerms {
    field?: string;
    order?: Record<string, string>;
    size?: number;
}
export interface MetaAnalyzer {
    char_filter?: string[];
    filter?: string[];
    lowercase?: boolean;
    pattern?: string;
    stopwords?: string[];
    token_filter?: string[];
    tokenizer?: string;
    type?: string;
}
export interface MetaBoolQueryForSDK {
    filter?: MetaQueryForSDK[];
    minimum_should_match?: number;
    must?: MetaQueryForSDK[];
    must_not?: MetaQueryForSDK[];
    should?: MetaQueryForSDK[];
}
export interface MetaDateRange {
    from?: string;
    to?: string;
}
export interface MetaExistsQuery {
    field?: string;
}
export interface MetaFuzzyQuery {
    boost?: number;
    fuzziness?: any;
    prefix_length?: number;
    value?: string;
}
export interface MetaHTTPResponse {
    message?: string;
}
export interface MetaHTTPResponseDocument {
    id?: string;
    index?: string;
    message?: string;
}
export interface MetaHTTPResponseError {
    error?: string;
}
export interface MetaHTTPResponseID {
    id?: string;
    message?: string;
}
export interface MetaHTTPResponseIndex {
    index?: string;
    message?: string;
    storage_type?: string;
}
export interface MetaHTTPResponseRecordCount {
    message?: string;
    record_count?: number;
}
export interface MetaHTTPResponseTemplate {
    message?: string;
    template?: string;
}
export interface MetaHealthzResponse {
    status?: string;
}
export interface MetaHighlight {
    fields?: Record<string, MetaHighlight>;
    fragment_size?: number;
    number_of_fragments?: number;
    post_tags?: string[];
    pre_tags?: string[];
}
export interface MetaHit {
    '@timestamp'?: string;
    _id?: string;
    _index?: string;
    _score?: number;
    _source?: any;
    _type?: string;
    fields?: Record<string, any>;
    highlight?: Record<string, any>;
}
export interface MetaHits {
    hits?: MetaHit[];
    max_score?: number;
    total?: MetaTotal;
}
export interface MetaIPRange {
    from?: string;
    to?: string;
}
export interface MetaIdsQuery {
    values?: string[];
}
export interface MetaIndexAnalysis {
    analyzer?: Record<string, MetaAnalyzer>;
    char_filter?: Record<string, any>;
    filter?: Record<string, any>;
    token_filter?: Record<string, any>;
    tokenizer?: Record<string, any>;
}
export interface MetaIndexSettings {
    analysis?: MetaIndexAnalysis;
    number_of_replicas?: number;
    number_of_shards?: number;
}
export interface MetaIndexSimple {
    mappings?: Record<string, any>;
    name?: string;
    settings?: MetaIndexSettings;
    shard_num?: number;
    storage_type?: string;
}
export interface MetaIndexTemplate {
    created_at?: string;
    index_patterns?: string[];
    priority?: number;
    template?: MetaTemplateTemplate;
    updated_at?: string;
}
export interface MetaJSONIngest {
    index?: string;
    records?: Record<string, any>[];
}
export interface MetaMappings {
    properties?: Record<string, MetaProperty>;
}
export declare type MetaMatchAllQuery = object;
export interface MetaMatchBoolPrefixQuery {
    analyzer?: string;
    boost?: number;
    query?: string;
}
export declare type MetaMatchNoneQuery = object;
export interface MetaMatchPhrasePrefixQuery {
    analyzer?: string;
    boost?: number;
    query?: string;
}
export interface MetaMatchPhraseQuery {
    analyzer?: string;
    boost?: number;
    query?: string;
}
export interface MetaMatchQuery {
    analyzer?: string;
    boost?: number;
    fuzziness?: any;
    operator?: string;
    prefix_length?: number;
    query?: string;
}
export interface MetaMultiMatchQuery {
    analyzer?: string;
    boost?: number;
    fields?: string[];
    minimum_should_match?: number;
    operator?: string;
    query?: string;
    type?: string;
}
export interface MetaPage {
    page_num?: number;
    page_size?: number;
    total?: number;
}
export interface MetaPrefixQuery {
    boost?: number;
    value?: string;
}
export interface MetaProperty {
    aggregatable?: boolean;
    analyzer?: string;
    fields?: Record<string, MetaProperty>;
    format?: string;
    highlightable?: boolean;
    index?: boolean;
    search_analyzer?: string;
    sortable?: boolean;
    store?: boolean;
    time_zone?: string;
    type?: string;
}
export interface MetaQueryForSDK {
    bool?: MetaBoolQueryForSDK;
    exists?: MetaExistsQuery;
    fuzzy?: Record<string, MetaFuzzyQuery>;
    ids?: MetaIdsQuery;
    match?: Record<string, MetaMatchQuery>;
    match_all?: MetaMatchAllQuery;
    match_bool_prefix?: Record<string, MetaMatchBoolPrefixQuery>;
    match_none?: MetaMatchNoneQuery;
    match_phrase?: Record<string, MetaMatchPhraseQuery>;
    match_phrase_prefix?: Record<string, MetaMatchPhrasePrefixQuery>;
    multi_match?: MetaMultiMatchQuery;
    prefix?: Record<string, MetaPrefixQuery>;
    query_string?: MetaQueryStringQuery;
    range?: Record<string, MetaRangeQueryForSDK>;
    regexp?: Record<string, MetaRegexpQuery>;
    simple_query_string?: MetaSimpleQueryStringQuery;
    term?: Record<string, MetaTermQueryForSDK>;
    terms?: Record<string, MetaTermsQuery>;
    wildcard?: Record<string, MetaWildcardQuery>;
}
export interface MetaQueryStringQuery {
    analyzer?: string;
    boost?: number;
    default_field?: string;
    default_operator?: string;
    fields?: string[];
    query?: string;
}
export interface MetaRange {
    from?: number;
    to?: number;
}
export interface MetaRangeQueryForSDK {
    boost?: number;
    format?: string;
    gt?: string;
    gte?: string;
    lt?: string;
    lte?: string;
    time_zone?: string;
}
export interface MetaRegexpQuery {
    boost?: number;
    flags?: string;
    value?: string;
}
export interface MetaSearchResponse {
    _shards?: MetaShards;
    aggregations?: Record<string, MetaAggregationResponse>;
    error?: string;
    hits?: MetaHits;
    timed_out?: boolean;
    took?: number;
}
export interface MetaShards {
    failed?: number;
    skipped?: number;
    successful?: number;
    total?: number;
}
export interface MetaSimpleQueryStringQuery {
    all_fields?: boolean;
    analyzer?: string;
    boost?: number;
    default_operator?: string;
    fields?: string[];
    query?: string;
}
export interface MetaTemplate {
    index_template?: MetaIndexTemplate;
    name?: string;
}
export interface MetaTemplateTemplate {
    mappings?: MetaMappings;
    settings?: MetaIndexSettings;
}
export interface MetaTermQueryForSDK {
    boost?: number;
    case_insensitive?: boolean;
    value?: string;
}
export declare type MetaTermsQuery = Record<string, any>;
export interface MetaTotal {
    value?: number;
}
export interface MetaUser {
    _id?: string;
    created_at?: string;
    name?: string;
    password?: string;
    role?: string;
    salt?: string;
    updated_at?: string;
}
export interface MetaVersionResponse {
    branch?: string;
    build?: string;
    build_date?: string;
    commit_hash?: string;
    version?: string;
}
export interface MetaWildcardQuery {
    boost?: number;
    value?: string;
}
export interface MetaZincQueryForSDK {
    _source?: string[];
    aggs?: Record<string, MetaAggregations>;
    explain?: boolean;
    fields?: string[];
    from?: number;
    highlight?: MetaHighlight;
    query?: MetaQueryForSDK;
    size?: number;
    sort?: string[];
    timeout?: number;
    track_total_hits?: boolean;
}
export interface V1AggregationDateRange {
    from?: string;
    to?: string;
}
export interface V1AggregationNumberRange {
    from?: number;
    to?: number;
}
export interface V1AggregationParams {
    agg_type?: string;
    aggs?: Record<string, V1AggregationParams>;
    date_ranges?: V1AggregationDateRange[];
    field?: string;
    ranges?: V1AggregationNumberRange[];
    size?: number;
    weight_field?: string;
}
export interface V1QueryParams {
    boost?: number;
    end_time?: string;
    field?: string;
    start_time?: string;
    term?: string;
    terms?: string[][];
}
export interface V1ZincQueryForSDK {
    _source?: string[];
    aggs?: Record<string, V1AggregationParams>;
    explain?: boolean;
    from?: number;
    highlight?: MetaHighlight;
    max_results?: number;
    query?: V1QueryParams;
    search_type?: string;
    sort_fields?: string[];
}
export interface ListIndicesParams {
    pageNum?: number;
    pageSize?: number;
    sortBy?: string;
    desc?: string;
    name?: string;
}
export interface IndexNameParams {
    name: string;
}
export interface ClientOptions {
    url: string;
    user: string;
    password: string;
    connections?: number;
}
export interface ZincSearchOptions extends ClientOptions {
}
export interface DocumentCreate {
    index: string;
    document: Record<string, any>;
}
export interface DocumentUpdate {
    index: string;
    id: string;
    document: Record<string, any>;
}
export interface DocumentDelete {
    index: string;
    id: string;
}
export interface DocumentMulti {
    index: string;
    query: string;
}
export interface EsSearch extends MetaZincQueryForSDK {
    index: string;
}
export interface V1Search extends V1ZincQueryForSDK {
    index: string;
}
export interface EsCreateIndex extends MetaIndexSimple {
    index: string;
}
export interface SetMapping {
    index: string;
    mapping: MetaMappings;
}
export interface SetSetting {
    index: string;
    settings: MetaIndexSettings;
}
//# sourceMappingURL=type.d.ts.map