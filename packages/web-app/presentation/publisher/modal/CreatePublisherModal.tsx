import React from 'react';

import {IModalProps, Modal} from '../../common/components/Modal';
import {SourceType} from '../../../graphql/schema';
import {useForm} from '@mantine/form';
import {Button, ButtonGroup, Container, Divider, Group, Select, Text, TextInput} from '@mantine/core';

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

const PUBLISHERS: CreatePublisherFormData[] = [{
  title: 'Engadget',
  sources: [{
    type: SourceType.Rss,
    url: 'https://www.engadget.com/rss.xml',
  }, {
    type: SourceType.Youtube,
    url: 'https://www.youtube.com/@Engadget',
  }]
}, {
    title: 'Verge',
    sources: [{
        type: SourceType.Rss,
        url: 'https://www.theverge.com/rss/index.xml',
    }, {
        type: SourceType.Youtube,
        url: 'https://www.youtube.com/@TheVerge',
    }]
}, {
    title: 'IGN',
    sources: [{
        type: SourceType.Rss,
        url: 'http://feeds.feedburner.com/ign/all',
    }, {
        type: SourceType.Youtube,
        url: 'https://www.youtube.com/@IGN',
    }]
}, {
    title: 'Kotaku',
    sources: [{
        type: SourceType.Rss,
        url: 'https://kotaku.com/rss',
    }, {
        type: SourceType.Youtube,
        url: 'https://www.youtube.com/@Kotaku',
    }]
}, {
    title: 'Techcrunch',
    sources: [{
        type: SourceType.Rss,
        url: 'https://techcrunch.com/feed/',
    }, {
        type: SourceType.Youtube,
        url: 'https://www.youtube.com/@TechCrunch',
    }]
}]

export function CreatePublisherModal({
  isOpen,
  isLoading,
  onClose,
  onSubmit,
  topicTitle,
}: IProps) {
  const form = useForm<CreatePublisherFormData>({
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
            <Text variant="sm" my={10}>or select from existing publishers</Text>
            <ButtonGroup>
                {PUBLISHERS.map((publisher) => (
                    <Button
                        key={publisher.title}
                        variant="outline"
                        onClick={() => form.setValues(publisher)}
                    >
                        {publisher.title}
                    </Button>
                ))}
            </ButtonGroup>
            <Divider my={20}/>
          <Group justify="flex-end" my="md">
            <Button type="submit">Create</Button>
          </Group>
        </form>
      </Container>
    </Modal>
  );
}
