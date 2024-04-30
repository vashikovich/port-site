import Image from "next/image.js";
import Tag from "./tag";
import Button from "./button";
import clsx from "clsx";
import { useRouter } from "next/router.js";

export default function ProjectCard({ id, title, content, tags, techs, image, even }) {
    const router = useRouter()
    return (
        <div className={clsx(
            "border flex flex-col  p-6 gap-5",
            even ? "md:flex-row" : "md:flex-row-reverse",
        )}>
            <div>
                <Image
                    src={image}
                    width={100}
                    height={100}
                    alt={title}
                />
            </div>
            <div>
                <h4 className="text-lg font-bold">{title}</h4>
                <div className="flex flex-row">
                    {tags.map(tag => (
                        <Tag
                            text={tag}
                            key={tag}
                        />
                    ))}
                </div>
                <p>{content}</p>
                <div className="flex flex-row">
                    {techs.map(tech => (
                        <Tag
                            text={tech["Name"]}
                            key={tech["Name"]}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-between">
                    <Button onClick={() => router.push(`/projects/${id}`)}>
                        Visit Site
                    </Button>
                    <Button>
                        View Details
                    </Button>
                </div>
            </div>
        </div>
    )
}