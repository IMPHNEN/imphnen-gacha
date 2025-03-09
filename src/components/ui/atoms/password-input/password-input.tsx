import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactElement, useState } from "react";
import { cn } from "@/libs/tailwind-merge/cn";
import { Button } from "../button";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { InputGroup } from "../input-group";

type TPasswordInputType = "password";
type TPasswordInputSize = "sm" | "md" | "lg";

type TPasswordInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "type"
> & {
  type?: TPasswordInputType;
  size?: TPasswordInputSize;
  error?: string;
};

const sizeClasses: Record<TPasswordInputSize, string> = {
  sm: "text-[10px] max-h-[28px]",
  md: "text-[12px] max-h-[30px]",
  lg: "text-[15px] max-h-[34px]",
};

const disabledClass = "opacity-50 hover:border-neutral-200 cursor-not-allowed";
const errorClass = "border-danger-500 hover:border-danger-500 focus:outline-danger-500";

export const PasswordInput: FC<TPasswordInputProps> = ({
  size = "md",
  placeholder = "Placeholder",
  disabled,
  error,
  className,
  ...rest
}): ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const mergedClassName = cn(
    "pl-[12px] py-[8px] text-neutral-800 placeholder:text-neutral-300 border border-neutral-200 hover:border-blue-300 focus:outline-1 focus:outline-blue-500 rounded-md font-bai-jamjuree",
    sizeClasses[size],
    disabled && disabledClass,
    error && errorClass,
    className,
  );

  return (
    <>
      <InputGroup className={mergedClassName}>
        <input
          className="focus:outline-0"
          type={showPassword ? "text" : "password"}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
        />
        <Button
          variant="text"
          size={size}
          onClick={togglePasswordVisibility}
          className="max-h-[28px]"
        >
          {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </Button>
      </InputGroup>
      {error && <p className="text-danger-500 text-xs mt-1">{error}</p>}
    </>
  );
};
