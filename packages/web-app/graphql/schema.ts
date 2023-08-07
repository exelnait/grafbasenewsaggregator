import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
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

export type BaseNewsItemFragment = { __typename?: 'NewsItem', id: string, title: string, description?: string | null, type: SourceType, publishedAt: string, cover?: { __typename?: 'Picture', bucket: string, key: string, url?: any | null } | null, rss?: { __typename?: 'NewsItemDataRSS', url: string, coverUrl?: string | null } | null, youtube?: { __typename?: 'NewsItemDataYouTube', videoId: string, coverUrl?: string | null } | null, publisher?: { __typename?: 'Publisher', id: string, title: string, avatar: { __typename?: 'Picture', bucket: string, key: string } } | null };

export type GetNewsItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetNewsItemQuery = { __typename?: 'Query', newsItem?: { __typename?: 'NewsItem', id: string, title: string, description?: string | null, type: SourceType, publishedAt: string, rss?: { __typename?: 'NewsItemDataRSS', contentHtml?: string | null, url: string, coverUrl?: string | null } | null, cover?: { __typename?: 'Picture', bucket: string, key: string, url?: any | null } | null, youtube?: { __typename?: 'NewsItemDataYouTube', videoId: string, coverUrl?: string | null } | null, publisher?: { __typename?: 'Publisher', id: string, title: string, avatar: { __typename?: 'Picture', bucket: string, key: string } } | null } | null };

export type GetNewsFeedQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetNewsFeedQuery = { __typename?: 'Query', newsItemSearch?: { __typename?: 'NewsItemSearchConnection', edges: Array<{ __typename?: 'NewsItemSearchEdge', node: { __typename?: 'NewsItem', id: string, title: string, description?: string | null, type: SourceType, publishedAt: string, cover?: { __typename?: 'Picture', bucket: string, key: string, url?: any | null } | null, rss?: { __typename?: 'NewsItemDataRSS', url: string, coverUrl?: string | null } | null, youtube?: { __typename?: 'NewsItemDataYouTube', videoId: string, coverUrl?: string | null } | null, publisher?: { __typename?: 'Publisher', id: string, title: string, avatar: { __typename?: 'Picture', bucket: string, key: string } } | null } }> } | null };

export type SearchNewsFeedQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  query: Scalars['String']['input'];
}>;


export type SearchNewsFeedQuery = { __typename?: 'Query', newsItemSearch?: { __typename?: 'NewsItemSearchConnection', edges: Array<{ __typename?: 'NewsItemSearchEdge', node: { __typename?: 'NewsItem', id: string } }> } | null };

export type GetPublisherNewsFeedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPublisherNewsFeedQuery = { __typename?: 'Query', publisher?: { __typename?: 'Publisher', id: string, title: string, news?: { __typename?: 'NewsItemConnection', edges?: Array<{ __typename?: 'NewsItemEdge', node: { __typename?: 'NewsItem', id: string, title: string, description?: string | null, type: SourceType, publishedAt: string, cover?: { __typename?: 'Picture', bucket: string, key: string, url?: any | null } | null, rss?: { __typename?: 'NewsItemDataRSS', url: string, coverUrl?: string | null } | null, youtube?: { __typename?: 'NewsItemDataYouTube', videoId: string, coverUrl?: string | null } | null, publisher?: { __typename?: 'Publisher', id: string, title: string, avatar: { __typename?: 'Picture', bucket: string, key: string } } | null } } | null> | null } | null, avatar: { __typename?: 'Picture', bucket: string, key: string } } | null };

export type PublisherInfoFragment = { __typename?: 'Publisher', id: string, title: string, avatar: { __typename?: 'Picture', bucket: string, key: string } };

export type CreatePublisherMutationVariables = Exact<{
  input: CustomCreatePublisherInput;
}>;


export type CreatePublisherMutation = { __typename?: 'Mutation', custom: { __typename?: 'CustomMutation', createPublisher: { __typename?: 'CustomPublisher', id: string } } };

export type ListUserPublishersQueryVariables = Exact<{
  creatorID: Scalars['String']['input'];
}>;


export type ListUserPublishersQuery = { __typename?: 'Query', topicSearch?: { __typename?: 'TopicSearchConnection', edges: Array<{ __typename?: 'TopicSearchEdge', node: { __typename?: 'Topic', id: string, title: string, publishers?: { __typename?: 'PublisherConnection', edges?: Array<{ __typename?: 'PublisherEdge', node: { __typename?: 'Publisher', id: string, title: string, avatar: { __typename?: 'Picture', bucket: string, key: string } } } | null> | null } | null } }> } | null };

export type BaseTopicFragment = { __typename?: 'Topic', id: string, title: string };

export type CreateTopicMutationVariables = Exact<{
  input: TopicCreateInput;
}>;


