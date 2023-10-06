import React, { ButtonHTMLAttributes } from "react";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  fill: boolean;
  color: string;
};

export const Button = ({
  children,
  className,
  fill,
  color,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`w-full text-base h-[49px] font-normal ${
        fill == true
          ? "bg-[#495843] text-white border-2 border-[#495843] hover:bg-transparent hover:text-[#495843]"
          : color == "white"
          ? "bg-transparent  border-2 border-white text-white hover:text-white hover:bg-[#495843]"
          : "bg-transparent  border-2 border-[#495843] text-[#495843] hover:text-white hover:bg-[#495843]"
      } transition duration-200`}
    >
      <p className="mx-[38px]">{children?.toString().toUpperCase()}</p>
    </button>
  );
};
