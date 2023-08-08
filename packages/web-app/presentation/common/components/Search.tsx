import { useCallback, useEffect, useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Badge, Button, Center, Group, Text } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useSearchNewsFeedLazyQuery } from '../../../graphql/schema';
import { NewsItemModel } from '../../../data/news/NewsItem.model';
import { useAuth } from '@clerk/nextjs';
import { useDebouncedValue } from '@mantine/hooks';
import Link from 'next/link';

export function Search() {
  const { userId } = useAuth();
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 300);
  const [searchNews, { data, loading, error }] = useSearchNewsFeedLazyQuery();

  const newsItems =
    data?.newsItemSearch?.edges.map((edge) =>
      NewsItemModel.fromGraphQL(edge.node)
    ) ?? [];

  useEffect(() => {
    if (debouncedQuery) {
      searchNews({
        variables: {
          query: debouncedQuery,
          userId: userId as string,
        },
      });
    }
  }, [debouncedQuery]);

  const items = newsItems.map((item) => (
    <Spotlight.Action key={item.title}>
      <Link href={`/open/${item.type.toLowerCase()}/${item.id}`}>
        <Group wrap="nowrap" w="100%">
          {item.coverUrl && (
            <Center>
              <img src={item.coverUrl} alt={item.title} className="w-24" />
            </Center>
          )}

          <div style={{ flex: 1 }}>
            <Text>{item.title}</Text>
          </div>
        </Group>
      </Link>
    </Spotlight.Action>
  ));
  return (
    <div className="inline-flex items-center pr-4">
      <TextInput
        w={300}
        leftSectionPointerEvents="none"
        leftSection={<MagnifyingGlassIcon className="w-4 h-4" />}
        placeholder="Search"
        onClick={spotlight.open}
      />
      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search
          placeholder="Enter search query"
          leftSection={<MagnifyingGlassIcon className="w-8 h-8" />}
        />
        <Spotlight.ActionsList>
          {items.length > 0 ? (
            items
          ) : (
            <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </div>
  );
}
