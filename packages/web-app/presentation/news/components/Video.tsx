import { NewsItemModel } from '../../../data/news/NewsItem.model';
import styles from './Article.module.css';

interface IProps {
  item: NewsItemModel;
}

export function Video({ item }: IProps) {
  return (
    <main className="flex justify-between">
      <article className="mx-auto w-full">
        <header className="mb-4 lg:mb-6 not-format">
          <iframe
            className={'w-full mb-4 aspect-video'}
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl dark:text-white">
            {item.title}
          </h1>
          {item.publisher && (
            <div className="flex justify-between">
              <div className="flex gap-x-6">
                <img
                  className="h-4 w-4 rounded-sm"
                  src={item.publisher.avatarUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base leading-4 tracking-tight text-gray-900 dark:text-white">
                    {item.publisher.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm">{item.publishedAtFormatted}</p>
            </div>
          )}
        </header>
      </article>
    </main>
  );
}
