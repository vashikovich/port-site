import { HomeSchema } from "@/lib/content.js";
import ServiceCard from "./service-card";

export default function Services({ content }: { content: HomeSchema[] }) {
  return (
    <section id="services-section" className="max-w-screen-lg mx-auto px-12 py-20">
      <div className="relative md:w-fit mb-12 md:mb-20">
        <h1 className="text-secondary/40 md:text-secondary/30">SERVICES</h1>
        <p className="text-sm md:text-lg text-right md:absolute md:right-3 md:bottom-3 text-slate-200/90">
          What I can provide
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {content.map((c) => (
          <ServiceCard title={c.title} content={c.content} key={c.title} />
        ))}
      </div>
    </section>
  );
}
