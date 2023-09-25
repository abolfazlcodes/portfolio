import { Fira_Code } from 'next/font/google';
const inter = Fira_Code({
  subsets: ['latin'],
});

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <nav></nav>
      <main
        className={`${inter.className} m-auto h-full-dvh max-w-screen-2xl`}
      >
        {children}
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
