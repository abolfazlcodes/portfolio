import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';

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
        <title>Abolfazl Jamshidi | Projects</title>
        <meta
          name='description'
          content='This is the projects page listing all the projects'
        />
        <meta name='robots' content='noindex, nofollow' />
        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/projects`}
        />

        <link
          rel='canonical'
          href='https://iabolfazl.dev/projects'
        ></link>
      </Head>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-VCRD0ELK2W`}
      ></Script>
      <Script id='google-analytics'>
        {` window.dataLayer = window.dataLayer || []; function
          gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-VCRD0ELK2W')`}
      </Script>

      <section className='flex h-full w-full flex-col bg-[#011627] md:flex-row'>
        <DynamicProjectsWrapper />
      </section>
    </>
  );
}

export default projects;
