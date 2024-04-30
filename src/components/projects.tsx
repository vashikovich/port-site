import Button from "./button";
import ProjectCard from "./project-card";

export default function Projects() {
    return (
        <div className="p-10 space-y-5">
            <div className="relative w-fit">
                <h1 className="text-5xl font-bold text-primary-main/50">
                    EXPERIENCES
                </h1>
                <h5 className="absolute right-0 bottom-0">
                    Amazing things that I have done
                </h5>
            </div>
            <div className="flex flex-col gap-5">
                <ProjectCard
                    title="Forex Trading Dashboard"
                    content="Personalized forex trading dashboard, with charts, price action and fundamental analysis, and direct connection to brokerage."
                    tags={["Website", "Full-stack", "Dashboard"]}
                    stacks={["JavaScript", "React", "Node.js", "MongoDB"]}
                    image="/images/cover.jpg"
                />
                <ProjectCard
                    title="Forex Trading Dashboard"
                    content="Personalized forex trading dashboard, with charts, price action and fundamental analysis, and direct connection to brokerage."
                    tags={["Website", "Full-stack", "Dashboard"]}
                    stacks={["JavaScript", "React", "Node.js", "MongoDB"]}
                    image="/images/cover.jpg"
                    even
                />
                <ProjectCard
                    title="Forex Trading Dashboard"
                    content="Personalized forex trading dashboard, with charts, price action and fundamental analysis, and direct connection to brokerage."
                    tags={["Website", "Full-stack", "Dashboard"]}
                    stacks={["JavaScript", "React", "Node.js", "MongoDB"]}
                    image="/images/cover.jpg"
                />
            </div>
            <div className="flex justify-center">
                <Button>View All Projects</Button>
            </div>
        </div>
    )
}