import clsx from "clsx";
import Image from "next/image.js";

export default function SkillTag({ variant, icon, text }: SkillTagProps) {
  const defaultClass =
    "flex flex-1 gap-5 bg-slate-950 rounded";

  if (variant == "primary")
    return (
      <div className={clsx(defaultClass, "flex-col md:flex-row justify-center md:justify-start items-center p-6")}>
        <Image src={icon} width={40} height={40} alt={text} />
        <p className="md:text-xl font-bold text-center md:text-left">{text}</p>
      </div>
    );

  if (variant == "secondary")
    return (
      <div className={clsx(defaultClass, "justify-center items-center p-6")}>
        <Image src={icon} width={40} height={40} alt={text} />
        {/* <p className="text-xs">{text}</p> */}
      </div>
    );

  if (variant == "tertiary")
    return (
      <div className={clsx(defaultClass, "justify-center items-center p-3 md:p-5")}>
        <Image src={icon} width={20} height={20} alt={text} />
      </div>
    );
}

type SkillTagProps = {
  variant: string;
  icon: string;
  text: string;
};
