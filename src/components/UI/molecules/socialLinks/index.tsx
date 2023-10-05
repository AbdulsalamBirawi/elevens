import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const SocialLinks = () => {
  return (
    <div className="flex gap-7">
      <Link href={"facebook"}>
        <BsFacebook className="text-white text-2xl" />
      </Link>
      <Link href={"facebook"}>
        <BsTwitter className="text-white text-2xl" />
      </Link>
      <Link href={"facebook"}>
        <BsInstagram className="text-white text-2xl" />
      </Link>
      <Link href={"facebook"}>
        <BsLinkedin className="text-white text-2xl" />
      </Link>
    </div>
  );
};
