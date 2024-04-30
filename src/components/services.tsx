import ServiceCard from "./service-card";

export default function Services() {
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
                <ServiceCard
                    title="Responsive Website"
                    content="Your website should appear as beautifully in desktop as in mobile, especially when it is the primary way for your customers to interact with your business, and I can definitely make that happen!"
                />
                <ServiceCard
                    title="Mobile Application"
                    content="An application on your customers' mobile phone keep them close to your business -- it's just one tap away! Creating it for both your Android-bearing and Apple-headed customers is one of my specialties."
                />
                <ServiceCard
                    title="Full-stack Development"
                    content="Back-end, front-end, data scraping, cloud, databases, I can help you with those and everything else in between, whether it's for building your next great app or for maintaining your existing business driver."
                />
            </div>
        </div>
    )
}