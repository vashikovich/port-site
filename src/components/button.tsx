import clsx from "clsx";

function Button({ children, fullWidth = false, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        `flex w-fit justify-center py-3 px-6 min-w-24 bg-primary rounded`,
        fullWidth && "w-full"
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
};

export default Button;
