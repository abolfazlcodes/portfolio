import dynamic from 'next/dynamic';

const DynamicProjectsCard = dynamic(
  () => import('../../ui/ProjectCard'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

const projectsFakeData = [
  {
    id: 1,
    title: '_hotel-dashboard',
    description:
      'Duis aute irure dolor in velit esse cillum dolore.',
    link: 'https://wildoasis-abolfazl.vercel.app/',
  },
  {
    id: 2,
    title: '_car-rent-platform',
    description:
      'Duis aute irure dolor in velit esse cillum dolore.',
    link: 'https://morent-three.vercel.app/',
  },
  {
    id: 3,
    title: '_hotel-dashboard',
    description:
      'Duis aute irure dolor in velit esse cillum dolore.',
    link: 'https://wildoasis-abolfazl.vercel.app/',
  },
];

function ProjectsWrapper() {
  return (
    <>
      <aside className='border-r border-[#1e2d3d]'>filter</aside>

      <main className='flex flex-col border-r border-[#1E2D3D] md:col-span-11 xl:col-span-6'>
        <header className='border-b border-r border-[#1e2d3d]'>
          <div className='flex h-11 w-max items-center justify-between gap-3 border-r border-[#1e2d3d] px-8'>
            <span>react</span>;<span>vue</span>
          </div>
        </header>

        <div className='flex h-full flex-wrap items-center justify-center gap-8 p-10'>
          <DynamicProjectsCard card={projectsFakeData[0]} />
          <DynamicProjectsCard card={projectsFakeData[1]} />
          <DynamicProjectsCard card={projectsFakeData[2]} />
        </div>
      </main>
    </>
  );
}

export default ProjectsWrapper;
