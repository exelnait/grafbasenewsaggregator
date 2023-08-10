import { Avatar } from '@mantine/core';

export function PublisherAvatar({
  title,
  src,
}: {
  title: string;
  src?: string;
}) {
  const initials = title
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
  return (
    <Avatar src={src} color="gray" radius="sm">
      {initials}
    </Avatar>
  );
}
