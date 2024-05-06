import clsx from "clsx";

export default function Tag({ variant = "md", text }: TagProps) {
  return (
    <div
      className={clsx(
        "border rounded-full",
        variant == "sm" && "text-xs py-1 px-2",
        variant == "md" && "text-sm py-1 px-2"
      )}
    >
      <p>{text}</p>
    </div>
  );
}

type TagProps = {
  text: string;
  variant?: "sm" | "md";
};
