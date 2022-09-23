export interface AggregationHistogramBound {
  /** maximum */
  max?: number;

  /** minimum */
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

export type CoreIndex = object;

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

  /** format key_as_string */
  format?: string;
  keyed?: boolean;

  /** minute,hour,day,week,month,quarter,year */
  minimum_interval?: string;

  /** time_zone */
  time_zone?: string;
}

export interface MetaAggregationDateHistogram {
  /** minute,hour,day,week,month,quarter,year */
  calendar_interval?: string;
  extended_bounds?: AggregationHistogramBound;
  field?: string;

  /** ms,s,m,h,d */
  fixed_interval?: string;

  /** format key_as_string */
  format?: string;
  hard_bounds?: AggregationHistogramBound;

  /** ms,s,m,h,d */
  interval?: string;
  keyed?: boolean;
  min_doc_count?: number;
  size?: number;

  /** time_zone */
  time_zone?: string;
}

export interface MetaAggregationDateRange {
  field?: string;

  /** format the `to` and `from` values to `_as_string`, and used to format `keyed response` */
  format?: string;
  keyed?: boolean;

  /** refer */
  ranges?: MetaDateRange[];

  /** refer */
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

  /** Field name to be used for setting weight for primary field for weighted average aggregation */
  weight_field?: string;
}

export interface MetaAggregationRange {
  field?: string;
  keyed?: boolean;
  ranges?: MetaRange[];
}

export interface MetaAggregationResponse {
  /** slice or map */
  buckets?: any;

  /** support for auto_date_histogram_aggregation */
  interval?: string;
  value?: any;
}

export interface MetaAggregations {
  /** nested aggregations */
  aggs?: Record<string, MetaAggregations>;
  auto_date_histogram?: MetaAggregationAutoDateHistogram;
  avg?: MetaAggregationMetric;
  cardinality?: MetaAggregationMetric;
  count?: MetaAggregationMetric;
  date_histogram?: MetaAggregationDateHistogram;
  date_range?: MetaAggregationDateRange;
  histogram?: MetaAggregationHistogram;

  /** TODO: not implemented */
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

  /** { "_count": "asc" } */
  order?: Record<string, string>;
  size?: number;
}

export interface MetaAnalyzer {
  char_filter?: string[];

  /** compatibility with es, alias for TokenFilter */
  filter?: string[];

  /** for type=pattern */
  lowercase?: boolean;

  /** for type=pattern */
  pattern?: string;

  /** for type=pattern,standard,stop */
  stopwords?: string[];
  token_filter?: string[];
  tokenizer?: string;

  /** options for compatible */
  type?: string;
}

export interface MetaBoolQueryForSDK {
  /** query, [query1, query2] */
  filter?: MetaQueryForSDK[];

  /** only for should */
  minimum_should_match?: number;

  /** query, [query1, query2] */
  must?: MetaQueryForSDK[];

  /** query, [query1, query2] */
  must_not?: MetaQueryForSDK[];

  /** query, [query1, query2] */
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

  /** auto, 1,2,3,n */
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

  /** compatibility with es, alias for TokenFilter */
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

  /** highest priority is chosen */
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

export type MetaMatchAllQuery = object;

export interface MetaMatchBoolPrefixQuery {
  analyzer?: string;
  boost?: number;
  query?: string;
}

export type MetaMatchNoneQuery = object;

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

  /** auto, 1,2,3,n */
  fuzziness?: any;

  /** or(default), and */
  operator?: string;
  prefix_length?: number;
  query?: string;
}

export interface MetaMultiMatchQuery {
  analyzer?: string;
  boost?: number;
  fields?: string[];
  minimum_should_match?: number;

  /** or(default), and */
  operator?: string;
  query?: string;

  /** best_fields(default), most_fields, cross_fields, phrase, phrase_prefix, bool_prefix */
  type?: string;
}

export interface MetaPage {
  page_num?: number;
  page_size?: number;
  total?: number;
}

export interface MetaPrefixQuery {
  boost?: number;

  /** You can speed up prefix queries using the index_prefixes mapping parameter. */
  value?: string;
}

export interface MetaProperty {
  aggregatable?: boolean;
  analyzer?: string;

