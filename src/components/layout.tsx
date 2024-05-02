import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <main className={`max-w-screen-lg mx-auto ${inter.className}`}>
      {children}
    </main>
  );
}
