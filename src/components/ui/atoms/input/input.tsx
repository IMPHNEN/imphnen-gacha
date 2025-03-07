import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactElement } from "react";
import { cn } from "@/libs/tailwind-merge/cn";

type TInputSize = "sm" | "md" | "lg";

type TInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  size?: TInputSize;
};

const sizeClasses: Record<TInputSize, string> = {
  sm: "text-[10px] max-h-[28px]",
  md: "text-[12px] max-h-[30px]",
  lg: "text-[15px] max-h-[34px]",
};

const disabledClass = "";

export const Input: FC<TInputProps> = ({
  size = "md",
  type,
  disabled,
  className,
  ...rest
}): ReactElement => {
  const mergedClassName = cn(
    "px-[12px] py-[8px] text-neutral-300 border border-neutral-200 rounded-md font-bai-jamjuree",
    sizeClasses[size as TInputSize],
    disabled && disabledClass,
    className,
  );

  return <input className={mergedClassName} type={type} disabled={disabled} {...rest} />;
};
