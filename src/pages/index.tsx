import dynamic from 'next/dynamic';

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
      <DynamicSnakeGame />
    </section>
  );
}

export default Home;
