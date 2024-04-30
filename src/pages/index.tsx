import Image from "next/image";
import { Inter } from "next/font/google";
import Cover from "@/components/cover";
import Services from "@/components/services";
import Expertise from "@/components/expertise";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Layout from "@/components/layout";
import { getHomeContent, getProjects, getTechDescriptions } from "@/lib/content"
import { parseHomeTechs, parseTechs } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const content = await getHomeContent()
  const techs = await getTechDescriptions()
  const projects = (await getProjects()).slice(0, 3)
  return {
    props: {
      content,
      techs,
      projects
    }
  }
}

export default function Home({ content, techs, projects }) {

  const coverContent = content.find(c => c["Type"] == "Bio")
  const servicesContent = content.filter(c => c["Type"] == "Service")
  const projectsContent = projects.map(p => ({
    ...p,
    "Techs": parseTechs(techs, p["Techs"].split("|")[0].trim()),
    "Tags": p["Tags"].split("|")[0].split(/,\s+/)
  }))

  const exp1Techs = parseHomeTechs(content, techs, "Expertise 1")
  const exp2Techs = parseHomeTechs(content, techs, "Expertise 2")
  const exp3Techs = parseHomeTechs(content, techs, "Expertise 3")

  return (
    <Layout>
      <Cover greeting={coverContent["Title"]} bio={coverContent["Content"]} />
      <Services content={servicesContent} />
      <Expertise
        tier1={exp1Techs}
        tier2={exp2Techs}
        tier3={exp3Techs}
      />
      <Projects projects={projectsContent} />
      <Contact />
    </Layout>
  );
}
