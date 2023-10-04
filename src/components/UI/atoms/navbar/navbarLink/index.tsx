import Link from "next/link";
import React from "react";

type props = {
  text: string;
  link: string;
  activeIdx?: number;
  id?: number;
  textColor: string;
};

export const NavbarLink = ({ link, text, activeIdx, id, textColor }: props) => {
  return (
    <div
      className={`${
        activeIdx == id ? "group  text-secondary" : "group  "
      } ${textColor} flex items-center cursor-pointer hover:text-secondary transition duration-200 text-base font-normal`}
    >
      <Link href={link}>{text}</Link>
    </div>
  );
};
