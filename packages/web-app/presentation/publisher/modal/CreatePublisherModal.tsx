import React, { useCallback } from 'react';

import { Modal, IModalProps } from '../../common/components/Modal';
import { SourceType } from '../../../graphql/schema';
import { useForm } from '@mantine/form';
import { Button, Container, Group, Select, TextInput } from '@mantine/core';

interface IProps extends IModalProps {
  topicTitle: string;
  onSubmit: (data: CreatePublisherFormData) => void;
}

interface PublisherSourceFormData {
  type: SourceType;
  url: string;
}

export interface CreatePublisherFormData {
  title: string;
  websiteUrl?: string;
  sources: PublisherSourceFormData[];
}

export function CreatePublisherModal({
  isOpen,
  isLoading,
  onClose,
  onSubmit,
  topicTitle,
}: IProps) {
  const form = useForm({
    initialValues: {
      title: '',
      sources: [],
    },
    validate: {
      sources: (value) => value.length <= 0,
      title: (value) => value.length <= 0,
    },
  });
  return (
    <Modal
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
      title={`Add a new publisher to topic "${topicTitle}"`}
    >
      <Container>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            withAsterisk
            label="Title"
            {...form.getInputProps('title')}
          />
          {form.getInputProps('sources').value.map((item, index) => (
            <Group key={item.key} my="xs">
              <Select
                w={100}
                label="Source type"
                {...form.getInputProps(`sources.${index}.type`)}
                data={['youtube', 'rss']}
              />
              <TextInput
                className={'flex-1'}
                withAsterisk
                label="Url"
                {...form.getInputProps(`sources.${index}.url`)}
              />
            </Group>
          ))}
          <Button
            mt="xs"
            variant={'outline'}
            onClick={() =>
              form.insertListItem('sources', { type: 'rss', url: '' })
            }
          >
            Add source
          </Button>
          <Group justify="flex-end" my="md">
            <Button type="submit">Create</Button>
          </Group>
        </form>
      </Container>
    </Modal>
  );
}
