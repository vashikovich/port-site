import Image from "next/image";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={`bg-slate-950 text-slate-100 ${inter.className}`}>
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
