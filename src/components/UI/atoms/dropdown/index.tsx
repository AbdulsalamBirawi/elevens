import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type props = {
  placeholder: string;
  options: any[];
};

export const Dropdown = ({ options, placeholder }: props) => {
  const [click, setClick] = useState(false);
  console.log(click);

  return (
    <div className="relative min-w-[150px]">
      <div
        onClick={() => setClick(!click)}
        className="bg-white cursor-pointer items-center w-full  border-b-2 border-gray-200 flex justify-between  text-gray-500 text-base pb-3 pt-2 "
      >
        <p>{placeholder}</p>
        <MdKeyboardArrowDown className=" hover:text-gray-200 text-gray-300 text-2xl" />
      </div>
      <div
        className={`${
          click == false ? "hidden" : "block"
        } origin-top-right border-2 border-gray-200 z-20 p-3 absolute -right-3 mt-2  bg-white`}
      >
        {options.map((option, idx) => (
          <div className="bg-white min-w-[300px] my-2" key={idx}>
            {option}
          </div>
        ))}
        <p
          className="mr-auto cursor-pointer text-base text-gray-400"
          onClick={() => setClick(false)}
        >
          close
        </p>
      </div>
    </div>
  );
};
