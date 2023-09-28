import Hero from '@/ui/Hero';
import dynamic from 'next/dynamic';

const DynamicPageTransition = dynamic(
  () => import('../ui/PageTransition'),
  {
    loading: () => <p>loading ...</p>,
    ssr: true,
  }
);

type IndexPageProps = {};

function Home({}: IndexPageProps) {
  return (
    <DynamicPageTransition>
      <section className='flex h-full items-center justify-center'>
        <Hero />
        <article className='h-3/4 w-2/5 rounded-lg border border-[#0c1616] bg-game-board p-12 shadow-game-box-shadow backdrop-blur-xl'>
          game
        </article>
      </section>
    </DynamicPageTransition>
  );
}

export default Home;
