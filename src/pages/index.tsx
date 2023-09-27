import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('../ui/Hero'), {
  ssr: true,
});

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
        <DynamicHero />
        <article className='h-3/4 w-1/3 rounded-lg border border-[#0c1616] bg-game-board p-12 shadow-game-box-shadow backdrop-blur-xl'>
          game
        </article>
      </section>
    </DynamicPageTransition>
  );
}

export default Home;
