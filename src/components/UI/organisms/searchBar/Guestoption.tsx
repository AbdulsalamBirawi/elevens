import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

type guestOptionprops = {
  title: string;
  guestType: string;
  counterStart: number;
  counterEnd: number;
  setCounterValue: any;
};

const Guestoption = ({
  guestType,
  title,
  counterStart,
  counterEnd,
  setCounterValue,
}: guestOptionprops) => {
  const [counter, setCounter] = useState(counterStart);
  const rangeLimit = counterEnd;
  const increaseCounter = () => {
    if (counter < rangeLimit) {
      setCounter(counter + 1);
      setCounterValue(counter);
    }
  };

  const decreaseCounter = () => {
    if (counter > counterStart) {
      setCounter(counter - 1);
      setCounterValue(counter);
    }
  };
  console.log(counter);

  return (
    <div className="flex w-full  justify-between p-2 ">
      <div className="w-full">
        <h1 className="text-black text-base mb-1 font-semibold">{title}</h1>
        <h1 className="text-black text-sm font-light">{guestType}</h1>
      </div>
      <div className="flex items-center w-full gap-3">
        <button
          className="flex justify-center cursor-pointer w-full  hover:border-black text-gray-300 text-base hover:text-black "
          onClick={decreaseCounter}
        >
          <AiOutlineMinusCircle className="text-3xl" />
        </button>
        <p className="text-base text-black font-medium mx-2">{counter}</p>
        <button
          className=" flex justify-center cursor-pointer  w-full  text-gray-300 text-base hover:text-black "
          onClick={increaseCounter}
        >
          <AiOutlinePlusCircle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};
export default Guestoption;
