import Image from "next/image.js";
import Tag from "./tag";
import Button from "./button";
import clsx from "clsx";

export default function ProjectCard({ title, content, tags, stacks, image, even }) {
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
                    {stacks.map(stack => (
                        <Tag
                            text={stack}
                            key={stack}
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-between">
                    <Button>
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