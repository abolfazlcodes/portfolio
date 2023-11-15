import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Abolfazl Jamshidi | Front-end Developer</title>
        <meta
          name='description'
          content='This is the portfolio for Abolfazl Jamshidi. A front-end developer using cutting-edge technologies like React and NextJS'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        />
      </Head>
      <div
        data-testid='element-layout-wrapper'
        className={`m-auto flex h-full-dvh max-w-screen-2xl flex-col`}
      >
        <Navbar />
        <main
          data-testid='element-layout-main'
          className='flex-1'
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
