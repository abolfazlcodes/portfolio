import Head from 'next/head';
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
    <>
      <Head>
        <title>Abolfazl Jamshidi - contact form</title>
        <meta
          name='description'
          content='Reach to me by submitting your message.'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:url'
          content='https://abolfazlcodes.github.io/portfolio/contact-me'
        />
      </Head>
      <section className='grid h-full grid-rows-1 bg-[#011627] sm:grid-cols-11 xl:grid-cols-7'>
        <DynamicContact />
      </section>
    </>
  );
}

export default ContactMe;
