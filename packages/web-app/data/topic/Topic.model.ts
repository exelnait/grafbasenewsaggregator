import { PublisherModel } from '../data';

export class TopicModel {
  id!: string;
  title!: string;
  publishers: PublisherModel[] = [];

  constructor(data: TopicModel) {
    Object.assign(this, data);
  }

  static fromGraphQL(data) {
    return new TopicModel({
      id: data.id,
      title: data.title,
      publishers: data.publishers
        ? data.publishers?.edges?.map(
            (edge) => edge?.node && PublisherModel.fromGraphQL(edge.node)
          )
        : [],
    });
  }
}
