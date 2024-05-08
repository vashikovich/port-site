import Layout from "@/components/layout";
import ProjectCard from "@/ui/project-card";
import {
  ProjectSchema,
  TechSchema,
  getProjects,
  getTechs,
} from "@/lib/content";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  const techs = await getTechs();
  return {
    props: {
      projects,
      techs,
    },
    revalidate: 600
  };
};

export default function ProjectList({ projects, techs }: ProjectListProps) {
  return (
    <Layout>
      <div
        className="min-h-96 flex"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(/images/bg.jpg) no-repeat 50% / cover",
        }}
      >
        <div className="max-w-screen-lg mx-auto p-8 space-y-2 flex justify-center items-center flex-1 flex-col">
          <h1 className="text-4xl md:text-6xl text-secondary">Experiences</h1>
          <p className="text-sm md:text-lg text-slate-200/90">
            Amazing things that I have done
          </p>
        </div>
      </div>
      <section className="max-w-screen-lg mx-auto p-8 mt-10">
        <div className="flex flex-col gap-10">
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
