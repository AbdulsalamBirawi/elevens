import React, { useState } from "react";
import RangeSlider from "../../molecules/RangeSlider";
import Select from "../../atoms/Select";
import { Button, Container, Dropdown } from "../../atoms";
import { guests, select1, select2 } from "./data";
import Guestoption from "./Guestoption";
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
const SearchBar = () => {
  const [guestsNumber, setguestsNumber] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  console.log(guestsNumber);

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
  return (
    <div className="lg:mx-16 ">
      {/* <RangeSlider rtl={undefined} /> */}
      <div className="  flex flex-col md:flex-row gap-5     items-center my-10 ">
        <div className=" z-10 flex flex-row gap-3  w-full items-center justify-center ">
          <div className=" flex flex-col gap-3 md:flex-row w-full">
            <Select placeholder="location" values={select1} />
            <Select placeholder="type" values={select2} />
          </div>

          <div className=" flex gap-5 flex-col md:flex-row w-full">
            <Dropdown options={guestsArray} placeholder="guests" />
            <div className="w-[290px]">
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
          </div>
        </div>

        <Button className="" fill color="primery" style={{ width: "200px" }}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