export type CreateTopicMutation = { __typename?: 'Mutation', topicCreate?: { __typename?: 'TopicCreatePayload', topic?: { __typename?: 'Topic', id: string, title: string } | null } | null };

export const PublisherInfoFragmentDoc = gql`
    fragment PublisherInfo on Publisher {
  id
  title
  avatar {
    bucket
    key
  }
}
    `;
export const BaseNewsItemFragmentDoc = gql`
    fragment BaseNewsItem on NewsItem {
  id
  title
  description
  type
  publishedAt
  cover {
    bucket
    key
    url
  }
  rss {
    url
    coverUrl
  }
  youtube {
    videoId
    coverUrl
  }
  publisher {
    ...PublisherInfo
  }
}
    ${PublisherInfoFragmentDoc}`;
export const BaseTopicFragmentDoc = gql`
    fragment BaseTopic on Topic {
  id
  title
}
    `;
export const CreateNewsItemDocument = gql`
    mutation CreateNewsItem($input: [NewsItemCreateManyInput!]!) {
  newsItemCreateMany(input: $input) {
    newsItemCollection {
      id
      type
    }
  }
}
    `;
export type CreateNewsItemMutationFn = Apollo.MutationFunction<CreateNewsItemMutation, CreateNewsItemMutationVariables>;

/**
 * __useCreateNewsItemMutation__
 *
 * To run a mutation, you first call `useCreateNewsItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewsItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewsItemMutation, { data, loading, error }] = useCreateNewsItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNewsItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewsItemMutation, CreateNewsItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewsItemMutation, CreateNewsItemMutationVariables>(CreateNewsItemDocument, options);
      }
export type CreateNewsItemMutationHookResult = ReturnType<typeof useCreateNewsItemMutation>;
export type CreateNewsItemMutationResult = Apollo.MutationResult<CreateNewsItemMutation>;
export type CreateNewsItemMutationOptions = Apollo.BaseMutationOptions<CreateNewsItemMutation, CreateNewsItemMutationVariables>;
export const CreatePublisherMutationDocument = gql`
    mutation CreatePublisherMutation($title: String!, $creatorID: String!, $topicID: ID!, $avatarBucket: String!, $avatarKey: String!, $sourceRelations: [PublisherToPublisherSourceCreatePublisherSourceRelation!]!) {
  publisherCreate(
    input: {title: $title, topic: {link: $topicID}, avatar: {create: {bucket: $avatarBucket, key: $avatarKey}}, creator: $creatorID, sources: $sourceRelations}
  ) {
    publisher {
      id
      title
    }
  }
}
    `;
export type CreatePublisherMutationMutationFn = Apollo.MutationFunction<CreatePublisherMutationMutation, CreatePublisherMutationMutationVariables>;

/**
 * __useCreatePublisherMutationMutation__
 *
 * To run a mutation, you first call `useCreatePublisherMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePublisherMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPublisherMutationMutation, { data, loading, error }] = useCreatePublisherMutationMutation({
 *   variables: {
 *      title: // value for 'title'
 *      creatorID: // value for 'creatorID'
 *      topicID: // value for 'topicID'
 *      avatarBucket: // value for 'avatarBucket'
 *      avatarKey: // value for 'avatarKey'
 *      sourceRelations: // value for 'sourceRelations'
 *   },
 * });
 */
export function useCreatePublisherMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreatePublisherMutationMutation, CreatePublisherMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePublisherMutationMutation, CreatePublisherMutationMutationVariables>(CreatePublisherMutationDocument, options);
      }
export type CreatePublisherMutationMutationHookResult = ReturnType<typeof useCreatePublisherMutationMutation>;
export type CreatePublisherMutationMutationResult = Apollo.MutationResult<CreatePublisherMutationMutation>;
export type CreatePublisherMutationMutationOptions = Apollo.BaseMutationOptions<CreatePublisherMutationMutation, CreatePublisherMutationMutationVariables>;
export const PublisherSourceSearchByTypeDocument = gql`
    query PublisherSourceSearchByType($type: SourceType!) {
  publisherSourceSearch(filter: {type: {eq: $type}}, first: 100) {
    edges {
      node {
        id
        type
        creator
        publisher {
          id
        }
        topic {
          id
        }
        rss {
          url
        }
        youtube {
          username
          channelID
        }
      }
    }
  }
}
    `;

