import React, { ReactNode } from "react";
import { Footer, Navbar } from "../../UI/organisms";

type props = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: props) => {
  return <div>{children}</div>;
};
