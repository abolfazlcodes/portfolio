import { Fira_Code } from 'next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';
const inter = Fira_Code({
  subsets: ['latin'],
});

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className='m-auto flex h-full max-w-screen-2xl flex-col'>
      <Navbar />
      <main className={`${inter.className} h-full-dvh  flex-1`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
