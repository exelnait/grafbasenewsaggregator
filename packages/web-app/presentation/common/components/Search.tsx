import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Badge, Button, Center, Group, Text } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export function Search() {
  const data = [
    {
      image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
      title: 'Bender Bending Rodríguez',
      description: 'Fascinated with cooking, though has no sense of taste',
      new: true,
    },

    {
      image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
      title: 'Carol Miller',
      description: 'One of the richest people on Earth',
      new: false,
    },
    {
      image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
      title: 'Homer Simpson',
      description: 'Overweight, lazy, and often ignorant',
      new: false,
    },
    {
      image:
        'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
      title: 'Spongebob Squarepants',
      description: 'Not just a sponge',
      new: false,
    },
  ];
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((item) => (
      <Spotlight.Action key={item.title} onClick={() => console.log(item)}>
        <Group wrap="nowrap" w="100%">
          {item.image && (
            <Center>
              <img src={item.image} alt={item.title} width={50} height={50} />
            </Center>
          )}

          <div style={{ flex: 1 }}>
            <Text>{item.title}</Text>

            {item.description && (
              <Text opacity={0.6} size="xs">
                {item.description}
              </Text>
            )}
          </div>

          {item.new && <Badge variant="default">new</Badge>}
        </Group>
      </Spotlight.Action>
    ));
  return (
    <div className="inline-flex items-center pr-4">
      <TextInput
        w={300}
        leftSectionPointerEvents="none"
        leftSection={<MagnifyingGlassIcon className="w-4 h-4" />}
        placeholder="Search"
        onClick={spotlight.open}
      />
      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search
          placeholder="Enter search query"
          leftSection={<MagnifyingGlassIcon className="w-8 h-8" />}
        />
        <Spotlight.ActionsList>
          {items.length > 0 ? (
            items
          ) : (
            <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </div>
  );
}
