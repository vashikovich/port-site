import Image from "next/image";
import { Inter } from "next/font/google";
import Cover from "@/components/cover";
import Services from "@/components/services";
import Expertise from "@/components/expertise";
import Projects from "@/components/projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`max-w-screen-2xl mx-auto ${inter.className}`}
    >
      <Cover />
      <Services />
      <Expertise />
      <Projects />
    </main>
  );
}
