import { useRouter } from "next/router.js";
import Button from "../components/button";
import ProjectCard from "./project-card";
import { ProjectSchema, TechSchema } from "@/lib/content.js";

export default function Projects({ projects, techs }: ProjectsProps) {
  const router = useRouter();

  return (
    <section id="projects-section" className="max-w-screen-lg mx-auto px-12 py-20">
      <div className="relative md:w-fit mb-12 md:mb-20">
        <h1 className="text-4xl md:text-8xl text-secondary/40 md:text-secondary/30">
          EXPERIENCES
        </h1>
        <p className="text-sm md:text-lg text-right md:absolute md:right-3 md:bottom-3 text-slate-200/90">
          Amazing things that I have done
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8">
        {projects.map((p, i) => (
          <ProjectCard project={p} techs={techs} even={i % 2 == 0} key={p.id} />
        ))}
      </div>
      <div className="flex justify-center mt-6 md:mt-8">
        <Button variant="ghost" onClick={() => router.push("/projects")}>
          View All Projects
        </Button>
      </div>
    </section>
  );
}

type ProjectsProps = {
  projects: ProjectSchema[];
  techs: TechSchema[];
};
