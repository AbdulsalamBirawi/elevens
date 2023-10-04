import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export const Container = ({ children }: props) => {
  return <div className=" px-5 xl:px-[140px]">{children}</div>;
};
