import SkillTag from "./skill-tag";

export default function Expertise({ tier1, tier2, tier3 }) {
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
                    {tier1.map(t1 => (
                        <SkillTag
                            variant="primary"
                            text={t1["Name"]}
                            icon={`/logo/${t1["Logo"]}`}
                            key={t1["Name"]}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-9 gap-3 mt-5">
                {tier2.map(t2 => (
                        <SkillTag
                            variant="secondary"
                            text={t2["Name"]}
                            icon={`/logo/${t2["Logo"]}`}
                            key={t2["Name"]}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-9 gap-5 mt-5">
                {tier3.map(t3 => (
                        <SkillTag
                            variant="tertiary"
                            text={t3["Name"]}
                            icon={`/logo/${t3["Logo"]}`}
                            key={t3["Name"]}
                        />
                    ))}
                </div>

                <p>
                    ... and many more coming in!
                </p>

            </div>
        </div>
    )
}