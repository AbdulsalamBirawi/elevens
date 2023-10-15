import React, { ButtonHTMLAttributes } from "react";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  fill: boolean;

  hover?: boolean;
};

export const Button = ({
  children,
  className,
  fill,

  hover,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={`w-full text-sm h-[49px] font-normal ${
        fill
          ? "bg-primery text-white border-2 border-primery hover:bg-transparent hover:text-primery transition duration-200"
          : hover
          ? "btn my-5"
          : "bg-transparent  border-2 border-primery text-primery hover:text-white hover:bg-primery transition duration-200"
      }`}
    >
      <p className="mx-[38px]">{children?.toString().toUpperCase()}</p>
    </button>
  );
};

// className={`w-full text-base h-[49px] font-normal ${
//   fill == true
//     ? "bg-primery text-white border-2 border-primery hover:bg-transparent hover:text-primery"
//     : hover == true
//     ? "btn"
//     : "bg-transparent  border-2 border-primery text-primery hover:text-white hover:bg-primery"
// } transition duration-200 `}
