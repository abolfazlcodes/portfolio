import { useState, useEffect } from 'react';
import Layout from '@/ui/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Loader from '@/ui/Loader';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
