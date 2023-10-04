import React from "react";

type props = {
  children: string;
};

export const Description = ({ children }: props) => {
  return <p className=" text-gray1 text-base font-normal">{children}</p>;
};
