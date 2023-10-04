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
      className={`w-full h-[49px] font-normal ${
        fill == true
          ? "bg-primery text-white border-2 border-primery hover:bg-transparent hover:text-primery"
          : color == "white"
          ? "bg-transparent  border-2 border-white text-white hover:text-white hover:bg-primery"
          : "bg-transparent  border-2 border-primery text-primery hover:text-white hover:bg-primery"
      } transition duration-200`}
    >
      <p className="mx-[38px]">{children?.toString().toUpperCase()}</p>
    </button>
  );
};
