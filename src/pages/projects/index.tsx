import Layout from "@/components/layout";
import ProjectCard from "@/ui/project-card";
import {
  ProjectSchema,
  TechSchema,
  getProjects,
  getTechs,
} from "@/lib/content";

export async function getStaticProps() {
  const projects = await getProjects();
  const techs = await getTechs();
  return {
    props: {
      projects,
      techs,
    },
  };
}

export default function ProjectList({ projects, techs }: ProjectListProps) {
  return (
    <Layout>
      <section className="max-w-screen-lg mx-auto p-8 space-y-9">
        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <ProjectCard
              project={p}
              techs={techs}
              even={i % 2 == 0}
              key={p.id}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

type ProjectListProps = {
  projects: ProjectSchema[];
  techs: TechSchema[];
};
