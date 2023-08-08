import React from 'react';

import { Modal, IModalProps } from '../../common/components/Modal';
import { useForm } from '@mantine/form';
import { Button, Group, TextInput, Container } from '@mantine/core';

interface IProps extends IModalProps {
  onSubmit: (data: CreateTopicFormData) => void;
}

export interface CreateTopicFormData {
  title: string;
}

export function CreateTopicModal({
  isOpen,
  isLoading,
  onClose,
  onSubmit,
}: IProps) {
  const form = useForm({
    initialValues: {
      title: '',
    },
    validate: {
      title: (value) => value.length <= 0,
    },
  });
  return (
    <Modal
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      title="Create topic"
    >
      <Container>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            withAsterisk
            label="Title"
            {...form.getInputProps('title')}
          />
          <Group justify="flex-end" my="md">
            <Button type="submit">Create</Button>
          </Group>
        </form>
      </Container>
    </Modal>
  );
}
