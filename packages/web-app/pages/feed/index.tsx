import { useGetNewsFeedQuery } from '../../graphql/schema';
import { NewsItemModel } from '../../data/data';
import { NewsCard } from '../../presentation/news/components/NewsCard';
import { PageLoader } from '../../presentation/common/components/PageLoader';
import AppLayout from '../layout';
import { useAuth } from '@clerk/nextjs';

export default function NewsFeed() {
  const { userId } = useAuth();
  const { data, loading, error } = useGetNewsFeedQuery({
    variables: {
      userId: userId as string,
    },
    errorPolicy: 'all',
  });
  const news =
    data?.newsItemSearch?.edges?.map((edge) =>
      NewsItemModel.fromGraphQL(edge.node)
    ) ?? [];
  return (
    <div className="mx-auto w-full max-w-[800px] p-3">
      {loading && <PageLoader />}
      {news.map((newsItem) => {
        return <NewsCard data={newsItem} key={newsItem.id} />;
      })}
    </div>
  );
}

NewsFeed.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
