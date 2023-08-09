import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useFragment } from '@apollo/client';

import {
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

import { Article, Video } from '../../../presentation/news/news.presentation';
import { ArrowLeftIcon, SparklesIcon } from '@heroicons/react/20/solid';
import { Alert, Button, Center, Group, Loader } from '@mantine/core';

export default function OpenNewsItem() {
  const router = useRouter();
  const { data: newsItemFragment } = useFragment({
    fragment: BaseNewsItemFragmentDoc,
    fragmentName: 'BaseNewsItem',
    from: {
      __typename: 'NewsItem',
      id: router.query?.id,
    },
  });
  const [getNewsItem, { data, loading, error }] = useGetNewsItemLazyQuery();
  const [
    getNewsItemWithSummary,
    {
      data: dataNewsItemWithSummary,
      loading: loadingNewsItemWithSummary,
      error: errorNewsItemWithSummary,
    },
  ] = useGetNewsItemWithSummaryLazyQuery();
  useEffect(() => {
    const { id: newsItemId, type: newsItemType } = router.query;
    if (newsItemId && newsItemType) {
      getNewsItem({
        variables: {
          id: newsItemId as string,
        },
      });
    }
  }, [router.query]);

  const handleGetSummary = useCallback(() => {
    const { id: newsItemId } = router.query;
    if (newsItemId) {
      getNewsItemWithSummary({
        fetchPolicy: 'network-only',
        variables: {
          id: newsItemId as string,
        },
      });
    }
  }, []);

  const newsItem = dataNewsItemWithSummary?.newsItem
    ? NewsItemModel.fromGraphQL(dataNewsItemWithSummary?.newsItem)
    : data?.newsItem
    ? NewsItemModel.fromGraphQL(data?.newsItem)
    : newsItemFragment?.id && NewsItemModel.fromGraphQL(newsItemFragment);

  console.log(newsItem);
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
      {loadingNewsItemWithSummary && (
        <Center className="my-5">
          <Loader type={'bars'} />
        </Center>
      )}
      {newsItem?.summary && <Alert className="my-5">{newsItem.summary}</Alert>}
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
