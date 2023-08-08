import React, { PropsWithChildren } from 'react';
import { LoadingOverlay, Modal as MantineModal } from '@mantine/core';

export interface IModalProps {
  title?: string;
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
}

export function Modal({
  isOpen,
  isLoading,
  onClose,
  title,
  children,
}: PropsWithChildren<IModalProps>) {
  return (
    <MantineModal
      opened={isOpen}
      onClose={onClose}
      size="lg"
      title={title}
      centered
    >
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ blur: 2 }}
      />
      {children}
    </MantineModal>
  );
}
