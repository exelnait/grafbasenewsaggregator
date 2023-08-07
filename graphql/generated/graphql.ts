/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, is compliant with the date-time format outlined in section 5.6 of the RFC 3339
   * profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
   *
   * This scalar is a description of an exact instant on the timeline such as the instant that a user account was created.
   *
   * # Input Coercion
   *
   * When expected as an input type, only RFC 3339 compliant date-time strings are accepted. All other input values raise a query error indicating an incorrect type.
   *
   * # Result Coercion
   *
   * Where an RFC 3339 compliant date-time string has a time-zone other than UTC, it is shifted to UTC.
   * For example, the date-time string 2016-01-01T14:10:20+01:00 is shifted to 2016-01-01T13:10:20Z.
   */
  DateTime: { input: any; output: any; }
  /** An URL as defined by RFC1738. For example, `https://grafbase.com/foo/` or `mailto:example@grafbase.com`. */
  URL: { input: any; output: any; }
};

export type BooleanSearchFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomCreatePublisherInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  creatorID: Scalars['String']['input'];
  sources: Array<CustomCreatePublisherSourceCustomInput>;
  title: Scalars['String']['input'];
  topicID: Scalars['ID']['input'];
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CustomCreatePublisherSourceCustomInput = {
  itunes?: InputMaybe<CustomCreatePublisherSourceRssInput>;
  rss?: InputMaybe<CustomCreatePublisherSourceRssInput>;
  twitter?: InputMaybe<CustomCreatePublisherSourceTwitterInput>;
  type: Scalars['String']['input'];
  youtube?: InputMaybe<CustomCreatePublisherSourceYoutubeInput>;
};

export type CustomCreatePublisherSourceRssInput = {
  url: Scalars['String']['input'];
};

export type CustomCreatePublisherSourceTwitterInput = {
  username: Scalars['String']['input'];
};