/**
 * __usePublisherSourceSearchByTypeQuery__
 *
 * To run a query within a React component, call `usePublisherSourceSearchByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublisherSourceSearchByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublisherSourceSearchByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePublisherSourceSearchByTypeQuery(baseOptions: Apollo.QueryHookOptions<PublisherSourceSearchByTypeQuery, PublisherSourceSearchByTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublisherSourceSearchByTypeQuery, PublisherSourceSearchByTypeQueryVariables>(PublisherSourceSearchByTypeDocument, options);
      }
export function usePublisherSourceSearchByTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublisherSourceSearchByTypeQuery, PublisherSourceSearchByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublisherSourceSearchByTypeQuery, PublisherSourceSearchByTypeQueryVariables>(PublisherSourceSearchByTypeDocument, options);
        }
export type PublisherSourceSearchByTypeQueryHookResult = ReturnType<typeof usePublisherSourceSearchByTypeQuery>;
export type PublisherSourceSearchByTypeLazyQueryHookResult = ReturnType<typeof usePublisherSourceSearchByTypeLazyQuery>;
export type PublisherSourceSearchByTypeQueryResult = Apollo.QueryResult<PublisherSourceSearchByTypeQuery, PublisherSourceSearchByTypeQueryVariables>;
export const GetNewsItemDocument = gql`
    query GetNewsItem($id: ID!) {
  newsItem(by: {id: $id}) {
    ...BaseNewsItem
    rss {
      contentHtml
    }
  }
}
    ${BaseNewsItemFragmentDoc}`;

/**
 * __useGetNewsItemQuery__
 *
 * To run a query within a React component, call `useGetNewsItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNewsItemQuery(baseOptions: Apollo.QueryHookOptions<GetNewsItemQuery, GetNewsItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsItemQuery, GetNewsItemQueryVariables>(GetNewsItemDocument, options);
      }
export function useGetNewsItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsItemQuery, GetNewsItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsItemQuery, GetNewsItemQueryVariables>(GetNewsItemDocument, options);
        }
export type GetNewsItemQueryHookResult = ReturnType<typeof useGetNewsItemQuery>;
export type GetNewsItemLazyQueryHookResult = ReturnType<typeof useGetNewsItemLazyQuery>;
export type GetNewsItemQueryResult = Apollo.QueryResult<GetNewsItemQuery, GetNewsItemQueryVariables>;
export const GetNewsFeedDocument = gql`
    query GetNewsFeed($userId: String!) {
  newsItemSearch(filter: {creator: {eq: $userId}}, first: 100) {
    edges {
      node {
        ...BaseNewsItem
      }
    }
  }
}
    ${BaseNewsItemFragmentDoc}`;

/**
 * __useGetNewsFeedQuery__
 *
 * To run a query within a React component, call `useGetNewsFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsFeedQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetNewsFeedQuery(baseOptions: Apollo.QueryHookOptions<GetNewsFeedQuery, GetNewsFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsFeedQuery, GetNewsFeedQueryVariables>(GetNewsFeedDocument, options);
      }
export function useGetNewsFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsFeedQuery, GetNewsFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsFeedQuery, GetNewsFeedQueryVariables>(GetNewsFeedDocument, options);
        }
export type GetNewsFeedQueryHookResult = ReturnType<typeof useGetNewsFeedQuery>;
export type GetNewsFeedLazyQueryHookResult = ReturnType<typeof useGetNewsFeedLazyQuery>;
export type GetNewsFeedQueryResult = Apollo.QueryResult<GetNewsFeedQuery, GetNewsFeedQueryVariables>;
export const SearchNewsFeedDocument = gql`
    query SearchNewsFeed($userId: String!, $query: String!) {
  newsItemSearch(
    filter: {creator: {eq: $userId}, title: {regex: $query}}
    first: 100
  ) {
    edges {
      node {
        id
      }
    }
  }
}
    `;

/**
 * __useSearchNewsFeedQuery__
 *
 * To run a query within a React component, call `useSearchNewsFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchNewsFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchNewsFeedQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchNewsFeedQuery(baseOptions: Apollo.QueryHookOptions<SearchNewsFeedQuery, SearchNewsFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchNewsFeedQuery, SearchNewsFeedQueryVariables>(SearchNewsFeedDocument, options);
      }
export function useSearchNewsFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchNewsFeedQuery, SearchNewsFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchNewsFeedQuery, SearchNewsFeedQueryVariables>(SearchNewsFeedDocument, options);
        }
export type SearchNewsFeedQueryHookResult = ReturnType<typeof useSearchNewsFeedQuery>;
export type SearchNewsFeedLazyQueryHookResult = ReturnType<typeof useSearchNewsFeedLazyQuery>;
export type SearchNewsFeedQueryResult = Apollo.QueryResult<SearchNewsFeedQuery, SearchNewsFeedQueryVariables>;
export const GetPublisherNewsFeedDocument = gql`
    query GetPublisherNewsFeed($id: ID!) {
  publisher(by: {id: $id}) {
    ...PublisherInfo
    news(first: 100) {
      edges {
        node {
          ...BaseNewsItem
        }
      }
    }
  }
}
    ${PublisherInfoFragmentDoc}
${BaseNewsItemFragmentDoc}`;

/**
 * __useGetPublisherNewsFeedQuery__
 *
 * To run a query within a React component, call `useGetPublisherNewsFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublisherNewsFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublisherNewsFeedQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPublisherNewsFeedQuery(baseOptions: Apollo.QueryHookOptions<GetPublisherNewsFeedQuery, GetPublisherNewsFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublisherNewsFeedQuery, GetPublisherNewsFeedQueryVariables>(GetPublisherNewsFeedDocument, options);
      }
export function useGetPublisherNewsFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublisherNewsFeedQuery, GetPublisherNewsFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublisherNewsFeedQuery, GetPublisherNewsFeedQueryVariables>(GetPublisherNewsFeedDocument, options);
        }
export type GetPublisherNewsFeedQueryHookResult = ReturnType<typeof useGetPublisherNewsFeedQuery>;
export type GetPublisherNewsFeedLazyQueryHookResult = ReturnType<typeof useGetPublisherNewsFeedLazyQuery>;
export type GetPublisherNewsFeedQueryResult = Apollo.QueryResult<GetPublisherNewsFeedQuery, GetPublisherNewsFeedQueryVariables>;
export const CreatePublisherDocument = gql`
    mutation CreatePublisher($input: CustomCreatePublisherInput!) {
  custom {
    createPublisher(input: $input) {
      id
    }
  }
}
    `;
export type CreatePublisherMutationFn = Apollo.MutationFunction<CreatePublisherMutation, CreatePublisherMutationVariables>;

/**
 * __useCreatePublisherMutation__
 *
 * To run a mutation, you first call `useCreatePublisherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePublisherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPublisherMutation, { data, loading, error }] = useCreatePublisherMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePublisherMutation(baseOptions?: Apollo.MutationHookOptions<CreatePublisherMutation, CreatePublisherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePublisherMutation, CreatePublisherMutationVariables>(CreatePublisherDocument, options);
      }
export type CreatePublisherMutationHookResult = ReturnType<typeof useCreatePublisherMutation>;
export type CreatePublisherMutationResult = Apollo.MutationResult<CreatePublisherMutation>;
export type CreatePublisherMutationOptions = Apollo.BaseMutationOptions<CreatePublisherMutation, CreatePublisherMutationVariables>;
export const ListUserPublishersDocument = gql`
    query ListUserPublishers($creatorID: String!) {
  topicSearch(first: 10, query: $creatorID) {
    edges {
      node {
        ...BaseTopic
        publishers(first: 10) {
          edges {
            node {
              ...PublisherInfo
            }
          }
        }
      }
    }
  }
}
    ${BaseTopicFragmentDoc}
${PublisherInfoFragmentDoc}`;

/**
 * __useListUserPublishersQuery__
 *
 * To run a query within a React component, call `useListUserPublishersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUserPublishersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUserPublishersQuery({
 *   variables: {
 *      creatorID: // value for 'creatorID'
 *   },
 * });
 */
