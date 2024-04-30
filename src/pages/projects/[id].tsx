import Contact from "@/components/contact";
import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";
import Image from "next/image.js";

export default function ProjectPage() {
    return (
        <Layout>
            <div>
                <Image
                />
                <div>tags</div>
                <h3>title</h3>
                <p>content</p>
                <div>
                    <p>Tech Stack</p>
                    <div>stacks</div>
                </div>

            </div>
            <div>
                <h4>More Projects</h4>
                <div>
                    <ProjectCard
                        title="Forex Trading Dashboard"
                        content="Personalized forex trading dashboard, with charts, price action and fundamental analysis, and direct connection to brokerage."
                        tags={["Website", "Full-stack", "Dashboard"]}
                        stacks={["JavaScript", "React", "Node.js", "MongoDB"]}
                        image="/images/cover.jpg"
                    />
                </div>
            </div>
            <Contact />
        </Layout>
    )
}