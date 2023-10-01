import dynamic from 'next/dynamic';
import sampleProject from '../../../public/sample project.png';

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
    image: sampleProject,
    title: '_ui-animations',
    description:
      'Duis aute irure dolor in velit esse cillum dolore.',
  },
  {
    id: 2,
    image: sampleProject,
    title: '_tetris-game',
    description:
      'Duis aute irure dolor in velit esse cillum dolore.',
  },
  {
    id: 3,
    image: sampleProject,
    title: '_ethereum',
    description:
      'Duis aute irure dolor in velit esse cillum dolore.',
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

        <div className='flex h-full flex-wrap justify-center gap-8 p-10 sm:py-48'>
          <DynamicProjectsCard card={projectsFakeData[0]} />
          <DynamicProjectsCard card={projectsFakeData[1]} />
          <DynamicProjectsCard card={projectsFakeData[2]} />
        </div>
      </main>
    </>
  );
}

export default ProjectsWrapper;
