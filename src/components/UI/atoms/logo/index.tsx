/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";
import LogoDark from "../../../../assets/logoDark.svg";
import LogoLight from "../../../../assets/logoLight.svg";
import Image from "next/image";
type props = {
  dark: boolean;
};
export const Logo = ({ dark }: props) => {
  return (
    <div className="">
      <Link href={"./"}>
        <div className="w-full  h-full">
          <Image
            className=""
            width={700}
            height={700}
            alt="logo"
            src={dark ? LogoDark : LogoLight}
          />
        </div>
      </Link>
    </div>
  );
};
