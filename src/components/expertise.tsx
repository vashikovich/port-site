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
    <section className="bg-slate-900">
      <div className="max-w-screen-lg mx-auto p-12 bg-slate-900">
        <div className="relative md:w-fit">
          <h1 className="text-secondary/40 md:text-secondary/30">EXPERTISE</h1>
          <p className="text-sm md:text-lg text-right md:absolute md:right-3 md:bottom-3 text-slate-200/90">
            My area of proficiency
          </p>
        </div>
        <div className="flex flex-col mt-6 md:mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {renderTags(expertises[0], techs, "primary")}
          </div>

          <div className="grid grid-cols-3 md:grid-cols-9 gap-3 mt-5">
            {renderTags(expertises[1], techs, "secondary")}
          </div>

          <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mt-5">
            {renderTags(expertises[2], techs, "tertiary")}
          </div>
        </div>
      </div>
    </section>
  );
}

type ExpertiseProps = {
  expertises: string[][];
  techs: TechSchema[];
};
