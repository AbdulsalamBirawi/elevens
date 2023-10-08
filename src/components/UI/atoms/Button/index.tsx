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
          ? "bg-primeryLight text-white border-2 border-primeryLight hover:bg-transparent hover:text-primeryLight"
          : color == "white"
          ? "bg-transparent  border-2 border-white text-white hover:text-white hover:bg-primeryLight"
          : "bg-transparent  border-2 border-primeryLight text-primeryLight hover:text-white hover:bg-primeryLight"
      } transition duration-200`}
    >
      <p className="mx-[38px]">{children?.toString().toUpperCase()}</p>
    </button>
  );
};
