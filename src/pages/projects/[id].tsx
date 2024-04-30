import Contact from "@/components/contact";
import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";
import { getProjects } from "@/lib/content";
import Image from "next/image";

export async function getStaticProps({ params }) {
    const projects = await getProjects()
    const project = projects.find(p => p["ID"] == params.id)
    return {
        props: {
            project
        }
    }
}

export async function getStaticPaths() {
    const ids = (await getProjects()).map(p => p["ID"])
    return {
        paths: ids.map(id => ({
            params: {
                id
            }
        })),
        fallback: false
    }
}

export default function ProjectPage({ project }) {
    return (
        <Layout>
            <div>
                <Image
                />
                <div>tags</div>
                <h3>{project["Title"]}</h3>
                <p>{project["Short Desc"]}</p>
                <div>
                    <p>Tech Stack</p>
                    <div>stacks</div>
                </div>

            </div>
            {/* <div>
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
            </div> */}
            <Contact />
        </Layout>
    )
}