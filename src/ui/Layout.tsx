import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`m-auto flex h-full-dvh max-w-screen-2xl flex-col`}
    >
      <Navbar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
