import React from "react";
import { FaWifi } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BiSolidWasher } from "react-icons/bi";
const HouseFeatures = () => {
  const a = [
    {
      title: "Wi fi",
      icon: FaWifi,
    },
    {
      title: "Garden ",
      icon: FaLeaf,
    },
    {
      title: "TV",
      icon: HiOutlineComputerDesktop,
    },
    {
      title: "Washer",
      icon: BiSolidWasher,
    },
  ];

  return (
    <div className=" py-6   border-b-2 border-gray-200">
      <h2 className="text-2xl font-bold mb-10">What this place offers</h2>

      <ul className="flex  w-72 flex-wrap gap-x-10    text-lg">
        {a.map((e) => {
          return (
            <li
              key={e.title}
              className=" py-3    flex flex-row gap-3 items-center"
            >
              <e.icon />
              {e.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HouseFeatures;
