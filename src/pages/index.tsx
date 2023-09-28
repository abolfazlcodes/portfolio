import GameComponent from '@/ui/GameComponent';
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('../ui/Hero'), {
  loading: () => <p>loading ...</p>,
  ssr: true,
});

type IndexPageProps = {};

function Home({}: IndexPageProps) {
  return (
    <section className='flex h-full items-center justify-center'>
      <DynamicHero />
      <GameComponent />
    </section>
  );
}

export default Home;
