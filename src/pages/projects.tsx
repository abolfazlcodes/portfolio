import dynamic from 'next/dynamic';

const DynamicProjectsWrapper = dynamic(
  () => import('../features/Projects/ProjectsWrapper'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

function projects() {
  return (
    <section className='flex h-full w-full flex-col bg-[#011627] md:flex-row'>
      <DynamicProjectsWrapper />
    </section>
  );
}

export default projects;
