import { TechSchema } from "@/lib/content.js";
import SkillTag from "./skill-tag";

export default function Expertise({ expertises, techs }: ExpertiseProps) {
  const renderTags = (exps: string[], techs: TechSchema[], variant: string) =>
    exps.map((e) => {
      const tech = techs.find((t) => t.name == e);
      return (
        <SkillTag
          variant={variant}
          text={tech?.name ?? e}
          icon={`/logo/${tech?.logoFileName ?? "default.svg"}`}
          key={e}
        />
      );
    });

  return (
    <div className="p-10">
      <div className="relative w-fit">
        <h1 className="text-5xl font-bold text-primary-main/50">EXPERTISE</h1>
        <h5 className="absolute right-0 bottom-0">My area of proficiency</h5>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-6 gap-5 mt-5">
          {renderTags(expertises[0], techs, "primary")}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-9 gap-3 mt-5">
          {renderTags(expertises[1], techs, "secondary")}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-9 gap-5 mt-5">
          {renderTags(expertises[2], techs, "tertiary")}
        </div>

        <p>... and many more coming in!</p>
      </div>
    </div>
  );
}

type ExpertiseProps = {
  expertises: string[][];
  techs: TechSchema[];
};
