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
    <section className='main m-auto flex h-full w-3/4 flex-col items-center justify-center lg:w-full lg:flex-row lg:px-4'>
      <DynamicHero />
      <Provider store={store}>
        <DynamicSnakeGame />
      </Provider>
    </section>
  );
}

export default Home;
