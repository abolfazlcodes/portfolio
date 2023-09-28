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

function AboutMe({}: IndexPageProps) {
  return (
    <DynamicPageTransition>
      <section className='flex h-full items-center justify-center'>
        <Hero />
      </section>
    </DynamicPageTransition>
  );
}

export default AboutMe;