export function useListUserPublishersQuery(baseOptions: Apollo.QueryHookOptions<ListUserPublishersQuery, ListUserPublishersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUserPublishersQuery, ListUserPublishersQueryVariables>(ListUserPublishersDocument, options);
      }
export function useListUserPublishersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUserPublishersQuery, ListUserPublishersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUserPublishersQuery, ListUserPublishersQueryVariables>(ListUserPublishersDocument, options);
        }
export type ListUserPublishersQueryHookResult = ReturnType<typeof useListUserPublishersQuery>;
export type ListUserPublishersLazyQueryHookResult = ReturnType<typeof useListUserPublishersLazyQuery>;
export type ListUserPublishersQueryResult = Apollo.QueryResult<ListUserPublishersQuery, ListUserPublishersQueryVariables>;
export const CreateTopicDocument = gql`
    mutation CreateTopic($input: TopicCreateInput!) {
  topicCreate(input: $input) {
    topic {
      ...BaseTopic
    }
  }
}
    ${BaseTopicFragmentDoc}`;
export type CreateTopicMutationFn = Apollo.MutationFunction<CreateTopicMutation, CreateTopicMutationVariables>;

/**
 * __useCreateTopicMutation__
 *
 * To run a mutation, you first call `useCreateTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTopicMutation, { data, loading, error }] = useCreateTopicMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTopicMutation(baseOptions?: Apollo.MutationHookOptions<CreateTopicMutation, CreateTopicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTopicMutation, CreateTopicMutationVariables>(CreateTopicDocument, options);
      }
export type CreateTopicMutationHookResult = ReturnType<typeof useCreateTopicMutation>;
export type CreateTopicMutationResult = Apollo.MutationResult<CreateTopicMutation>;
export type CreateTopicMutationOptions = Apollo.BaseMutationOptions<CreateTopicMutation, CreateTopicMutationVariables>;