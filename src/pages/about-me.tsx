import Hero from '@/ui/Hero';
import PageTransition from '@/ui/PageTransition';

type IndexPageProps = {};

function AboutMe({}: IndexPageProps) {
  return (
    <PageTransition className='h-full'>
      <section className='flex h-full items-center justify-center'>
        <Hero />
      </section>
    </PageTransition>
  );
}

export default AboutMe;
