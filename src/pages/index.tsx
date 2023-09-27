// import dynamic from 'next/dynamic';
import Hero from '@/ui/Hero';
import PageTransition from '@/ui/PageTransition';

type IndexPageProps = {};

// const DynamicHero = dynamic(() => import('../ui/Hero'), {
//   loading: () => <p>loading ...</p>,
// });

function Home({}: IndexPageProps) {
  return (
    <PageTransition className='h-full'>
      <section className='flex h-full items-center justify-center'>
        <Hero />
        <article className='h-3/4 w-1/3 rounded-lg border border-[#0c1616] bg-game-board p-12 shadow-game-box-shadow backdrop-blur-xl'>
          game
        </article>
      </section>
    </PageTransition>
  );
}

export default Home;
