import dynamic from 'next/dynamic';

const DynamicContact = dynamic(
  () => import('@/features/Contact/Contact'),
  {
    loading: () => <p>Loading ...</p>,
    ssr: true,
  }
);

function ContactMe() {
  return (
    <section className='grid h-full grid-rows-1 bg-[#011627] sm:grid-cols-11 xl:grid-cols-7'>
      <DynamicContact />
    </section>
  );
}

export default ContactMe;
