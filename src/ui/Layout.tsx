import { Fira_Code } from "next/font/google";
const inter = Fira_Code({ subsets: ["latin"] });

function Layout({ children }: { children: React.ReactNode }) {
  function checkhHndler() {
    let x = 0;
    let arr = ["x", "y"];
  }

  return (
    <>
      <nav></nav>
      <main
        className={`${inter.className} border h-full-dvh max-w-screen-2xl m-auto`}
      >
        {children}
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;
