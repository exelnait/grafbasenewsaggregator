import { Button } from '@mantine/core';
import { PublisherModel } from '../../../data/publisher/Publisher.model';
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
        <img className="h-8 w-8 rounded-md" src={publisher.avatarUrl} alt="" />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {publisher.title}
          </h3>
        </div>
      </div>
    </Button>
  );
}
