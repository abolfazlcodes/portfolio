import { useState, useEffect } from 'react';
import Layout from '@/ui/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Loader from '@/ui/Loader';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Storing asPath in a state variable will make sure it doesn't
  // change after initialization:
  const asPath = useState(router.asPath);

  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  // if (isLoading) {
  //   return (
  //     <Layout>
  //       <Loader />
  //     </Layout>
  //   );
  // } else {
  return (
    <AnimatePresence
      mode='wait'
      initial={false}
      onExitComplete={onExitComplete}
    >
      <Layout>
        <Component key={asPath} {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
  // }
}
