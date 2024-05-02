import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={`max-w-screen-lg mx-auto ${inter.className}`}>
      {children}
    </main>
  );
}
