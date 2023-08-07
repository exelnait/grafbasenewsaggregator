import { AppProps } from 'next/app';
import './styles.css';
import '@mantine/core/styles.css';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';

import { ApolloProviderWrapper } from '../graphql/client';
import { ClerkLoaded, ClerkProvider } from '@clerk/nextjs';
import Head from 'next/head';

const theme = createTheme({});

function CustomApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <title>NewsAggregator</title>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <main className="app">
        <ClerkProvider {...pageProps}>
          <ClerkLoaded>
            <ApolloProviderWrapper>
              <MantineProvider theme={theme}>
                {getLayout(<Component {...pageProps} />)}
              </MantineProvider>
            </ApolloProviderWrapper>
          </ClerkLoaded>
        </ClerkProvider>
      </main>
    </>
  );
}

export default CustomApp;
