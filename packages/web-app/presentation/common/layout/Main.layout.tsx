import React, { PropsWithChildren } from 'react';
import { Sidebar, Logo, Navbar } from '../common.presentation';
import { Search } from '../components/Search';
import { UserButton  } from '@clerk/nextjs';
import {Group} from "@mantine/core";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100 dark:bg-gray-700">
      <Navbar>
        <Logo />
        <Group mr={20}>
          <Search />
            <UserButton userProfileMode="navigation" userProfileUrl="/settings" />
        </Group>
      </Navbar>
      <div className="grid grid-cols-sidebar">
        <div className="h-screen">
          <Sidebar />
        </div>
        <div className="w-full flex">{children}</div>
      </div>
    </div>
  );
}
