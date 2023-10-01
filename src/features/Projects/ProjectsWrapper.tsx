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
      'This is complex project built using cutting-edge technologies such as React, NextJS and TypeScript. This is a hotel admin dashboard that hotel employees can manage and filter the bookings, cabins and so on. Take a look at the demo',
    link: 'https://wildoasis-abolfazl.vercel.app/',
  },
  {
    id: 2,
    title: '_car-rent-platform',
    description:
      'This is complex project built using cutting-edge technologies such as React, NextJS and TypeScript. This is modern platform for renting different types of cars and make the the modern world of transportation more convenient. Take a look at the demo',
    link: 'https://morent-three.vercel.app/',
  },
  {
    id: 3,
    title: '_hotel-dashboard',
    description:
      'This is complex project built using cutting-edge technologies such as React, NextJS and TypeScript. This is a hotel admin dashboard that hotel employees can manage and filter the bookings, cabins and so on. Take a look at the demo',
    link: 'https://wildoasis-abolfazl.vercel.app/',
  },
];

function ProjectsWrapper() {
  return (
    <>
      <aside className='border-r border-[#1e2d3d]'>filter</aside>

      <main className='flex h-full flex-col border-r border-[#1E2D3D] md:col-span-11 xl:col-span-6'>
        <header className='border-b border-r border-[#1e2d3d]'>
          <div className='flex h-11 w-max items-center justify-between gap-3 border-r border-[#1e2d3d] px-8'>
            <span>react</span>;<span>vue</span>
          </div>
        </header>

        <div className='flex h-full flex-col items-center justify-center gap-8 py-20 sm:p-10 lg:flex-row'>
          {projectsFakeData.map((project) => (
            <DynamicProjectsCard
              key={project.id}
              card={project}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ProjectsWrapper;
