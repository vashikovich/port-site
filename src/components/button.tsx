import clsx from "clsx";

function Button({ children, variant, color, size, ...rest }) {
  return (
    <button
      className={clsx(`flex w-fit justify-center bg-${color} p-3`)}
      {...rest}
    >
      <p className="font-bold">{children}</p>
    </button>
  );
}

export default Button;
