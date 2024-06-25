import Button from "@/components/button";
import { ProjectSchema, getProjects } from "@/lib/content";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = await getProjects();
  const id = (params as IParams).id;
  const project = projects.find((p) => p.id == id) ?? null;
  return {
    props: {
      project,
    },
    revalidate: 600,
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

export default function ProjectLinks({ project }: { project: ProjectSchema }) {
  if (!project || !project.links) return null;

  return (
    <div className="flex flex-col items-center mt-20 gap-5">
      <h1 className="text-2xl text-center mb-10">{project.title}</h1>
      {project.links.map((l) => (
        <Button
          key={l.link}
          onClick={() => window.open(l.link)}
          variant="ghost"
        >
          {l.label}
        </Button>
      ))}
    </div>
  );
}
