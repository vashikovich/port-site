import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={`bg-slate-950 text-slate-100 ${inter.className}`}>
      {children}
    </main>
  );
}
