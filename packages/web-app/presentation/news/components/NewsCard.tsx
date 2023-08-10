import Link from 'next/link';
import { NewsItemModel, SourceType } from '../../../data/data';
import { BackgroundImage, Box } from '@mantine/core';
import { RssIcon, VideoCameraIcon } from '@heroicons/react/20/solid';
import { PublisherAvatar } from '../../publisher/components/PublisherAvatar';

interface IProps {
  data: NewsItemModel;
}

export function NewsCard({ data }: IProps) {
  return (
    <Link href={`/open/${data.type.toLowerCase()}/${data.id}`}>
      <button
        type="button"
        className="flex bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 shadow overflow-hidden sm:rounded-lg mb-4 px-4 py-5 sm:px-6 w-full"
      >
        <div className="flex flex-1 flex-col gap-4 text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            {data.title}
          </h3>
          <p className="text-sm text-ellipsis overflow-hidden">
            {data.description}
          </p>
          {data.publisher && (
            <div className="flex items-center gap-4">
              <Box w={15} h={15}>
                {data.type === SourceType.Rss && <RssIcon />}
                {data.type === SourceType.Youtube && <VideoCameraIcon />}
              </Box>
              <PublisherAvatar
                title={data.publisher.title}
                src={data.publisher.avatarUrl}
              />

              <h3 className="text-base tracking-tight text-gray-900 dark:text-white">
                {data.publisher.title}
              </h3>
              <p className="text-sm">&middot;</p>
              <p className="text-sm">{data.publishedAtFormatted}</p>
            </div>
          )}
        </div>
        {data.coverUrl && (
          <Box h={100} w={100} ml={10}>
            <BackgroundImage
              src={data.coverUrl}
              className="h-full"
              radius="sm"
            ></BackgroundImage>
          </Box>
        )}
      </button>
    </Link>
  );
}
