import Image from "next/image.js";
import Tag from "../components/tag";
import Button from "../components/button";
import clsx from "clsx";
import { useRouter } from "next/router.js";
import { ProjectSchema, TechSchema } from "@/lib/content.js";
import Link from "next/link";

export default function ProjectCard({
  project,
  techs,
  even,
}: ProjectCardProps) {
  const router = useRouter();
  return (
    <div
      className={clsx(
        "rounded bg-slate-800 flex flex-col md:min-h-80",
        even ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div className="relative w-full basis-2/5 min-h-40">
        <Image
          src={project.images[0]}
          fill
          style={{ objectFit: "cover" }}
          alt={"cover"}
        />
      </div>
      <div className="flex flex-col p-6 gap-2 basis-3/5">
        <h4 className="text-xl md:text-2xl font-bold">{project.title}</h4>
        {/* <div className="flex flex-row flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag variant="sm" text={tag} key={tag} />
          ))}
        </div> */}
        <p className="flex-1">{project.shortDesc}</p>
        <div className="flex flex-row flex-wrap gap-2">
          {project.techs.map((projectTech) => {
            let tech = techs.find((t) => t.name == projectTech);
            return (
              <Tag
                variant="sm"
                text={tech?.name ?? projectTech}
                key={tech?.name ?? projectTech}
              />
            );
          })}
        </div>
        <div className="flex flex-row justify-center md:justify-end mt-2">
          <Button
            variant="text"
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            View Details
          </Button>
          {project.links &&
            (project.links.length > 1 ? (
              <Link href={`/projects/${project.id}/links`}>
                <Button variant="primary">Visit</Button>
              </Link>
            ) : (
              <Link href={project.links[0].link}>
                <Button variant="primary">{project.links[0].label}</Button>
              </Link>
            ))}
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
