import { Injectable } from '@nestjs/common';
import {
  PublisherSource,
  SourceType,
} from '../../../../graphql/generated/graphql';
import { Publisher } from './publisher.model';
const apiUrl = 'http://127.0.0.1:4000/graphql'; //process.env.GRAFBASE_API_URL

@Injectable()
export class PublisherService {
  async createdPublisher(input: any): Promise<Publisher> {
    console.log(input);
    const data = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '',
      },

      body: JSON.stringify({
        operationName: 'CreatePublisherMutation',
        query: `
    mutation CreatePublisherMutation(
    $title: String!
    $creatorID: String!
    $topicID: ID!
    $avatarBucket: String!
    $avatarKey: String!
    $sourceRelations: [PublisherToPublisherSourceCreatePublisherSourceRelation!]!
) {
    publisherCreate(input: {
        title: $title
        topic: {
            link: $topicID
        }
        avatar: {
            create: {
                bucket: $avatarBucket
                key: $avatarKey
            }
        }
        creator: $creatorID
        sources: $sourceRelations
    }) {
        publisher {
            id
            title
        }
    }
}
`,
        variables: input,
      }),
    });
    const response = await data.json();
    if (response.errors?.length > 0) {
      throw new Error(response.errors[0].message);
    }
    return response.data.publisherCreate.publisher;
  }

  async getAllPublisherSourcesByType(
    type: SourceType
  ): Promise<PublisherSource[]> {
    const data = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '',
      },

      body: JSON.stringify({
        operationName: 'PublisherSourceSearchByType',
        query: `
    query PublisherSourceSearchByType($type: SourceType!) {
    publisherSourceSearch(filter: {
        type: {
            eq: $type
        }
    }, first: 100) {
        edges {
            node {
                id
                type
                publisher {
                    id
                }
                topic {
                    id
                }
                rss {
                    url
                }
                creator
                youtube {
                    username
                    channelID
                }
            }
        }
    }
}
`,
        variables: {
          type,
        },
      }),
    });
    const response = await data.json();
    const sources: PublisherSource[] =
      response.data.publisherSourceSearch.edges.map((edge) => edge.node);

    return sources;
  }
}
