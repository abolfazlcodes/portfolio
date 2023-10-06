import Head from 'next/head';
import { store } from '@/store/Store';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';

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
          Abolfazl Jamshidi - Front-end Developer | Portfolio
        </title>
        <meta
          name='description'
          content='This is the portfolio for Abolfazl Jamshidi. A front-end developer using cutting-edge technologies like React and NextJS'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        />
      </Head>
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
