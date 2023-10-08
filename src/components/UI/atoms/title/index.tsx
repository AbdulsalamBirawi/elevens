import React from "react";

type props = {
  children: string;
};

export const Title = ({ children }: props) => {
  return (
    <p className="title text-black xl:text-[40px] text-2xl lg:text-[40px] my-5 font-bold">
      {children}
    </p>
  );
};