  /**
   * Fields allow the same string value to be indexed in multiple ways for different purposes,
   * such as one field for search and a multi-field for sorting and aggregations,
   * or the same string value analyzed by different analyzers.
   * If the Fields property is defined within a sub-field, it will be ignored.
   *
   * Currently, only "text" fields support the Fields parameter.
   */
  fields?: Record<string, MetaProperty>;

  /** date format yyyy-MM-dd HH:mm:ss || yyyy-MM-dd || epoch_millis */
  format?: string;
  highlightable?: boolean;
  index?: boolean;
  search_analyzer?: string;
  sortable?: boolean;
  store?: boolean;

  /** date format time_zone */
  time_zone?: string;

  /** text, keyword, date, numeric, boolean, geo_point */
  type?: string;
}

export interface MetaQueryForSDK {
  /** . */
  bool?: MetaBoolQueryForSDK;

  /** . */
  exists?: MetaExistsQuery;

  /** simple, PrefixQuery */
  fuzzy?: Record<string, MetaFuzzyQuery>;

  /** . */
  ids?: MetaIdsQuery;

  /** simple, MatchQuery */
  match?: Record<string, MetaMatchQuery>;

  /** just set or null */
  match_all?: MetaMatchAllQuery;

  /** simple, MatchBoolPrefixQuery */
  match_bool_prefix?: Record<string, MetaMatchBoolPrefixQuery>;

  /** just set or null */
  match_none?: MetaMatchNoneQuery;

  /** simple, MatchPhraseQuery */
  match_phrase?: Record<string, MetaMatchPhraseQuery>;

  /** simple, MatchPhrasePrefixQuery */
  match_phrase_prefix?: Record<string, MetaMatchPhrasePrefixQuery>;

  /** . */
  multi_match?: MetaMultiMatchQuery;

  /** . */
  prefix?: Record<string, MetaPrefixQuery>;

  /** . */
  query_string?: MetaQueryStringQuery;

  /** simple, FuzzyQuery */
  range?: Record<string, MetaRangeQueryForSDK>;

  /** simple, FuzzyQuery */
  regexp?: Record<string, MetaRegexpQuery>;

  /** . */
  simple_query_string?: MetaSimpleQueryStringQuery;

  /** simple, TermQuery */
  term?: Record<string, MetaTermQueryForSDK>;

  /** . */
  terms?: Record<string, MetaTermsQuery>;

  /** simple, WildcardQuery */
  wildcard?: Record<string, MetaWildcardQuery>;
}

export interface MetaQueryStringQuery {
  analyzer?: string;
  boost?: number;
  default_field?: string;

  /** or(default), and */
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

  /** Date format used to convert date values in the query. */
  format?: string;

  /** string, float64 */
  gt?: string;

  /** string, float64 */
  gte?: string;

  /** string, float64 */
  lt?: string;

  /** string, float64 */
  lte?: string;

  /** used to convert date values in the query to UTC. */
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

  /** Time it took to generate the response */
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

  /** or(default), and */
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

export type MetaTermsQuery = Record<string, any>;

export interface MetaTotal {
  /** Count of documents returned */
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
  /** true, false, ["field1", "field2.*"] */
  _source?: string[];
  aggs?: Record<string, MetaAggregations>;
  explain?: boolean;

  /** ["field1", "field2.*", {"field": "fieldName", "format": "epoch_millis"}] */
  fields?: string[];
  from?: number;
  highlight?: MetaHighlight;
  query?: MetaQueryForSDK;
  size?: number;

  /** "_sorce", ["+Year","-Year", {"Year": "desc"}, "Date": {"order": "asc"", "format": "yyyy-MM-dd"}}"}] */
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

  /** Field name to be used for setting weight for primary field for weighted average aggregation */
  weight_field?: string;
}

export interface V1QueryParams {
  boost?: number;
  end_time?: string;
  field?: string;
  start_time?: string;
  term?: string;

  /** For multi phrase query */
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

  /** SearchType is the type of search to perform. Can be match, match_phrase, query_string, etc */
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
  connections?: number; // The number of undici Client instances to create. 
}

export interface ZincSearchOptions extends ClientOptions {}

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
