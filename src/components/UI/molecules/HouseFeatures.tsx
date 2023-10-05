import React from "react";

const HouseFeatures = () => {
  const a = [
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
  ];

  return (
    <div className=" py-6   border-b-2 border-gray-200">
      <h2 className="text-3xl font-bold mb-10">Property Features</h2>

      <ul className="flex flex-wrap gap-10 text-lg">
        {a.map((e, idx) => {
          return (
            <li
              key={idx}
              className=" basis-1/3 sm:basis-1/4 lg:basis-1/3 xl:basis-1/4"
            >
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HouseFeatures;
