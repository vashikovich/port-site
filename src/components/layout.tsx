import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={`bg-slate-950 text-slate-100 ${inter.className}`}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
