import Image from "next/image.js";
import Tag from "./tag";
import Button from "./button";
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
        "border flex flex-col  p-6 gap-5",
        even ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div>
        {/* <Image src={image} width={100} height={100} alt={title} /> */}
      </div>
      <div>
        <h4 className="text-lg font-bold">{project.title}</h4>
        <div className="flex flex-row">
          {project.allTags.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>
        <p>{project.shortDesc}</p>
        <div className="flex flex-row">
          {project.allTechs.map((projectTech) => {
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
