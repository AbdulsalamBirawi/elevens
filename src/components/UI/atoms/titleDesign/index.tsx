import React from "react";
import { FaPlay } from "react-icons/fa6";
import { Title } from "../title";

type props = {
  children: string;
};

export const TitleDesign = ({ children }: props) => {
  return (
    <div className="w-full flex ">
      <div className="flex justify-end items-center w-full  ">
        <div className="w-1/3  flex items-center">
          <div className="h-[2px] bg-secondary  w-full " />
          <FaPlay className="text-secondary -ml-1 text-2xl rotate-180" />
        </div>
        <div className="w-full flex justify-center">
          <Title>{children}</Title>
        </div>
      </div>
      <div className="flex items-center w-2/3 ">
        <FaPlay className="text-secondary -mr-1 text-2xl " />
        <div className="h-[2px] bg-secondary w-full" />
      </div>
    </div>
  );
};
