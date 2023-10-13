import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const SocialLinks = () => {
  return (
    <div className=" flex gap-7">
      <Link href={"facebook"}>
        <BsFacebook className=" transition duration-75  hover:duration-300 iconSocial  text-white text-2xl" />
      </Link>
      <Link href={"facebook"}>
        <BsTwitter className=" transition duration-75  hover:duration-300 iconSocial text-white text-2xl" />
      </Link>
      <Link href={"facebook"}>
        <BsInstagram className="  transition duration-75  hover:duration-300 iconSocial  text-white text-2xl" />
      </Link>
      <Link href={"facebook"}>
        <BsLinkedin className="transition duration-75  hover:duration-300 iconSocial text-white text-2xl" />
      </Link>
    </div>
  );
};
