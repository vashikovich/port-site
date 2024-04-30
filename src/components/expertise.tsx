import SkillTag from "./skill-tag";

export default function Expertise() {
    return (
        <div className="p-10">
            <div className="relative w-fit">
                <h1 className="text-5xl font-bold text-primary-main/50">
                    EXPERTISE
                </h1>
                <h5 className="absolute right-0 bottom-0">
                    My area of proficiency
                </h5>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-6 gap-5 mt-5">
                    <SkillTag
                        variant="primary"
                        text="JavaScript"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="primary"
                        text="Node.js"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="primary"
                        text="TypeScript"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="primary"
                        text="React"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="primary"
                        text="C#"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="primary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-9 gap-3 mt-5">
                    <SkillTag
                        variant="secondary"
                        text="JavaScript"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="secondary"
                        text="Node.js"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="secondary"
                        text="TypeScript"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="secondary"
                        text="React"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="secondary"
                        text="C#"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="secondary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="secondary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="secondary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="secondary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-9 gap-5 mt-5">
                    <SkillTag
                        variant="tertiary"
                        text="JavaScript"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="tertiary"
                        text="Node.js"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="tertiary"
                        text="TypeScript"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="tertiary"
                        text="React"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="tertiary"
                        text="C#"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="tertiary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="tertiary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="tertiary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                    <SkillTag
                        variant="tertiary"
                        text="React Native"
                        icon="/logo/javascript.svg"
                    />
                </div>

                <p>
                    ... and many more coming in!
                </p>

            </div>
        </div>
    )
}