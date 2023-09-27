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

function AboutMe({}: IndexPageProps) {
  return (
    <DynamicPageTransition>
      <section className='flex h-full items-center justify-center'>
        <DynamicHero />
      </section>
    </DynamicPageTransition>
  );
}

export default AboutMe;
