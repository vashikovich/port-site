import clsx from "clsx";

function Button({
  children,
  fullWidth = false,
  variant = "primary",
  size = "md",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `flex w-fit justify-center rounded`,
        fullWidth && "w-full",
        variant == "primary" && "bg-primary hover:bg-secondary",
        variant == "secondary" && "bg-secondary hover:bg-primary",
        variant == "text" && "bg-transparent hover:text-secondary",
        variant == "ghost" && "bg-transparent border-2 hover:bg-primary",
        size == "sm" && "text-sm py-1 px-4 min-w-16",
        size == "md" && "py-2 px-6 min-w-24"
      )}
      {...rest}
    >
      <p className="font-bold">{children}</p>
    </button>
  );
}

type ButtonProps = {
  children: string;
  fullWidth?: boolean;
  variant: "primary" | "secondary" | "text" | "ghost";
  size: "sm" | "md";
};

export default Button;
