/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateNewsItem($input: [NewsItemCreateManyInput!]!) {\n  newsItemCreateMany(input: $input) {\n    newsItemCollection {\n      id\n      type\n    }\n  }\n}\n\nmutation NewsItemUpdate($id: ID!, $input: NewsItemUpdateInput!) {\n  newsItemUpdate(by: {id: $id}, input: $input) {\n    newsItem {\n      id\n    }\n  }\n}": types.CreateNewsItemDocument,
    "query GetNewsItemFull($id: ID!) {\n  newsItem(by: {id: $id}) {\n    id\n    youtube {\n      videoId\n      coverUrl\n      captions {\n        duration\n        start\n        text\n      }\n      summary\n    }\n    rss {\n      contentHtml\n      contentJson\n      coverUrl\n      summary\n      url\n      categories\n      author\n    }\n    topic {\n      id\n      title\n    }\n    publisher {\n      id\n      title\n    }\n    title\n    type\n    cover {\n      bucket\n      key\n      url\n    }\n  }\n}": types.GetNewsItemFullDocument,
    "mutation CreatePublisherMutation($title: String!, $creatorID: String!, $topicID: ID!, $avatarBucket: String!, $avatarKey: String!, $sourceRelations: [PublisherToPublisherSourceCreatePublisherSourceRelation!]!) {\n  publisherCreate(\n    input: {title: $title, topic: {link: $topicID}, avatar: {create: {bucket: $avatarBucket, key: $avatarKey}}, creator: $creatorID, sources: $sourceRelations}\n  ) {\n    publisher {\n      id\n      title\n      sources {\n        edges {\n          node {\n            id\n            type\n            creator\n            publisher {\n              id\n            }\n            topic {\n              id\n            }\n            rss {\n              url\n            }\n            youtube {\n              username\n              channelID\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.CreatePublisherMutationDocument,
    "query PublisherSourceSearchByType($type: SourceType!) {\n  publisherSourceSearch(filter: {type: {eq: $type}}, first: 100) {\n    edges {\n      node {\n        id\n        type\n        creator\n        publisher {\n          id\n        }\n        topic {\n          id\n        }\n        rss {\n          url\n        }\n        youtube {\n          username\n          channelID\n        }\n      }\n    }\n  }\n}": types.PublisherSourceSearchByTypeDocument,
    "fragment BaseNewsItem on NewsItem {\n  id\n  title\n  description\n  type\n  publishedAt\n  cover {\n    bucket\n    key\n    url\n  }\n  rss {\n    url\n    coverUrl\n    contentHtml\n  }\n  youtube {\n    videoId\n    coverUrl\n  }\n  publisher {\n    ...PublisherInfo\n  }\n}": types.BaseNewsItemFragmentDoc,
    "query GetNewsItem($id: ID!) {\n  newsItem(by: {id: $id}) {\n    ...BaseNewsItem\n  }\n}\n\nquery GetNewsItemWithSummary($id: String!) {\n  custom {\n    getNewsItem(id: $id) {\n      id\n      rss {\n        summary\n        contentHtml\n      }\n      youtube {\n        summary\n      }\n    }\n  }\n}\n\nquery GetNewsFeed($userId: String!) {\n  newsItemSearch(filter: {creator: {eq: $userId}}, first: 100) {\n    edges {\n      node {\n        ...BaseNewsItem\n      }\n    }\n  }\n}\n\nquery SearchNewsFeed($userId: String!, $query: String!) {\n  newsItemSearch(query: $query, filter: {creator: {eq: $userId}}, first: 10) {\n    edges {\n      node {\n        ...BaseNewsItem\n      }\n    }\n  }\n}\n\nquery GetPublisherNewsFeed($id: ID!) {\n  publisher(by: {id: $id}) {\n    ...PublisherInfo\n    news(first: 100) {\n      edges {\n        node {\n          ...BaseNewsItem\n        }\n      }\n    }\n  }\n}": types.GetNewsItemDocument,
    "fragment PublisherInfo on Publisher {\n  id\n  title\n  avatar {\n    bucket\n    key\n    url\n  }\n}": types.PublisherInfoFragmentDoc,
    "mutation CreatePublisher($input: CustomCreatePublisherInput!) {\n  custom {\n    createPublisher(input: $input) {\n      id\n    }\n  }\n}": types.CreatePublisherDocument,
    "query ListUserPublishers($creatorID: String!) {\n  topicSearch(first: 10, filter: {creator: {eq: $creatorID}}) {\n    edges {\n      node {\n        ...BaseTopic\n        publishers(first: 10) {\n          edges {\n            node {\n              ...PublisherInfo\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ListUserPublishersDocument,
    "fragment BaseTopic on Topic {\n  id\n  title\n}": types.BaseTopicFragmentDoc,
    "mutation CreateTopic($input: TopicCreateInput!) {\n  topicCreate(input: $input) {\n    topic {\n      ...BaseTopic\n    }\n  }\n}": types.CreateTopicDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateNewsItem($input: [NewsItemCreateManyInput!]!) {\n  newsItemCreateMany(input: $input) {\n    newsItemCollection {\n      id\n      type\n    }\n  }\n}\n\nmutation NewsItemUpdate($id: ID!, $input: NewsItemUpdateInput!) {\n  newsItemUpdate(by: {id: $id}, input: $input) {\n    newsItem {\n      id\n    }\n  }\n}"): (typeof documents)["mutation CreateNewsItem($input: [NewsItemCreateManyInput!]!) {\n  newsItemCreateMany(input: $input) {\n    newsItemCollection {\n      id\n      type\n    }\n  }\n}\n\nmutation NewsItemUpdate($id: ID!, $input: NewsItemUpdateInput!) {\n  newsItemUpdate(by: {id: $id}, input: $input) {\n    newsItem {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetNewsItemFull($id: ID!) {\n  newsItem(by: {id: $id}) {\n    id\n    youtube {\n      videoId\n      coverUrl\n      captions {\n        duration\n        start\n        text\n      }\n      summary\n    }\n    rss {\n      contentHtml\n      contentJson\n      coverUrl\n      summary\n      url\n      categories\n      author\n    }\n    topic {\n      id\n      title\n    }\n    publisher {\n      id\n      title\n    }\n    title\n    type\n    cover {\n      bucket\n      key\n      url\n    }\n  }\n}"): (typeof documents)["query GetNewsItemFull($id: ID!) {\n  newsItem(by: {id: $id}) {\n    id\n    youtube {\n      videoId\n      coverUrl\n      captions {\n        duration\n        start\n        text\n      }\n      summary\n    }\n    rss {\n      contentHtml\n      contentJson\n      coverUrl\n      summary\n      url\n      categories\n      author\n    }\n    topic {\n      id\n      title\n    }\n    publisher {\n      id\n      title\n    }\n    title\n    type\n    cover {\n      bucket\n      key\n      url\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePublisherMutation($title: String!, $creatorID: String!, $topicID: ID!, $avatarBucket: String!, $avatarKey: String!, $sourceRelations: [PublisherToPublisherSourceCreatePublisherSourceRelation!]!) {\n  publisherCreate(\n    input: {title: $title, topic: {link: $topicID}, avatar: {create: {bucket: $avatarBucket, key: $avatarKey}}, creator: $creatorID, sources: $sourceRelations}\n  ) {\n    publisher {\n      id\n      title\n      sources {\n        edges {\n          node {\n            id\n            type\n            creator\n            publisher {\n              id\n            }\n            topic {\n              id\n            }\n            rss {\n              url\n            }\n            youtube {\n              username\n              channelID\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["mutation CreatePublisherMutation($title: String!, $creatorID: String!, $topicID: ID!, $avatarBucket: String!, $avatarKey: String!, $sourceRelations: [PublisherToPublisherSourceCreatePublisherSourceRelation!]!) {\n  publisherCreate(\n    input: {title: $title, topic: {link: $topicID}, avatar: {create: {bucket: $avatarBucket, key: $avatarKey}}, creator: $creatorID, sources: $sourceRelations}\n  ) {\n    publisher {\n      id\n      title\n      sources {\n        edges {\n          node {\n            id\n            type\n            creator\n            publisher {\n              id\n            }\n            topic {\n              id\n            }\n            rss {\n              url\n            }\n            youtube {\n              username\n              channelID\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PublisherSourceSearchByType($type: SourceType!) {\n  publisherSourceSearch(filter: {type: {eq: $type}}, first: 100) {\n    edges {\n      node {\n        id\n        type\n        creator\n        publisher {\n          id\n        }\n        topic {\n          id\n        }\n        rss {\n          url\n        }\n        youtube {\n          username\n          channelID\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query PublisherSourceSearchByType($type: SourceType!) {\n  publisherSourceSearch(filter: {type: {eq: $type}}, first: 100) {\n    edges {\n      node {\n        id\n        type\n        creator\n        publisher {\n          id\n        }\n        topic {\n          id\n        }\n        rss {\n          url\n        }\n        youtube {\n          username\n          channelID\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment BaseNewsItem on NewsItem {\n  id\n  title\n  description\n  type\n  publishedAt\n  cover {\n    bucket\n    key\n    url\n  }\n  rss {\n    url\n    coverUrl\n    contentHtml\n  }\n  youtube {\n    videoId\n    coverUrl\n  }\n  publisher {\n    ...PublisherInfo\n  }\n}"): (typeof documents)["fragment BaseNewsItem on NewsItem {\n  id\n  title\n  description\n  type\n  publishedAt\n  cover {\n    bucket\n    key\n    url\n  }\n  rss {\n    url\n    coverUrl\n    contentHtml\n  }\n  youtube {\n    videoId\n    coverUrl\n  }\n  publisher {\n    ...PublisherInfo\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetNewsItem($id: ID!) {\n  newsItem(by: {id: $id}) {\n    ...BaseNewsItem\n  }\n}\n\nquery GetNewsItemWithSummary($id: String!) {\n  custom {\n    getNewsItem(id: $id) {\n      id\n      rss {\n        summary\n        contentHtml\n      }\n      youtube {\n        summary\n      }\n    }\n  }\n}\n\nquery GetNewsFeed($userId: String!) {\n  newsItemSearch(filter: {creator: {eq: $userId}}, first: 100) {\n    edges {\n      node {\n        ...BaseNewsItem\n      }\n    }\n  }\n}\n\nquery SearchNewsFeed($userId: String!, $query: String!) {\n  newsItemSearch(query: $query, filter: {creator: {eq: $userId}}, first: 10) {\n    edges {\n      node {\n        ...BaseNewsItem\n      }\n    }\n  }\n}\n\nquery GetPublisherNewsFeed($id: ID!) {\n  publisher(by: {id: $id}) {\n    ...PublisherInfo\n    news(first: 100) {\n      edges {\n        node {\n          ...BaseNewsItem\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetNewsItem($id: ID!) {\n  newsItem(by: {id: $id}) {\n    ...BaseNewsItem\n  }\n}\n\nquery GetNewsItemWithSummary($id: String!) {\n  custom {\n    getNewsItem(id: $id) {\n      id\n      rss {\n        summary\n        contentHtml\n      }\n      youtube {\n        summary\n      }\n    }\n  }\n}\n\nquery GetNewsFeed($userId: String!) {\n  newsItemSearch(filter: {creator: {eq: $userId}}, first: 100) {\n    edges {\n      node {\n        ...BaseNewsItem\n      }\n    }\n  }\n}\n\nquery SearchNewsFeed($userId: String!, $query: String!) {\n  newsItemSearch(query: $query, filter: {creator: {eq: $userId}}, first: 10) {\n    edges {\n      node {\n        ...BaseNewsItem\n      }\n    }\n  }\n}\n\nquery GetPublisherNewsFeed($id: ID!) {\n  publisher(by: {id: $id}) {\n    ...PublisherInfo\n    news(first: 100) {\n      edges {\n        node {\n          ...BaseNewsItem\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PublisherInfo on Publisher {\n  id\n  title\n  avatar {\n    bucket\n    key\n    url\n  }\n}"): (typeof documents)["fragment PublisherInfo on Publisher {\n  id\n  title\n  avatar {\n    bucket\n    key\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePublisher($input: CustomCreatePublisherInput!) {\n  custom {\n    createPublisher(input: $input) {\n      id\n    }\n  }\n}"): (typeof documents)["mutation CreatePublisher($input: CustomCreatePublisherInput!) {\n  custom {\n    createPublisher(input: $input) {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ListUserPublishers($creatorID: String!) {\n  topicSearch(first: 10, filter: {creator: {eq: $creatorID}}) {\n    edges {\n      node {\n        ...BaseTopic\n        publishers(first: 10) {\n          edges {\n            node {\n              ...PublisherInfo\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query ListUserPublishers($creatorID: String!) {\n  topicSearch(first: 10, filter: {creator: {eq: $creatorID}}) {\n    edges {\n      node {\n        ...BaseTopic\n        publishers(first: 10) {\n          edges {\n            node {\n              ...PublisherInfo\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment BaseTopic on Topic {\n  id\n  title\n}"): (typeof documents)["fragment BaseTopic on Topic {\n  id\n  title\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTopic($input: TopicCreateInput!) {\n  topicCreate(input: $input) {\n    topic {\n      ...BaseTopic\n    }\n  }\n}"): (typeof documents)["mutation CreateTopic($input: TopicCreateInput!) {\n  topicCreate(input: $input) {\n    topic {\n      ...BaseTopic\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;