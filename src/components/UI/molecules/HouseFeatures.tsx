import React from "react";
import { FaWifi } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
const HouseFeatures = () => {
  const a = [
    {
      title: "Wi fi",
      icon: FaWifi,
    },
    {
      title: "Garden View",
      icon: FaLeaf,
    },
    {
      title: "Wi fi",
      icon: FaWifi,
    },
    {
      title: "Garden View",
      icon: FaLeaf,
    },
    {
      title: "Wi fi",
      icon: FaWifi,
    },
    {
      title: "Garden View",
      icon: FaLeaf,
    },
    {
      title: "Wi fi",
      icon: FaWifi,
    },
    {
      title: "Garden View",
      icon: FaLeaf,
    },
    {
      title: "Wi fi",
      icon: FaWifi,
    },
    {
      title: "Garden View",
      icon: FaLeaf,
    },
    {
      title: "Wi fi",
      icon: FaWifi,
    },
    {
      title: "Garden View",
      icon: FaLeaf,
    },
    {
      title: "Wi fi",
      icon: FaWifi,
    },
    {
      title: "Garden View",
      icon: FaLeaf,
    },
  ];

  return (
    <div className=" py-6   border-b-2 border-gray-200">
      <h2 className="text-3xl font-bold mb-10">Property Features</h2>

      <ul className="flex flex-wrap gap-5  text-lg">
        {a.map((e) => {
          return (
            <li
              key={e.title}
              className=" py-3 basis-1/3 sm:basis-1/4 lg:basis-1/3 xl:basis-1/4 flex flex-row gap-3 items-center"
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
