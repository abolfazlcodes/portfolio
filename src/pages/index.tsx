import SnakeGame from '@/features/SnakeGame';
import { store } from '@/store/Store';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';

const DynamicHero = dynamic(() => import('../ui/Hero'), {
  loading: () => <p>loading ...</p>,
  ssr: true,
});

const DynamicSnakeGame = dynamic(
  () => import('../ui/GameComponent'),
  {
    loading: () => <p>loading game ...</p>,
    ssr: true,
  }
);

type IndexPageProps = {};

function Home({}: IndexPageProps) {
  return (
    <section className='main flex h-full flex-col items-center justify-center lg:flex-row'>
      <DynamicHero />
      <Provider store={store}>
        {/* <DynamicSnakeGame /> */}
        <SnakeGame />
      </Provider>
    </section>
  );
}

export default Home;
