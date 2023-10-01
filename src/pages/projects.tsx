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
    <section className='grid h-full grid-rows-1 bg-[#011627] sm:grid-cols-12 xl:grid-cols-7'>
      <DynamicProjectsWrapper />
    </section>
  );
}

export default projects;
