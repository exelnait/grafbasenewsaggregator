import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useFragment } from '@apollo/client';

import {
  BaseNewsItemFragment,
  BaseNewsItemFragmentDoc,
  ListUserPublishersDocument,
  ListUserPublishersQuery,
  NewsItemModel,
  SourceType,
  useGetNewsItemLazyQuery,
  useGetNewsItemWithSummaryLazyQuery,
} from '../../../data/data';
import { PageLoader } from '../../../presentation/common/common.presentation';
import AppLayout from '../../layout';

import {
  Article,
  Summary,
  Video,
} from '../../../presentation/news/news.presentation';
import { ArrowLeftIcon, SparklesIcon } from '@heroicons/react/20/solid';
import { Alert, Button, Center, Group, Loader } from '@mantine/core';

export default function OpenNewsItem() {
  const router = useRouter();
  const { id: newsItemId, type: newsItemType } = router.query;

  const [newsItem, setNewsItem] = React.useState<NewsItemModel | null>(null);
  const { data: newsItemFragment } = useFragment<BaseNewsItemFragment>({
    fragment: BaseNewsItemFragmentDoc,
    fragmentName: 'BaseNewsItem',
    from: {
      __typename: 'NewsItem',
      id: newsItemId,
    },
  });
  const [getNewsItem, { data, loading, error }] = useGetNewsItemLazyQuery();
  const [
    getNewsItemWithSummary,
    { loading: loadingNewsItemWithSummary, error: errorNewsItemWithSummary },
  ] = useGetNewsItemWithSummaryLazyQuery();
  useEffect(() => {
    console.log(newsItemFragment);
    if (newsItemFragment?.id) {
      setNewsItem(NewsItemModel.fromGraphQL(newsItemFragment));
    } else {
      if (newsItemId && newsItemType) {
        getNewsItem({
          variables: {
            id: newsItemId as string,
          },
        }).then(({ data }) => {
          if (data?.newsItem) {
            setNewsItem(NewsItemModel.fromGraphQL(data.newsItem));
          }
        });
      }
    }
  }, [router.query]);

  const handleGetSummary = useCallback(async () => {
    const { id: newsItemId } = router.query;
    if (newsItemId) {
      const { data } = await getNewsItemWithSummary({
        fetchPolicy: 'network-only',
        variables: {
          id: newsItemId as string,
        },
      });
      if (data?.custom?.getNewsItem) {
        setNewsItem({
          ...(newsItem as NewsItemModel),
          content: data.custom.getNewsItem.rss?.contentHtml,
          summary:
            data.custom.getNewsItem.rss?.summary ||
            data.custom.getNewsItem.youtube?.summary,
        });
      }
      // update rss key
    }
  }, [newsItem, router.query]);

  return (
    <div className="mx-auto w-full max-w-[1000px] p-3">
      <Group justify="space-between">
        <Button onClick={() => router.back()}>
          <ArrowLeftIcon className="h-6 w-6" />
        </Button>
        <Button onClick={handleGetSummary}>
          <SparklesIcon className="h-6 w-6 mr-2"></SparklesIcon>
          Summarize
        </Button>
      </Group>
      <div className="h-5"></div>
      <Summary
        isLoading={loadingNewsItemWithSummary}
        content={newsItem?.summary}
      />
      {newsItem && newsItem.type === SourceType.Rss && (
        <Article item={newsItem} />
      )}
      {newsItem && newsItem.type === SourceType.Youtube && (
        <Video item={newsItem} />
      )}
      {loading && <PageLoader />}
    </div>
  );
}

OpenNewsItem.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
