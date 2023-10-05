import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";

export const ContactUsInfo = () => {
  return (
    <div className=" mb-14 flex flex-col gap-y-5">
      <div className="text-white items-center text-base font-normal flex gap-5">
        <BiSolidPhoneCall className="text-2xl" />
        <p className="">+20 44 555 666</p>
      </div>
      <div className="text-white items-center text-base font-normal flex gap-5">
        <MdEmail className="text-2xl" />
        <p className="">demo@gmail.com</p>
      </div>
      <div className="text-white items-center text-base font-normal flex gap-5">
        <MdLocationOn className="text-2xl" />
        <p className="">Maadi, Cairo</p>
      </div>
    </div>
  );
};
