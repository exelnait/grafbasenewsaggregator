import Link from 'next/link';
import { NewsItemModel } from '../../../data/data';
import { BackgroundImage, Box } from '@mantine/core';

interface IProps {
  data: NewsItemModel;
}

export function NewsCard({ data }: IProps) {
  return (
    <Link href={`/app/open/${data.type.toLowerCase()}/${data.id}`}>
      <button
        type="button"
        className="flex bg-white hover:bg-gray-100 shadow overflow-hidden sm:rounded-lg mb-4 px-4 py-5 sm:px-6 w-full"
      >
        <div className="flex flex-1 flex-col gap-4 text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {data.title}
          </h3>
          <p className="text-sm text-ellipsis overflow-hidden">
            {data.description}
          </p>
          {data.publisher && (
            <div className="flex items-center gap-4">
              <img
                className="h-4 w-4 rounded-sm"
                src={data.publisher.avatarUrl}
                alt=""
              />
              <h3 className="text-base tracking-tight text-gray-900">
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
