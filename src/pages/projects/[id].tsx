import Contact from "@/ui/contact";
import Layout from "@/components/layout";
import ProjectCard from "@/ui/project-card";
import {
  ProjectSchema,
  TechSchema,
  getProjects,
  getTechs,
} from "@/lib/content";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import Tag from "@/components/tag";
import Button from "@/components/button";
import { useRouter } from "next/router.js";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = await getProjects();
  const techs = await getTechs();
  const id = (params as IParams).id;
  const project = projects.find((p) => p.id == id);
  return {
    props: {
      project,
      allProjects: projects,
      techs,
    },
    revalidate: 600
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = (await getProjects()).map((p) => p.id);
  const paths = ids.map((id) => ({
    params: {
      id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default function ProjectPage({
  project,
  allProjects,
  techs,
}: ProjectPageProps) {
  const router = useRouter();

  const concated = allProjects.concat(allProjects);
  const currentIdx = concated.findIndex((p) => project.id == p.id);
  const moreProjects = concated.slice(currentIdx + 1, currentIdx + 3);

  return (
    <Layout>
      <div
        className="min-h-96 flex"
        style={{
          background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${project.images[0]}) no-repeat 50% / cover`,
        }}
      >
        <div className="max-w-screen-lg mx-auto p-8 space-y-2 flex justify-center items-center flex-1 flex-col">
          <h1 className="text-4xl text-secondary">{project.title}</h1>
        </div>
      </div>
      <section className="max-w-screen-lg mx-auto p-8 space-y-9">
        <div className="space-y-3">
          <h3 className="font-bold">Description</h3>
          {project.longDesc.split(/[\r\n]+/).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="font-bold">Tags</h3>
          <div className="flex flex-wrap">
            {project.allTags.map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold">Tech Stack</h3>
          <div className="flex flex-wrap">
            {project.allTechs.map((tech) => (
              <Tag text={tech} key={tech} />
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto p-8 space-y-6">
        <h2 className="text-2xl font-bold ">Other Experiences</h2>
        {moreProjects.map((p, i) => (
          <ProjectCard
            project={p}
            techs={techs}
            even={i % 2 == 0}
            key={project.title}
          />
        ))}
        <div className="flex justify-center mt-6 md:mt-8">
          <Button variant="ghost" onClick={() => router.push("/projects")}>
            View All Projects
          </Button>
        </div>
      </section>
      <Contact />
    </Layout>
  );
}

type ProjectPageProps = {
  project: ProjectSchema;
  allProjects: ProjectSchema[];
  techs: TechSchema[];
};
