import clsx from "clsx";
import { ChangeEventHandler } from "react";

function Input({ type, ...rest }: InputProps) {
  const className = "py-1 px-2 rounded text-black";
  if (type == "textarea")
    return (
      <textarea
        className={className}
        {...(rest as React.ComponentProps<"textarea">)}
      />
    );
  else
    return (
      <input
        className={className}
        {...(rest as React.ComponentProps<"input">)}
      />
    );
}

type InputProps = (
  | React.ComponentProps<"input">
  | React.ComponentProps<"textarea">
) & {
  type: string;
  onChange: ChangeEventHandler;
};

export default Input;
