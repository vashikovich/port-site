export default function ServiceCard({ title, content }: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-center p-10 gap-8 bg-slate-800 rounded-lg">
      <h3 className="text-center text-xl font-bold">{title}</h3>
      <p className="text-center">{content}</p>
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  content: string;
};
