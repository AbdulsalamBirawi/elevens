import React, { ReactNode } from "react";
import { Navbar } from "../../UI/organisms";

type props = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
