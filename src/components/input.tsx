import clsx from "clsx";

function Input({ type, ...rest }: InputProps) {
  const className = "py-1 px-2 rounded text-black";
  if (type == "textarea") return <textarea className={className} {...rest} />;
  else return <input className={className} {...rest} />;
}

type InputProps = { type: string };

export default Input;
