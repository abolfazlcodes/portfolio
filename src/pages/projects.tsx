import dynamic from 'next/dynamic';
import Head from 'next/head';

const DynamicProjectsWrapper = dynamic(
  () => import('../features/Projects/ProjectsWrapper'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

function projects() {
  return (
    <>
      <Head>
        <title>Abolfazl Jamshidi - Projects</title>
        <meta
          name='description'
          content='This is the projects page listing all the projects'
        />
        <meta name='robots' content='noindex, nofollow' />
        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/projects`}
        />
      </Head>
      <section className='flex h-full w-full flex-col bg-[#011627] md:flex-row'>
        <DynamicProjectsWrapper />
      </section>
    </>
  );
}

export default projects;
