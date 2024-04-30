import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";

export default function ProjectList() {
    return (
        <Layout>
            <div className="flex flex-col gap-5 p-10">
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
                />
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
                />
            </div>
        </Layout>
    )
}