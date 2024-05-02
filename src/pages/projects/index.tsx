import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";
import { getProjects, getTechDescriptions } from "@/lib/content";
import { parseTechs } from "@/lib/utils";

export async function getStaticProps() {
  const techs = await getTechDescriptions();
  const projects = await getProjects();
  return {
    props: {
      techs,
      projects,
    },
  };
}

export default function ProjectList({ techs, projects }) {
  const content = projects.map((p) => ({
    ...p,
    Techs: parseTechs(techs, p["Techs"].split("|")[0].trim()),
    Tags: p["Tags"].split("|")[0].split(/,\s+/),
  }));

  return (
    <Layout>
      <div className="flex flex-col gap-5 p-10">
        {content.map((p, i) => (
          <ProjectCard
            id={p["ID"]}
            title={p["Title"]}
            content={p["Short Desc"]}
            tags={p["Tags"]}
            techs={p["Techs"]}
            image={p["Image"]}
            even={i % 2 == 0}
            key={p["Title"]}
          />
        ))}
      </div>
    </Layout>
  );
}
