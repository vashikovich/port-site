export default function ServiceCard({ title, content }) {
    return (
        <div className="flex flex-col justify-center p-10 gap-5 border-2">
            <h3 className="text-center text-xl font-bold">{title}</h3>
            <p className="text-center">{content}</p>
        </div>
    )
}