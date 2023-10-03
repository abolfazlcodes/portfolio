import dynamic from 'next/dynamic';
import { useState } from 'react';
import CommentSnippet from '@/ui/CommentSnippet';
import Sidebar from '@/ui/Sidebar';

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

type IndexPageProps = {};
type AboutMeTap = 'personal' | 'professional';

function AboutMe({}: IndexPageProps) {
  const [aboutMeTab, setAboutMeTab] =
    useState<AboutMeTap>('personal');

  return (
    <section className='grid h-full grid-rows-1 bg-[#011627] sm:grid-cols-12 xl:grid-cols-7'>
      <Sidebar setAboutMeTabs={setAboutMeTab} />

      <main className='flex flex-col border-r border-[#1E2D3D] md:col-span-11 xl:col-span-6 xl:flex-row'>
        {aboutMeTab === 'personal' ? (
          <DynamicPersonalInfoComponent />
        ) : (
          <DynamicProfessionalInfoComponent />
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

            <DynamicCodeBlocksList />
          </div>
        </section>
      </main>
    </section>
  );
}

export default AboutMe;
