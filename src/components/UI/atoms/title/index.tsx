import React from "react";

type props = {
  children: string;
};

export const Title = ({ children }: props) => {
  return (
    <p className="text-black xl:text-[40px] text-2xl lg:text-[40px] mx-6 font-bold">
      {children}
    </p>
  );
};
