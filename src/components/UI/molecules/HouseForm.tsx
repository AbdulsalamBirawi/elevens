import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import icon from "../../../assets/Framed Icon-01.png";
import { Button, Dropdown } from "../atoms";
import Guestoption from "../organisms/searchBar/Guestoption";
import { guests } from "../organisms/searchBar/data";
import { DateRangePicker } from "react-dates";
const HouseForm = () => {
  type FormData = {
    fullName: string;
    email: string;
    phoneNumber: string;
    message?: string;
  };
  const [guestsNumber, setguestsNumber] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const handleGuestsNumber = (value: number) => {
    setguestsNumber(value);
  };
  const guestsArray = guests.map((guest, idx) => (
    <Guestoption
      key={idx}
      title={guest.title}
      counterEnd={guest.counterEnd}
      counterStart={guest.counterStart}
      guestType={guest.guestType}
      setCounterValue={handleGuestsNumber}
    />
  ));

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("aa");
  };
  return (
    <div className="border-2 p-8 border-primeryLight my-5 w-[100%] m-auto sm:w-[75%] lg:w-[50%]">
      <div className="flex flex-col  justify-center items-center gap-5">
        <div className="w-40 flex items-center h-full">
          <Image src={icon} alt="icon" />
        </div>

        <p className="text-xl  mb-5">Add dates for prices</p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex justify-center">
          <DateRangePicker
            startDate={startDate}
            startDateId="your_unique_start_date_id"
            endDate={endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={handleDatesChange}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
          />
        </div>
        <div className="px-6">
          <Dropdown options={guestsArray} placeholder="guests" />
        </div>
        <div className="px-5">
          <Button color="green" fill>
            reserve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HouseForm;
