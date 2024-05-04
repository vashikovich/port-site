import Image from "next/image.js";
import Tag from "../components/tag";
import Button from "../components/button";
import clsx from "clsx";
import { useRouter } from "next/router.js";
import { ProjectSchema, TechSchema } from "@/lib/content.js";

export default function ProjectCard({
  project,
  techs,
  even,
}: ProjectCardProps) {
  const router = useRouter();
  return (
    <div
      className={clsx(
        "rounded bg-slate-800 flex flex-col",
        even ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div className="relative w-full h-36">
        <Image src={"/images/cover-bg.jpg"} fill alt={"cover"} />
      </div>
      <div className="flex flex-col p-6 gap-2">
        <h4 className="text-xl md:text-2xl font-bold">{project.title}</h4>
        <div className="flex flex-row flex-wrap">
          {project.tags.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>
        <p>{project.shortDesc}</p>
        <div className="flex flex-row flex-wrap">
          {project.techs.map((projectTech) => {
            let tech = techs.find((t) => t.name == projectTech);
            return (
              <Tag
                text={tech?.name ?? projectTech}
                key={tech?.name ?? projectTech}
              />
            );
          })}
        </div>
        <div className="flex flex-row justify-between">
          <Button onClick={() => router.push(`/projects/${project.id}`)}>
            Visit Site
          </Button>
          <Button>View Details</Button>
        </div>
      </div>
    </div>
  );
}

type ProjectCardProps = {
  project: ProjectSchema;
  techs: TechSchema[];
  even?: boolean;
};
