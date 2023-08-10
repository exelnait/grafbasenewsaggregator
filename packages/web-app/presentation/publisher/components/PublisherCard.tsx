import { Button } from '@mantine/core';
import { PublisherModel } from '../../../data/publisher/Publisher.model';
import { PublisherAvatar } from './PublisherAvatar';
interface IProps {
  publisher: PublisherModel;
}

export function PublisherCard({ publisher }: IProps) {
  return (
    <Button
      fullWidth
      variant="outline"
      size={'lg'}
      key={publisher.id}
      className="my-2 !justify-start"
    >
      <div className="flex gap-x-6 ">
        <PublisherAvatar title={publisher.title} src={publisher.avatarUrl} />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
            {publisher.title}
          </h3>
        </div>
      </div>
    </Button>
  );
}
