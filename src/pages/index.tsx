import Image from "next/image";
import { Inter } from "next/font/google";
import Cover from "@/components/cover";
import Services from "@/components/services";
import Expertise from "@/components/expertise";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Cover />
      <Services />
      <Expertise />
      <Projects />
      <Contact />
    </Layout>
  );
}
