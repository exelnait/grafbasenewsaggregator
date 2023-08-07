import { auth, config, connector, g } from '@grafbase/sdk';

const sourceType = g.enum('SourceType', ['rss', 'youtube']);

// const user = g.model('User', {
//   email: g.email().unique(),
//   news: g
//     .relation(() => newsItem)
//     .list()
//     .optional(),
//   topics: g
//     .relation(() => topic)
//     .list()
//     .optional(),
//   publishers: g
//     .relation(() => publisher)
//     .list()
//     .optional(),
// });

const newsItemDataRSS = g.type('NewsItemDataRSS', {
  contentHtml: g.string().optional(),
  contentJson: g.string().optional(),
  coverUrl: g.string().optional(),
  url: g.string(),
  categories: g.string().list().optional(),
  author: g.string().optional(),
});

const newsItemDataYouTube = g.type('NewsItemDataYouTube', {
  videoId: g.string(),
  coverUrl: g.string().optional(),
});

const newsItem = g
  .model('NewsItem', {
    // creator: g.relation(user),
    type: g.enumRef(sourceType),
    title: g.string().search(),
    creator: g.string().unique().search(),
    description: g.string().optional(),
    publishedAt: g.string(),

    cover: g.relation(() => picture).optional(),
    publisher: g.relation(() => publisher).optional(),
    topic: g.relation(() => topic).optional(),

    rss: g.ref(newsItemDataRSS).optional(),
    youtube: g.ref(newsItemDataYouTube).optional(),
  })
  .search();

const topic = g.model('Topic', {
  title: g.string(),

  creator: g.string().unique().search(),
  // creator: g.relation(() => user),
  publishers: g
    .relation(() => publisher)
    .list()
    .optional(),
  news: g
    .relation(() => newsItem)
    .list()
    .optional(),
});

const publisherSourceRSS = g.type('PublisherSourceRSS', {
  url: g.string(),
});

const publisherSourceYouTube = g.type('PublisherSourceYouTube', {
  username: g.string().optional(),
  channelID: g.string().optional(),
});

const publisherSource = g
  .model('PublisherSource', {
    title: g.string(),
    isHidden: g.boolean().default(false),
    type: g.enumRef(sourceType),
    // creator: g.relation(() => user),
    creator: g.string().unique(),
    topic: g.relation(() => topic),
    publisher: g.relation(() => publisher),
    rss: g.ref(publisherSourceRSS).optional(),
    youtube: g.ref(publisherSourceYouTube).optional(),
  })
  .search();

const publisher = g.model('Publisher', {
  // creator: g.relation(() => user),
  title: g.string(),
  creator: g.string().unique(),
  topic: g.relation(() => topic),
  avatar: g.relation(() => picture),
  news: g
    .relation(() => newsItem)
    .list()
    .optional(),
  sources: g.relation(() => publisherSource).list(),
});

const picture = g.model('Picture', {
  bucket: g.string(),
  key: g.string(),
  url: g
    .url()
    .optional()
    .resolver('picture/url')
    .cache({ maxAge: 60, staleWhileRevalidate: 60 }),
});

const graphqlAPI = connector.GraphQL({
  url: g.env('GRAPHQL_API_URL'),
  headers: (headers) => {
    // headers.set('Authorization', `Bearer ${g.env('GRAPHQL_API_KEY')}`);
  },
});

const provider = auth.OpenIDConnect({
  issuer: g.env('CLERK_ISSUER_URL'),
});

g.datasource(graphqlAPI, { namespace: 'custom' });

export default config({
  schema: g,
  auth: {
    providers: [provider],
    rules: (rules) => {
      rules.private();
    },
  },
});
