import { Fira_Code } from "next/font/google";
const inter = Fira_Code({ subsets: ["latin"] });

function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.className}`}>{children}</div>;
}

export default Layout;
