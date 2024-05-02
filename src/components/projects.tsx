import { useRouter } from "next/router.js";
import Button from "./button";
import ProjectCard from "./project-card";

export default function Projects({ projects }) {
  const router = useRouter();
  return (
    <div className="p-10 space-y-5">
      <div className="relative w-fit">
        <h1 className="text-5xl font-bold text-primary-main/50">EXPERIENCES</h1>
        <h5 className="absolute right-0 bottom-0">
          Amazing things that I have done
        </h5>
      </div>
      <div className="flex flex-col gap-5">
        {projects.map((p, i) => (
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
      <div className="flex justify-center">
        <Button onClick={() => router.push("/projects")}>
          View All Projects
        </Button>
      </div>
    </div>
  );
}
