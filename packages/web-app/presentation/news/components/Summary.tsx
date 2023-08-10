import { Alert, Center, Loader } from '@mantine/core';
import React from 'react';

export function Summary({
  isLoading,
  content,
}: {
  isLoading: boolean;
  content?: string;
}) {
  return isLoading ? (
    <Center className="my-5">
      <Loader type={'bars'} />
    </Center>
  ) : content ? (
    <Alert className="my-5">{content}</Alert>
  ) : (
    <></>
  );
}
