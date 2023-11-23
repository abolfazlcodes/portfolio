import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import CommentSnippet from '@/ui/CommentSnippet';
import Sidebar from '@/ui/Sidebar';
import CodeBlock from '@/ui/CodeBlock';
import { SnippetsProps } from '@/interface/Snippets.types';
import { snippets } from '@/data/snippets';

const DynamicCodeBlocksList = dynamic(
  () => import('../ui/CodeBlocksList'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

const DynamicPersonalInfoComponent = dynamic(
  () => import('../ui/PersonalInfo'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

const DynamicProfessionalInfoComponent = dynamic(
  () => import('../ui/ProfessionalInfo'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

type AboutMeTap = 'personal' | 'professional';

function AboutMe({ data }: { data: SnippetsProps[] }) {
  const [aboutMeTab, setAboutMeTab] =
    useState<AboutMeTap>('personal');

  return (
    <>
      <Head>
        <title>Abolfazl Jamshidi | About Me</title>
        <meta
          name='description'
          content='Information about my personal and professional working experience '
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/about-me`}
        />
         <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-VCRD0ELK2W`}
        ></Script>
        <Script id='google-analytics'>
          {` window.dataLayer = window.dataLayer || []; function
          gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-VCRD0ELK2W')`}
        </Script>
      </Head>
      <section className='grid h-full grid-rows-1 bg-[#011627] sm:grid-cols-12 xl:grid-cols-7'>
        <Sidebar setAboutMeTabs={setAboutMeTab} />

        <main className='flex flex-col border-r border-[#1E2D3D] md:col-span-11 xl:col-span-6 xl:flex-row'>
          {aboutMeTab === 'professional' ? (
            <DynamicProfessionalInfoComponent />
          ) : (
            <DynamicPersonalInfoComponent />
          )}

          <section className='w-full-dvw md:border-t md:border-[#1e2d3d] xl:w-1/2'>
            <header className='border-b border-[#1E2D3D]'>
              <div className='flex h-11 w-60 items-center justify-between border-[#1e2d3d]'></div>
            </header>
            <div className='h-full px-10 py-6 md:max-h-[83.5dvh] md:overflow-y-scroll'>
              <CommentSnippet
                comment={'// Code snippet showcase:'}
                language='javascript'
              />

              <DynamicCodeBlocksList>
                {data.map((snippetItem) => (
                  <CodeBlock
                    key={snippetItem.id}
                    code={snippetItem.snippet}
                  />
                ))}
              </DynamicCodeBlocksList>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export default AboutMe;
export const getStaticProps = async () => {
  const data = snippets;
  return {
    props: {
      data,
    },
  };
};
