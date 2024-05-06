import Image from "next/image";

export default function ServiceCard({
  title,
  content,
  imageUrl,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center p-10 gap-8 bg-slate-800 rounded-lg">
      <Image src={imageUrl} width={100} height={100} alt={title} />
      <h3 className="text-center text-xl font-bold text-secondary">{title}</h3>
      <p className="text-center">{content}</p>
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  content: string;
  imageUrl: string;
};
