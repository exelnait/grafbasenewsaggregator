import { setContext } from '@apollo/client/link/context';

import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
  createHttpLink,
} from '@apollo/client';

import { useAuth } from '@clerk/nextjs';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  const { getToken } = useAuth();

  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      const token = await getToken({ template: 'grafbase' });

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, [getToken]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