export type CustomCreatePublisherSourceYoutubeInput = {
  channelID?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CustomMutation = {
  __typename?: 'CustomMutation';
  aggregateNewsByType: Array<CustomNewsItem>;
  createPublisher: CustomPublisher;
};


export type CustomMutationAggregateNewsByTypeArgs = {
  type: Scalars['String']['input'];
};


export type CustomMutationCreatePublisherArgs = {
  input: CustomCreatePublisherInput;
};

export type CustomNewsItem = {
  __typename?: 'CustomNewsItem';
  id: Scalars['String']['output'];
};

export type CustomPublisher = {
  __typename?: 'CustomPublisher';
  id: Scalars['String']['output'];
};

export type CustomQuery = {
  __typename?: 'CustomQuery';
  sayHello: Scalars['String']['output'];
};

export type DateTimeSearchFilterInput = {
  ALL?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  ANY?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  NONE?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  NOT?: InputMaybe<DateTimeSearchFilterInput>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IdCollectionFilterInput = {
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Access to embedded custom API. */
  custom: CustomMutation;
  /** Create a NewsItem */
  newsItemCreate?: Maybe<NewsItemCreatePayload>;
  /** Create multiple NewsItem */
  newsItemCreateMany?: Maybe<NewsItemCreateManyPayload>;
  /** Delete a NewsItem by ID or unique field */
  newsItemDelete?: Maybe<NewsItemDeletePayload>;
  /** Delete multiple NewsItem */
  newsItemDeleteMany?: Maybe<NewsItemDeleteManyPayload>;
  /** Update a NewsItem */
  newsItemUpdate?: Maybe<NewsItemUpdatePayload>;
  /** Update multiple NewsItem */
  newsItemUpdateMany?: Maybe<NewsItemUpdateManyPayload>;
  /** Create a Picture */
  pictureCreate?: Maybe<PictureCreatePayload>;
  /** Create multiple Picture */
  pictureCreateMany?: Maybe<PictureCreateManyPayload>;
  /** Delete a Picture by ID or unique field */
  pictureDelete?: Maybe<PictureDeletePayload>;
  /** Delete multiple Picture */
  pictureDeleteMany?: Maybe<PictureDeleteManyPayload>;
  /** Update a Picture */
  pictureUpdate?: Maybe<PictureUpdatePayload>;
  /** Update multiple Picture */
  pictureUpdateMany?: Maybe<PictureUpdateManyPayload>;
  /** Create a Publisher */
  publisherCreate?: Maybe<PublisherCreatePayload>;
  /** Create multiple Publisher */
  publisherCreateMany?: Maybe<PublisherCreateManyPayload>;
  /** Delete a Publisher by ID or unique field */
  publisherDelete?: Maybe<PublisherDeletePayload>;
  /** Delete multiple Publisher */
  publisherDeleteMany?: Maybe<PublisherDeleteManyPayload>;
  /** Create a PublisherSource */
  publisherSourceCreate?: Maybe<PublisherSourceCreatePayload>;
  /** Create multiple PublisherSource */
  publisherSourceCreateMany?: Maybe<PublisherSourceCreateManyPayload>;
  /** Delete a PublisherSource by ID or unique field */
  publisherSourceDelete?: Maybe<PublisherSourceDeletePayload>;
  /** Delete multiple PublisherSource */
  publisherSourceDeleteMany?: Maybe<PublisherSourceDeleteManyPayload>;
  /** Update a PublisherSource */
  publisherSourceUpdate?: Maybe<PublisherSourceUpdatePayload>;
  /** Update multiple PublisherSource */
  publisherSourceUpdateMany?: Maybe<PublisherSourceUpdateManyPayload>;
  /** Update a Publisher */
  publisherUpdate?: Maybe<PublisherUpdatePayload>;
  /** Update multiple Publisher */
  publisherUpdateMany?: Maybe<PublisherUpdateManyPayload>;
  /** Create a Topic */
  topicCreate?: Maybe<TopicCreatePayload>;
  /** Create multiple Topic */
  topicCreateMany?: Maybe<TopicCreateManyPayload>;
  /** Delete a Topic by ID or unique field */
  topicDelete?: Maybe<TopicDeletePayload>;
  /** Delete multiple Topic */
  topicDeleteMany?: Maybe<TopicDeleteManyPayload>;
  /** Update a Topic */
  topicUpdate?: Maybe<TopicUpdatePayload>;
  /** Update multiple Topic */
  topicUpdateMany?: Maybe<TopicUpdateManyPayload>;
};


export type MutationNewsItemCreateArgs = {
  input: NewsItemCreateInput;
};


export type MutationNewsItemCreateManyArgs = {
  input: Array<NewsItemCreateManyInput>;
};


export type MutationNewsItemDeleteArgs = {
  by: NewsItemByInput;
};


export type MutationNewsItemDeleteManyArgs = {
  input: Array<NewsItemDeleteManyInput>;
};


export type MutationNewsItemUpdateArgs = {
  by: NewsItemByInput;
  input: NewsItemUpdateInput;
};


export type MutationNewsItemUpdateManyArgs = {
  input: Array<NewsItemUpdateManyInput>;
};


export type MutationPictureCreateArgs = {
  input: PictureCreateInput;
};


export type MutationPictureCreateManyArgs = {
  input: Array<PictureCreateManyInput>;
};


export type MutationPictureDeleteArgs = {
  by: PictureByInput;
};


export type MutationPictureDeleteManyArgs = {
  input: Array<PictureDeleteManyInput>;
};


export type MutationPictureUpdateArgs = {
  by: PictureByInput;
  input: PictureUpdateInput;
};


export type MutationPictureUpdateManyArgs = {
  input: Array<PictureUpdateManyInput>;
};


export type MutationPublisherCreateArgs = {
  input: PublisherCreateInput;
};


export type MutationPublisherCreateManyArgs = {
  input: Array<PublisherCreateManyInput>;
};


export type MutationPublisherDeleteArgs = {
  by: PublisherByInput;
};


export type MutationPublisherDeleteManyArgs = {
  input: Array<PublisherDeleteManyInput>;
};


export type MutationPublisherSourceCreateArgs = {
  input: PublisherSourceCreateInput;
};


export type MutationPublisherSourceCreateManyArgs = {
  input: Array<PublisherSourceCreateManyInput>;
};


export type MutationPublisherSourceDeleteArgs = {
  by: PublisherSourceByInput;
};


export type MutationPublisherSourceDeleteManyArgs = {
  input: Array<PublisherSourceDeleteManyInput>;
};


export type MutationPublisherSourceUpdateArgs = {
  by: PublisherSourceByInput;
  input: PublisherSourceUpdateInput;
};


export type MutationPublisherSourceUpdateManyArgs = {
  input: Array<PublisherSourceUpdateManyInput>;
};


export type MutationPublisherUpdateArgs = {
  by: PublisherByInput;
  input: PublisherUpdateInput;
};


export type MutationPublisherUpdateManyArgs = {
  input: Array<PublisherUpdateManyInput>;
};


export type MutationTopicCreateArgs = {
  input: TopicCreateInput;
};


export type MutationTopicCreateManyArgs = {
  input: Array<TopicCreateManyInput>;
};


export type MutationTopicDeleteArgs = {
  by: TopicByInput;
};


export type MutationTopicDeleteManyArgs = {
  input: Array<TopicDeleteManyInput>;
};


export type MutationTopicUpdateArgs = {
  by: TopicByInput;
  input: TopicUpdateInput;
};


export type MutationTopicUpdateManyArgs = {
  input: Array<TopicUpdateManyInput>;
};

export type NewsItem = {
  __typename?: 'NewsItem';
  cover?: Maybe<Picture>;
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  creator: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** Unique identifier */
  id: Scalars['ID']['output'];
  publishedAt: Scalars['String']['output'];
  publisher?: Maybe<Publisher>;
  rss?: Maybe<NewsItemDataRss>;
  title: Scalars['String']['output'];
  topic?: Maybe<Topic>;
  type: SourceType;
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
  youtube?: Maybe<NewsItemDataYouTube>;
};

export type NewsItemByInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NewsItemCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type NewsItemConnection = {
  __typename?: 'NewsItemConnection';
  edges?: Maybe<Array<Maybe<NewsItemEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a NewsItem */
export type NewsItemCreateInput = {
  cover?: InputMaybe<NewsItemToPictureCreatePictureRelation>;
  creator: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  publishedAt: Scalars['String']['input'];
  publisher?: InputMaybe<NewsItemToPublisherCreatePublisherRelation>;
  rss?: InputMaybe<NewsItemDataRssInput>;
  title: Scalars['String']['input'];
  topic?: InputMaybe<NewsItemToTopicCreateTopicRelation>;
  type: SourceType;
  youtube?: InputMaybe<NewsItemDataYouTubeInput>;
};

export type NewsItemCreateManyInput = {
  input: NewsItemCreateInput;
};

export type NewsItemCreateManyPayload = {
  __typename?: 'NewsItemCreateManyPayload';
  newsItemCollection: Array<NewsItem>;
};

export type NewsItemCreatePayload = {
  __typename?: 'NewsItemCreatePayload';
  newsItem?: Maybe<NewsItem>;
};

export type NewsItemDataRss = {
  __typename?: 'NewsItemDataRSS';
  author?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Scalars['String']['output']>>;
  contentHtml?: Maybe<Scalars['String']['output']>;
  contentJson?: Maybe<Scalars['String']['output']>;
  coverUrl?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

/** NewsItemDataRSS input type. */
export type NewsItemDataRssInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  contentHtml?: InputMaybe<Scalars['String']['input']>;
  contentJson?: InputMaybe<Scalars['String']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type NewsItemDataYouTube = {
  __typename?: 'NewsItemDataYouTube';
  coverUrl?: Maybe<Scalars['String']['output']>;
  videoId: Scalars['String']['output'];
};

/** NewsItemDataYouTube input type. */
export type NewsItemDataYouTubeInput = {
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  videoId: Scalars['String']['input'];
};

export type NewsItemDeleteManyInput = {
  by: NewsItemByInput;
};

export type NewsItemDeleteManyPayload = {
  __typename?: 'NewsItemDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type NewsItemDeletePayload = {
  __typename?: 'NewsItemDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type NewsItemEdge = {
  __typename?: 'NewsItemEdge';
  cursor: Scalars['String']['output'];
  node: NewsItem;
};

export type NewsItemOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type NewsItemSearchConnection = {
  __typename?: 'NewsItemSearchConnection';
  edges: Array<NewsItemSearchEdge>;
  pageInfo: PageInfo;
  searchInfo?: Maybe<SearchInfo>;
};

export type NewsItemSearchEdge = {
  __typename?: 'NewsItemSearchEdge';
  cursor: Scalars['String']['output'];
  node: NewsItem;
  score: Scalars['Float']['output'];
};

export type NewsItemSearchFilterInput = {
  ALL?: InputMaybe<Array<NewsItemSearchFilterInput>>;
  ANY?: InputMaybe<Array<NewsItemSearchFilterInput>>;
  NONE?: InputMaybe<Array<NewsItemSearchFilterInput>>;
  NOT?: InputMaybe<NewsItemSearchFilterInput>;
  createdAt?: InputMaybe<DateTimeSearchFilterInput>;
  creator?: InputMaybe<StringSearchFilterInput>;
  description?: InputMaybe<StringOrNullSearchFilterInput>;
  publishedAt?: InputMaybe<StringSearchFilterInput>;
  title?: InputMaybe<StringSearchFilterInput>;
  type?: InputMaybe<SourceTypeSearchFilterInput>;
  updatedAt?: InputMaybe<DateTimeSearchFilterInput>;
};

/** Input to create a Picture for the NewsItemToPicture relation of NewsItem */
export type NewsItemToPictureCreatePicture = {
  bucket: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

/** Input to link to or create a Picture for the NewsItemToPicture relation of NewsItem */
export type NewsItemToPictureCreatePictureRelation = {
  create?: InputMaybe<NewsItemToPictureCreatePicture>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Picture for the NewsItemToPicture relation of NewsItem */
export type NewsItemToPictureUpdatePictureRelation = {
  create?: InputMaybe<NewsItemToPictureCreatePicture>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a NewsItem for the NewsItemToPublisher relation of Publisher */
export type NewsItemToPublisherCreateNewsItem = {
  cover?: InputMaybe<NewsItemToPictureCreatePictureRelation>;
  creator: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  publishedAt: Scalars['String']['input'];
  rss?: InputMaybe<NewsItemDataRssInput>;
  title: Scalars['String']['input'];
  topic?: InputMaybe<NewsItemToTopicCreateTopicRelation>;
  type: SourceType;
  youtube?: InputMaybe<NewsItemDataYouTubeInput>;
};

/** Input to link to or create a NewsItem for the NewsItemToPublisher relation of Publisher */
export type NewsItemToPublisherCreateNewsItemRelation = {
  create?: InputMaybe<NewsItemToPublisherCreateNewsItem>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Publisher for the NewsItemToPublisher relation of NewsItem */
export type NewsItemToPublisherCreatePublisher = {
  avatar: PictureToPublisherCreatePictureRelation;
  creator: Scalars['String']['input'];
  news?: InputMaybe<Array<NewsItemToPublisherCreateNewsItemRelation>>;
  sources: Array<PublisherToPublisherSourceCreatePublisherSourceRelation>;
  title: Scalars['String']['input'];
  topic: PublisherToTopicCreateTopicRelation;
};

/** Input to link to or create a Publisher for the NewsItemToPublisher relation of NewsItem */
export type NewsItemToPublisherCreatePublisherRelation = {
  create?: InputMaybe<NewsItemToPublisherCreatePublisher>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a NewsItem for the NewsItemToPublisher relation of Publisher */
export type NewsItemToPublisherUpdateNewsItemRelation = {
  create?: InputMaybe<NewsItemToPublisherCreateNewsItem>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Publisher for the NewsItemToPublisher relation of NewsItem */
export type NewsItemToPublisherUpdatePublisherRelation = {
  create?: InputMaybe<NewsItemToPublisherCreatePublisher>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a NewsItem for the NewsItemToTopic relation of Topic */
export type NewsItemToTopicCreateNewsItem = {
  cover?: InputMaybe<NewsItemToPictureCreatePictureRelation>;
  creator: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  publishedAt: Scalars['String']['input'];
  publisher?: InputMaybe<NewsItemToPublisherCreatePublisherRelation>;
  rss?: InputMaybe<NewsItemDataRssInput>;
  title: Scalars['String']['input'];
  type: SourceType;
  youtube?: InputMaybe<NewsItemDataYouTubeInput>;
};

/** Input to link to or create a NewsItem for the NewsItemToTopic relation of Topic */
export type NewsItemToTopicCreateNewsItemRelation = {
  create?: InputMaybe<NewsItemToTopicCreateNewsItem>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Topic for the NewsItemToTopic relation of NewsItem */
export type NewsItemToTopicCreateTopic = {
  creator: Scalars['String']['input'];
  news?: InputMaybe<Array<NewsItemToTopicCreateNewsItemRelation>>;
  publishers?: InputMaybe<Array<PublisherToTopicCreatePublisherRelation>>;
  title: Scalars['String']['input'];
};

/** Input to link to or create a Topic for the NewsItemToTopic relation of NewsItem */
export type NewsItemToTopicCreateTopicRelation = {
  create?: InputMaybe<NewsItemToTopicCreateTopic>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a NewsItem for the NewsItemToTopic relation of Topic */
export type NewsItemToTopicUpdateNewsItemRelation = {
  create?: InputMaybe<NewsItemToTopicCreateNewsItem>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Topic for the NewsItemToTopic relation of NewsItem */
export type NewsItemToTopicUpdateTopicRelation = {
  create?: InputMaybe<NewsItemToTopicCreateTopic>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a NewsItem */
export type NewsItemUpdateInput = {
  cover?: InputMaybe<NewsItemToPictureUpdatePictureRelation>;
  creator?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<NewsItemToPublisherUpdatePublisherRelation>;
  rss?: InputMaybe<NewsItemDataRssInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<NewsItemToTopicUpdateTopicRelation>;
  type?: InputMaybe<SourceType>;
  youtube?: InputMaybe<NewsItemDataYouTubeInput>;
};

export type NewsItemUpdateManyInput = {
  by: NewsItemByInput;
  input: NewsItemUpdateInput;
};

export type NewsItemUpdateManyPayload = {
  __typename?: 'NewsItemUpdateManyPayload';
  newsItemCollection: Array<NewsItem>;
};

export type NewsItemUpdatePayload = {
  __typename?: 'NewsItemUpdatePayload';
  newsItem?: Maybe<NewsItem>;
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Picture = {
  __typename?: 'Picture';
  bucket: Scalars['String']['output'];
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['URL']['output']>;
};

export type PictureByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PictureCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type PictureConnection = {
  __typename?: 'PictureConnection';
  edges?: Maybe<Array<Maybe<PictureEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Picture */
export type PictureCreateInput = {
  bucket: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type PictureCreateManyInput = {
  input: PictureCreateInput;
};

export type PictureCreateManyPayload = {
  __typename?: 'PictureCreateManyPayload';
  pictureCollection: Array<Picture>;
};

export type PictureCreatePayload = {
  __typename?: 'PictureCreatePayload';
  picture?: Maybe<Picture>;
};

export type PictureDeleteManyInput = {
  by: PictureByInput;
};

export type PictureDeleteManyPayload = {
  __typename?: 'PictureDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type PictureDeletePayload = {
  __typename?: 'PictureDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type PictureEdge = {
  __typename?: 'PictureEdge';
  cursor: Scalars['String']['output'];
  node: Picture;
};

export type PictureOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to create a Picture for the PictureToPublisher relation of Publisher */
export type PictureToPublisherCreatePicture = {
  bucket: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

/** Input to link to or create a Picture for the PictureToPublisher relation of Publisher */
export type PictureToPublisherCreatePictureRelation = {
  create?: InputMaybe<PictureToPublisherCreatePicture>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Picture for the PictureToPublisher relation of Publisher */
export type PictureToPublisherUpdatePictureRelation = {
  create?: InputMaybe<PictureToPublisherCreatePicture>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a Picture */
export type PictureUpdateInput = {
  bucket?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type PictureUpdateManyInput = {
  by: PictureByInput;
  input: PictureUpdateInput;
};

export type PictureUpdateManyPayload = {
  __typename?: 'PictureUpdateManyPayload';
  pictureCollection: Array<Picture>;
};

export type PictureUpdatePayload = {
  __typename?: 'PictureUpdatePayload';
  picture?: Maybe<Picture>;
};

export type Publisher = {
  __typename?: 'Publisher';
  avatar: Picture;
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  creator: Scalars['String']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  news?: Maybe<NewsItemConnection>;
  sources?: Maybe<PublisherSourceConnection>;
  title: Scalars['String']['output'];
  topic: Topic;
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type PublisherNewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublisherOrderByInput>;
};


export type PublisherSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublisherOrderByInput>;
};

export type PublisherByInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublisherCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type PublisherConnection = {
  __typename?: 'PublisherConnection';
  edges?: Maybe<Array<Maybe<PublisherEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Publisher */
export type PublisherCreateInput = {
  avatar: PictureToPublisherCreatePictureRelation;
  creator: Scalars['String']['input'];
  news?: InputMaybe<Array<NewsItemToPublisherCreateNewsItemRelation>>;
  sources: Array<PublisherToPublisherSourceCreatePublisherSourceRelation>;
  title: Scalars['String']['input'];
  topic: PublisherToTopicCreateTopicRelation;
};

export type PublisherCreateManyInput = {
  input: PublisherCreateInput;
};

export type PublisherCreateManyPayload = {
  __typename?: 'PublisherCreateManyPayload';
  publisherCollection: Array<Publisher>;
};

export type PublisherCreatePayload = {
  __typename?: 'PublisherCreatePayload';
  publisher?: Maybe<Publisher>;
};

export type PublisherDeleteManyInput = {
  by: PublisherByInput;
};

export type PublisherDeleteManyPayload = {
  __typename?: 'PublisherDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type PublisherDeletePayload = {
  __typename?: 'PublisherDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type PublisherEdge = {
  __typename?: 'PublisherEdge';
  cursor: Scalars['String']['output'];
  node: Publisher;
};

export type PublisherOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type PublisherSource = {
  __typename?: 'PublisherSource';
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  creator: Scalars['String']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  isHidden: Scalars['Boolean']['output'];
  publisher: Publisher;
  rss?: Maybe<PublisherSourceRss>;
  title: Scalars['String']['output'];
  topic: Topic;
  type: SourceType;
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
  youtube?: Maybe<PublisherSourceYouTube>;
};

export type PublisherSourceByInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublisherSourceCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type PublisherSourceConnection = {
  __typename?: 'PublisherSourceConnection';
  edges?: Maybe<Array<Maybe<PublisherSourceEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a PublisherSource */
export type PublisherSourceCreateInput = {
  creator: Scalars['String']['input'];
  isHidden?: Scalars['Boolean']['input'];
  publisher: PublisherToPublisherSourceCreatePublisherRelation;
  rss?: InputMaybe<PublisherSourceRssInput>;
  title: Scalars['String']['input'];
  topic: PublisherSourceToTopicCreateTopicRelation;
  type: SourceType;
  youtube?: InputMaybe<PublisherSourceYouTubeInput>;
};

export type PublisherSourceCreateManyInput = {
  input: PublisherSourceCreateInput;
};

export type PublisherSourceCreateManyPayload = {
  __typename?: 'PublisherSourceCreateManyPayload';
  publisherSourceCollection: Array<PublisherSource>;
};

export type PublisherSourceCreatePayload = {
  __typename?: 'PublisherSourceCreatePayload';
  publisherSource?: Maybe<PublisherSource>;
};

export type PublisherSourceDeleteManyInput = {
  by: PublisherSourceByInput;
};

export type PublisherSourceDeleteManyPayload = {
  __typename?: 'PublisherSourceDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type PublisherSourceDeletePayload = {
  __typename?: 'PublisherSourceDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type PublisherSourceEdge = {
  __typename?: 'PublisherSourceEdge';
  cursor: Scalars['String']['output'];
  node: PublisherSource;
};

export type PublisherSourceOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type PublisherSourceRss = {
  __typename?: 'PublisherSourceRSS';
  url: Scalars['String']['output'];
};

/** PublisherSourceRSS input type. */
export type PublisherSourceRssInput = {
  url: Scalars['String']['input'];
};

export type PublisherSourceSearchConnection = {
  __typename?: 'PublisherSourceSearchConnection';
  edges: Array<PublisherSourceSearchEdge>;
  pageInfo: PageInfo;
  searchInfo?: Maybe<SearchInfo>;
};

export type PublisherSourceSearchEdge = {
  __typename?: 'PublisherSourceSearchEdge';
  cursor: Scalars['String']['output'];
  node: PublisherSource;
  score: Scalars['Float']['output'];
};

export type PublisherSourceSearchFilterInput = {
  ALL?: InputMaybe<Array<PublisherSourceSearchFilterInput>>;
  ANY?: InputMaybe<Array<PublisherSourceSearchFilterInput>>;
  NONE?: InputMaybe<Array<PublisherSourceSearchFilterInput>>;
  NOT?: InputMaybe<PublisherSourceSearchFilterInput>;
  createdAt?: InputMaybe<DateTimeSearchFilterInput>;
  creator?: InputMaybe<StringSearchFilterInput>;
  isHidden?: InputMaybe<BooleanSearchFilterInput>;
  title?: InputMaybe<StringSearchFilterInput>;
  type?: InputMaybe<SourceTypeSearchFilterInput>;
  updatedAt?: InputMaybe<DateTimeSearchFilterInput>;
};

/** Input to create a Topic for the PublisherSourceToTopic relation of PublisherSource */
export type PublisherSourceToTopicCreateTopic = {
  creator: Scalars['String']['input'];
  news?: InputMaybe<Array<NewsItemToTopicCreateNewsItemRelation>>;
  publishers?: InputMaybe<Array<PublisherToTopicCreatePublisherRelation>>;
  title: Scalars['String']['input'];
};

/** Input to link to or create a Topic for the PublisherSourceToTopic relation of PublisherSource */
export type PublisherSourceToTopicCreateTopicRelation = {
  create?: InputMaybe<PublisherSourceToTopicCreateTopic>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Topic for the PublisherSourceToTopic relation of PublisherSource */
export type PublisherSourceToTopicUpdateTopicRelation = {
  create?: InputMaybe<PublisherSourceToTopicCreateTopic>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a PublisherSource */
export type PublisherSourceUpdateInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  publisher?: InputMaybe<PublisherToPublisherSourceUpdatePublisherRelation>;
  rss?: InputMaybe<PublisherSourceRssInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<PublisherSourceToTopicUpdateTopicRelation>;
  type?: InputMaybe<SourceType>;
  youtube?: InputMaybe<PublisherSourceYouTubeInput>;
};

export type PublisherSourceUpdateManyInput = {
  by: PublisherSourceByInput;
  input: PublisherSourceUpdateInput;
};

export type PublisherSourceUpdateManyPayload = {
  __typename?: 'PublisherSourceUpdateManyPayload';
  publisherSourceCollection: Array<PublisherSource>;
};

export type PublisherSourceUpdatePayload = {
  __typename?: 'PublisherSourceUpdatePayload';
  publisherSource?: Maybe<PublisherSource>;
};

export type PublisherSourceYouTube = {
  __typename?: 'PublisherSourceYouTube';
  channelID?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** PublisherSourceYouTube input type. */
export type PublisherSourceYouTubeInput = {
  channelID?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Input to create a Publisher for the PublisherToPublisherSource relation of PublisherSource */
export type PublisherToPublisherSourceCreatePublisher = {
  avatar: PictureToPublisherCreatePictureRelation;
  creator: Scalars['String']['input'];
  news?: InputMaybe<Array<NewsItemToPublisherCreateNewsItemRelation>>;
  sources: Array<PublisherToPublisherSourceCreatePublisherSourceRelation>;
  title: Scalars['String']['input'];
  topic: PublisherToTopicCreateTopicRelation;
};

/** Input to link to or create a Publisher for the PublisherToPublisherSource relation of PublisherSource */
export type PublisherToPublisherSourceCreatePublisherRelation = {
  create?: InputMaybe<PublisherToPublisherSourceCreatePublisher>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a PublisherSource for the PublisherToPublisherSource relation of Publisher */
export type PublisherToPublisherSourceCreatePublisherSource = {
  creator: Scalars['String']['input'];
  isHidden?: Scalars['Boolean']['input'];
  rss?: InputMaybe<PublisherSourceRssInput>;
  title: Scalars['String']['input'];
  topic: PublisherSourceToTopicCreateTopicRelation;
  type: SourceType;
  youtube?: InputMaybe<PublisherSourceYouTubeInput>;
};

/** Input to link to or create a PublisherSource for the PublisherToPublisherSource relation of Publisher */
export type PublisherToPublisherSourceCreatePublisherSourceRelation = {
  create?: InputMaybe<PublisherToPublisherSourceCreatePublisherSource>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Publisher for the PublisherToPublisherSource relation of PublisherSource */
export type PublisherToPublisherSourceUpdatePublisherRelation = {
  create?: InputMaybe<PublisherToPublisherSourceCreatePublisher>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a PublisherSource for the PublisherToPublisherSource relation of Publisher */
export type PublisherToPublisherSourceUpdatePublisherSourceRelation = {
  create?: InputMaybe<PublisherToPublisherSourceCreatePublisherSource>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Publisher for the PublisherToTopic relation of Topic */
export type PublisherToTopicCreatePublisher = {
  avatar: PictureToPublisherCreatePictureRelation;
  creator: Scalars['String']['input'];
  news?: InputMaybe<Array<NewsItemToPublisherCreateNewsItemRelation>>;
  sources: Array<PublisherToPublisherSourceCreatePublisherSourceRelation>;
  title: Scalars['String']['input'];
};

/** Input to link to or create a Publisher for the PublisherToTopic relation of Topic */
export type PublisherToTopicCreatePublisherRelation = {
  create?: InputMaybe<PublisherToTopicCreatePublisher>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Topic for the PublisherToTopic relation of Publisher */
export type PublisherToTopicCreateTopic = {
  creator: Scalars['String']['input'];
  news?: InputMaybe<Array<NewsItemToTopicCreateNewsItemRelation>>;
  publishers?: InputMaybe<Array<PublisherToTopicCreatePublisherRelation>>;
  title: Scalars['String']['input'];
};

/** Input to link to or create a Topic for the PublisherToTopic relation of Publisher */
export type PublisherToTopicCreateTopicRelation = {
  create?: InputMaybe<PublisherToTopicCreateTopic>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Publisher for the PublisherToTopic relation of Topic */
export type PublisherToTopicUpdatePublisherRelation = {
  create?: InputMaybe<PublisherToTopicCreatePublisher>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Topic for the PublisherToTopic relation of Publisher */
export type PublisherToTopicUpdateTopicRelation = {
  create?: InputMaybe<PublisherToTopicCreateTopic>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a Publisher */
export type PublisherUpdateInput = {
  avatar?: InputMaybe<PictureToPublisherUpdatePictureRelation>;
  creator?: InputMaybe<Scalars['String']['input']>;
  news?: InputMaybe<Array<NewsItemToPublisherUpdateNewsItemRelation>>;
  sources?: InputMaybe<Array<PublisherToPublisherSourceUpdatePublisherSourceRelation>>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<PublisherToTopicUpdateTopicRelation>;
};

export type PublisherUpdateManyInput = {
  by: PublisherByInput;
  input: PublisherUpdateInput;
};

export type PublisherUpdateManyPayload = {
  __typename?: 'PublisherUpdateManyPayload';
  publisherCollection: Array<Publisher>;
};

export type PublisherUpdatePayload = {
  __typename?: 'PublisherUpdatePayload';
  publisher?: Maybe<Publisher>;
};

export type Query = {
  __typename?: 'Query';
  /** Access to embedded custom API. */
  custom: CustomQuery;
  /** Query a single NewsItem by an ID or a unique field */
  newsItem?: Maybe<NewsItem>;
  /** Paginated query to fetch the whole list of `NewsItem`. */
  newsItemCollection?: Maybe<NewsItemConnection>;
  /** Search `NewsItem` */
  newsItemSearch?: Maybe<NewsItemSearchConnection>;
  /** Query a single Picture by an ID or a unique field */
  picture?: Maybe<Picture>;
  /** Paginated query to fetch the whole list of `Picture`. */
  pictureCollection?: Maybe<PictureConnection>;
  /** Query a single Publisher by an ID or a unique field */
  publisher?: Maybe<Publisher>;
  /** Paginated query to fetch the whole list of `Publisher`. */
  publisherCollection?: Maybe<PublisherConnection>;
  /** Query a single PublisherSource by an ID or a unique field */
  publisherSource?: Maybe<PublisherSource>;
  /** Paginated query to fetch the whole list of `PublisherSource`. */
  publisherSourceCollection?: Maybe<PublisherSourceConnection>;
  /** Search `PublisherSource` */
  publisherSourceSearch?: Maybe<PublisherSourceSearchConnection>;
  /** Query a single Topic by an ID or a unique field */
  topic?: Maybe<Topic>;
  /** Paginated query to fetch the whole list of `Topic`. */
  topicCollection?: Maybe<TopicConnection>;
  /** Search `Topic` */
  topicSearch?: Maybe<TopicSearchConnection>;
};


export type QueryNewsItemArgs = {
  by: NewsItemByInput;
};


export type QueryNewsItemCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NewsItemCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewsItemOrderByInput>;
};


export type QueryNewsItemSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<NewsItemSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPictureArgs = {
  by: PictureByInput;
};


export type QueryPictureCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PictureCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PictureOrderByInput>;
};


export type QueryPublisherArgs = {
  by: PublisherByInput;
};


export type QueryPublisherCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublisherCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublisherOrderByInput>;
};


export type QueryPublisherSourceArgs = {
  by: PublisherSourceByInput;
};


export type QueryPublisherSourceCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PublisherSourceCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PublisherSourceOrderByInput>;
};


export type QueryPublisherSourceSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<PublisherSourceSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTopicArgs = {
  by: TopicByInput;
};


export type QueryTopicCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TopicCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TopicOrderByInput>;
};


export type QueryTopicSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<TopicSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type SearchInfo = {
  __typename?: 'SearchInfo';
  totalHits: Scalars['Int']['output'];
};

export enum SourceType {
  Rss = 'rss',
  Youtube = 'youtube'
}

export type SourceTypeSearchFilterInput = {
  eq?: InputMaybe<SourceType>;
  in?: InputMaybe<Array<SourceType>>;
  neq?: InputMaybe<SourceType>;
  notIn?: InputMaybe<Array<SourceType>>;
};

export type StringOrNullSearchFilterInput = {
  ALL?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  ANY?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  NONE?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  NOT?: InputMaybe<StringOrNullSearchFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type StringSearchFilterInput = {
  ALL?: InputMaybe<Array<StringSearchFilterInput>>;
  ANY?: InputMaybe<Array<StringSearchFilterInput>>;
  NONE?: InputMaybe<Array<StringSearchFilterInput>>;
  NOT?: InputMaybe<StringSearchFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Topic = {
  __typename?: 'Topic';
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  creator: Scalars['String']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  news?: Maybe<NewsItemConnection>;
  publishers?: Maybe<PublisherConnection>;
  title: Scalars['String']['output'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type TopicNewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TopicOrderByInput>;
};


export type TopicPublishersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TopicOrderByInput>;
};

export type TopicByInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TopicCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type TopicConnection = {
  __typename?: 'TopicConnection';
  edges?: Maybe<Array<Maybe<TopicEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Topic */
export type TopicCreateInput = {
  creator: Scalars['String']['input'];
  news?: InputMaybe<Array<NewsItemToTopicCreateNewsItemRelation>>;
  publishers?: InputMaybe<Array<PublisherToTopicCreatePublisherRelation>>;
  title: Scalars['String']['input'];
};

export type TopicCreateManyInput = {
  input: TopicCreateInput;
};

export type TopicCreateManyPayload = {
  __typename?: 'TopicCreateManyPayload';
  topicCollection: Array<Topic>;
};

export type TopicCreatePayload = {
  __typename?: 'TopicCreatePayload';
  topic?: Maybe<Topic>;
};

export type TopicDeleteManyInput = {
  by: TopicByInput;
};

export type TopicDeleteManyPayload = {
  __typename?: 'TopicDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type TopicDeletePayload = {
  __typename?: 'TopicDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type TopicEdge = {
  __typename?: 'TopicEdge';
  cursor: Scalars['String']['output'];
  node: Topic;
};

export type TopicOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type TopicSearchConnection = {
  __typename?: 'TopicSearchConnection';
  edges: Array<TopicSearchEdge>;
  pageInfo: PageInfo;
  searchInfo?: Maybe<SearchInfo>;
};

export type TopicSearchEdge = {
  __typename?: 'TopicSearchEdge';
  cursor: Scalars['String']['output'];
  node: Topic;
  score: Scalars['Float']['output'];
};

export type TopicSearchFilterInput = {
  ALL?: InputMaybe<Array<TopicSearchFilterInput>>;
  ANY?: InputMaybe<Array<TopicSearchFilterInput>>;
  NONE?: InputMaybe<Array<TopicSearchFilterInput>>;
  NOT?: InputMaybe<TopicSearchFilterInput>;
  creator?: InputMaybe<StringSearchFilterInput>;
};

/** Input to update a Topic */
export type TopicUpdateInput = {
  creator?: InputMaybe<Scalars['String']['input']>;
  news?: InputMaybe<Array<NewsItemToTopicUpdateNewsItemRelation>>;
  publishers?: InputMaybe<Array<PublisherToTopicUpdatePublisherRelation>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TopicUpdateManyInput = {
  by: TopicByInput;
  input: TopicUpdateInput;
};

export type TopicUpdateManyPayload = {
  __typename?: 'TopicUpdateManyPayload';
  topicCollection: Array<Topic>;
};

export type TopicUpdatePayload = {
  __typename?: 'TopicUpdatePayload';
  topic?: Maybe<Topic>;
};

export type CreateNewsItemMutationVariables = Exact<{
  input: Array<NewsItemCreateManyInput> | NewsItemCreateManyInput;
}>;


export type CreateNewsItemMutation = { __typename?: 'Mutation', newsItemCreateMany?: { __typename?: 'NewsItemCreateManyPayload', newsItemCollection: Array<{ __typename?: 'NewsItem', id: string, type: SourceType }> } | null };

export type CreatePublisherMutationMutationVariables = Exact<{
  title: Scalars['String']['input'];
  creatorID: Scalars['String']['input'];
  topicID: Scalars['ID']['input'];
  avatarBucket: Scalars['String']['input'];
  avatarKey: Scalars['String']['input'];
  sourceRelations: Array<PublisherToPublisherSourceCreatePublisherSourceRelation> | PublisherToPublisherSourceCreatePublisherSourceRelation;
}>;


export type CreatePublisherMutationMutation = { __typename?: 'Mutation', publisherCreate?: { __typename?: 'PublisherCreatePayload', publisher?: { __typename?: 'Publisher', id: string, title: string } | null } | null };

export type PublisherSourceSearchByTypeQueryVariables = Exact<{
  type: SourceType;
}>;


export type PublisherSourceSearchByTypeQuery = { __typename?: 'Query', publisherSourceSearch?: { __typename?: 'PublisherSourceSearchConnection', edges: Array<{ __typename?: 'PublisherSourceSearchEdge', node: { __typename?: 'PublisherSource', id: string, type: SourceType, creator: string, publisher: { __typename?: 'Publisher', id: string }, topic: { __typename?: 'Topic', id: string }, rss?: { __typename?: 'PublisherSourceRSS', url: string } | null, youtube?: { __typename?: 'PublisherSourceYouTube', username?: string | null, channelID?: string | null } | null } }> } | null };

export type BaseNewsItemFragment = { __typename?: 'NewsItem', id: string, title: string, description?: string | null, type: SourceType, publishedAt: string, cover?: { __typename?: 'Picture', bucket: string, key: string, url?: any | null } | null, rss?: { __typename?: 'NewsItemDataRSS', url: string, coverUrl?: string | null } | null, youtube?: { __typename?: 'NewsItemDataYouTube', videoId: string, coverUrl?: string | null } | null, publisher?: (
    { __typename?: 'Publisher' }
    & { ' $fragmentRefs'?: { 'PublisherInfoFragment': PublisherInfoFragment } }
  ) | null } & { ' $fragmentName'?: 'BaseNewsItemFragment' };

export type GetNewsItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetNewsItemQuery = { __typename?: 'Query', newsItem?: (
    { __typename?: 'NewsItem', rss?: { __typename?: 'NewsItemDataRSS', contentHtml?: string | null } | null }
    & { ' $fragmentRefs'?: { 'BaseNewsItemFragment': BaseNewsItemFragment } }
  ) | null };

export type GetNewsFeedQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetNewsFeedQuery = { __typename?: 'Query', newsItemSearch?: { __typename?: 'NewsItemSearchConnection', edges: Array<{ __typename?: 'NewsItemSearchEdge', node: (
        { __typename?: 'NewsItem' }
        & { ' $fragmentRefs'?: { 'BaseNewsItemFragment': BaseNewsItemFragment } }
      ) }> } | null };

export type SearchNewsFeedQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  query: Scalars['String']['input'];
}>;


export type SearchNewsFeedQuery = { __typename?: 'Query', newsItemSearch?: { __typename?: 'NewsItemSearchConnection', edges: Array<{ __typename?: 'NewsItemSearchEdge', node: { __typename?: 'NewsItem', id: string } }> } | null };

export type GetPublisherNewsFeedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPublisherNewsFeedQuery = { __typename?: 'Query', publisher?: (
    { __typename?: 'Publisher', news?: { __typename?: 'NewsItemConnection', edges?: Array<{ __typename?: 'NewsItemEdge', node: (
          { __typename?: 'NewsItem' }
          & { ' $fragmentRefs'?: { 'BaseNewsItemFragment': BaseNewsItemFragment } }
        ) } | null> | null } | null }
    & { ' $fragmentRefs'?: { 'PublisherInfoFragment': PublisherInfoFragment } }
  ) | null };

export type PublisherInfoFragment = { __typename?: 'Publisher', id: string, title: string, avatar: { __typename?: 'Picture', bucket: string, key: string, url?: any | null } } & { ' $fragmentName'?: 'PublisherInfoFragment' };

export type CreatePublisherMutationVariables = Exact<{
  input: CustomCreatePublisherInput;
}>;


export type CreatePublisherMutation = { __typename?: 'Mutation', custom: { __typename?: 'CustomMutation', createPublisher: { __typename?: 'CustomPublisher', id: string } } };

export type ListUserPublishersQueryVariables = Exact<{
  creatorID: Scalars['String']['input'];
}>;


export type ListUserPublishersQuery = { __typename?: 'Query', topicSearch?: { __typename?: 'TopicSearchConnection', edges: Array<{ __typename?: 'TopicSearchEdge', node: (
        { __typename?: 'Topic', publishers?: { __typename?: 'PublisherConnection', edges?: Array<{ __typename?: 'PublisherEdge', node: (
              { __typename?: 'Publisher' }
              & { ' $fragmentRefs'?: { 'PublisherInfoFragment': PublisherInfoFragment } }
            ) } | null> | null } | null }
        & { ' $fragmentRefs'?: { 'BaseTopicFragment': BaseTopicFragment } }
      ) }> } | null };

export type BaseTopicFragment = { __typename?: 'Topic', id: string, title: string } & { ' $fragmentName'?: 'BaseTopicFragment' };

export type CreateTopicMutationVariables = Exact<{
  input: TopicCreateInput;
}>;


export type CreateTopicMutation = { __typename?: 'Mutation', topicCreate?: { __typename?: 'TopicCreatePayload', topic?: (
      { __typename?: 'Topic' }
      & { ' $fragmentRefs'?: { 'BaseTopicFragment': BaseTopicFragment } }
    ) | null } | null };

export const PublisherInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublisherInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publisher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<PublisherInfoFragment, unknown>;
export const BaseNewsItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseNewsItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"youtube"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublisherInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublisherInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publisher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<BaseNewsItemFragment, unknown>;
export const BaseTopicFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTopic"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<BaseTopicFragment, unknown>;
export const CreateNewsItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNewsItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewsItemCreateManyInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsItemCreateMany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsItemCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<CreateNewsItemMutation, CreateNewsItemMutationVariables>;
export const CreatePublisherMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePublisherMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"creatorID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topicID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatarBucket"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatarKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sourceRelations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublisherToPublisherSourceCreatePublisherSourceRelation"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publisherCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"topic"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"link"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topicID"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"avatar"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"create"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"bucket"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatarBucket"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatarKey"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"creator"},"value":{"kind":"Variable","name":{"kind":"Name","value":"creatorID"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"sources"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sourceRelations"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePublisherMutationMutation, CreatePublisherMutationMutationVariables>;
export const PublisherSourceSearchByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublisherSourceSearchByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SourceType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publisherSourceSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"creator"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"youtube"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"channelID"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PublisherSourceSearchByTypeQuery, PublisherSourceSearchByTypeQueryVariables>;
export const GetNewsItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewsItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseNewsItem"}},{"kind":"Field","name":{"kind":"Name","value":"rss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentHtml"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublisherInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publisher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseNewsItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"youtube"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublisherInfo"}}]}}]}}]} as unknown as DocumentNode<GetNewsItemQuery, GetNewsItemQueryVariables>;
export const GetNewsFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewsFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsItemSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"creator"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseNewsItem"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublisherInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publisher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseNewsItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"youtube"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublisherInfo"}}]}}]}}]} as unknown as DocumentNode<GetNewsFeedQuery, GetNewsFeedQueryVariables>;
export const SearchNewsFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchNewsFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsItemSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"creator"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"regex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchNewsFeedQuery, SearchNewsFeedQueryVariables>;
export const GetPublisherNewsFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublisherNewsFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publisher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublisherInfo"}},{"kind":"Field","name":{"kind":"Name","value":"news"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseNewsItem"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublisherInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publisher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseNewsItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"youtube"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublisherInfo"}}]}}]}}]} as unknown as DocumentNode<GetPublisherNewsFeedQuery, GetPublisherNewsFeedQueryVariables>;
export const CreatePublisherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePublisher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomCreatePublisherInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"custom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPublisher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePublisherMutation, CreatePublisherMutationVariables>;
export const ListUserPublishersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListUserPublishers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"creatorID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"creatorID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTopic"}},{"kind":"Field","name":{"kind":"Name","value":"publishers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublisherInfo"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTopic"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublisherInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publisher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bucket"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<ListUserPublishersQuery, ListUserPublishersQueryVariables>;
export const CreateTopicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTopic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TopicCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topicCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topic"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTopic"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTopic"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<CreateTopicMutation, CreateTopicMutationVariables>;