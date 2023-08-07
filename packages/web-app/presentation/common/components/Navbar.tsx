import { PropsWithChildren } from 'react';

export function Navbar({ children }: PropsWithChildren) {
  return (
    <div className="bg-white shadow-sm flex flex-wrap items-center justify-between">
      {children}
    </div>
  );
}
