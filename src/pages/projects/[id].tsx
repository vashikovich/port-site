import Contact from "@/ui/contact";
import Layout from "@/components/layout";
import ProjectCard from "@/ui/project-card";
import { ProjectSchema, getProjects } from "@/lib/content";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = await getProjects();
  const id = (params as IParams).id;
  const project = projects.find((p) => p.id == id);
  return {
    props: {
      project,
    },
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
    fallback: false,
  };
};

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <Layout>
      <div>
        {/* <Image /> */}
        <div>tags</div>
        <h3>{project.title}</h3>
        <p>{project.longDesc}</p>
        <div>
          <p>Tech Stack</p>
          <div>stacks</div>
        </div>
      </div>
      {/* <div>
                <h4>More Projects</h4>
                <div>
                    <ProjectCard
                        title="Forex Trading Dashboard"
                        content="Personalized forex trading dashboard, with charts, price action and fundamental analysis, and direct connection to brokerage."
                        tags={["Website", "Full-stack", "Dashboard"]}
                        stacks={["JavaScript", "React", "Node.js", "MongoDB"]}
                        image="/images/cover.jpg"
                    />
                </div>
            </div> */}
      <Contact />
    </Layout>
  );
}

type ProjectPageProps = {
  project: ProjectSchema;
};
