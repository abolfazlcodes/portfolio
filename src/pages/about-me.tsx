import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('../ui/Hero'), {
  loading: () => <p>loading ...</p>,
  ssr: true,
});

type IndexPageProps = {};

function AboutMe({}: IndexPageProps) {
  return (
    <section className='flex h-full items-center justify-center'>
      <DynamicHero />
    </section>
  );
}

export default AboutMe;
