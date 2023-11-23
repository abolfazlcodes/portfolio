import { store } from '@/store/Store';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import Script from 'next/script';
import Head from 'next/head';

const DynamicHero = dynamic(() => import('../ui/Hero'), {
  loading: () => <p>loading ...</p>,
  ssr: true,
});

const DynamicSnakeGame = dynamic(
  () => import('../features/SnakeGame/SnakeGame'),
  {
    loading: () => <p>loading game ...</p>,
    ssr: true,
  }
);

type IndexPageProps = {};

function Home({}: IndexPageProps) {
  return (
    <>
      <Head>
        <title>
          Software Engineer | Inspirational Portfolio
        </title>
      </Head>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-VCRD0ELK2W`}
      ></Script>
      <Script id='google-analytics'>
        {` window.dataLayer = window.dataLayer || []; function
          gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-VCRD0ELK2W')`}
      </Script>

      <section className='main m-auto flex h-full w-full flex-col items-center justify-center px-4 lg:w-full lg:flex-row'>
        <DynamicHero />
        <Provider store={store}>
          <DynamicSnakeGame />
        </Provider>
      </section>
    </>
  );
}

export default Home;
