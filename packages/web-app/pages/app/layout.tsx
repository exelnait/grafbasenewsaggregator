import { MainLayout } from '../../presentation/common/layout/Main.layout';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SignedIn>
        <MainLayout>{children}</MainLayout>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
