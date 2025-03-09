import { FC, ReactNode } from "react";
import { cn } from "@/libs/tailwind-merge/cn";

type TInputGroupProps = {
  children: ReactNode;
  className?: string;
};

export const InputGroup: FC<TInputGroupProps> = ({ children, className }) => {
  return (
    <div className={cn("inline-flex items-center border border-neutral-200 rounded-md", className)}>
      {children}
    </div>
  );
};
