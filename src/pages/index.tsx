import Image from "next/image";
import { Inter } from "next/font/google";
import Cover from "@/ui/cover";
import Services from "@/ui/services";
import Expertise from "@/ui/expertise";
import Projects from "@/ui/projects";
import Contact from "@/ui/contact";
import Layout from "@/components/layout";
import {
  HomeSchema,
  ProjectSchema,
  TechSchema,
  getHomeContent,
  getProjects,
  getTechs,
} from "@/lib/content";
import { GetStaticProps } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps = async () => {
  const content = await getHomeContent();
  const techs = await getTechs();
  const projects = (await getProjects()).slice(0, 3);
  return {
    props: {
      content,
      techs,
      projects,
    },
    revalidate: 600,
  };
};

export default function Home({ content, techs, projects }: HomeProps) {
  const coverContent = content.find((c) => c.type == "Bio");
  const servicesContent = content.filter((c) => c.type == "Service");

  const parseExpertise = (type: string) =>
    content.find((c) => c.type == type)?.title.split(/,\s+/) ?? [];

  const expertises = [
    parseExpertise("Expertise 1"),
    parseExpertise("Expertise 2"),
    parseExpertise("Expertise 3"),
  ];

  return (
    <Layout>
      <Head>
        <title>Indera Aji Waskitho&apos;s Portfolio</title>
      </Head>
      <Cover
        greeting={coverContent?.title ?? ""}
        bio={coverContent?.content ?? ""}
      />
      <Services content={servicesContent} />
      <Expertise expertises={expertises} techs={techs} />
      <Projects projects={projects} techs={techs} />
      <Contact />
    </Layout>
  );
}

type HomeProps = {
  content: HomeSchema[];
  techs: TechSchema[];
  projects: ProjectSchema[];
};
