import Image from "next/image.js"

export default function SkillTag({ variant, icon, text }) {
    if (variant == "primary")
        return (
            <div className="p-4 flex flex-1 flex-col md:flex-row items-center gap-5 border-2">
                <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt={text}
                />
                <p className="text-center">
                    {text}
                </p>
            </div>
        )

    if (variant == "secondary")
        return (
            <div className="p-4 flex flex-1 flex-col md:flex-row items-center gap-3 border-2">
                <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt={text}
                />
                <p className="text-center">
                    {text}
                </p>
            </div>
        )

    if (variant == "tertiary")
        return (
            <div className="p-4 flex flex-1 flex-col md:flex-row items-center gap-5 border-2">
                <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt={text}
                />
            </div>
        )
}