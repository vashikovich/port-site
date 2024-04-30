import ServiceCard from "./service-card";

export default function Services({ content }) {
    return (
        <div className="p-10">
            <div className="relative w-fit">
                <h1 className="text-5xl font-bold text-primary-main/50">
                    SERVICES
                </h1>
                <h5 className="absolute right-0 bottom-0">
                    What I can provide
                </h5>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
                {content.map(c => (
                    <ServiceCard
                        title={c["Title"]}
                        content={c["Content"]}
                        key={c["Title"]}
                    />
                ))}
            </div>
        </div>
    )
}