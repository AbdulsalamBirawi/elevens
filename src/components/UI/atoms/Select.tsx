import React from "react";
import SS from "react-select";

type values = {
  values: any[];
  placeholder: string;
};

const Select = ({ values, placeholder }: values) => {
  // const ss = [
  //   { value: "any", label: "Any" },
  //   { value: "chocolate", label: "Alzamalek" },
  //   { value: "strawberry", label: "maadi" },
  //   { value: "vanilla", label: "new cairo" },
  //   { value: "vanilla", label: "5th" },
  // ];

  return (
    <div className=" relative  w-full ">
      <SS
        placeholder={placeholder}
        options={values}
        hideSelectedOptions
        styles={{
          indicatorSeparator: () => {},
          control: (base, state) => ({
            ...base,
            boxShadow: state.isFocused ? 0 : 0,
            paddingBottom: "4px",
            paddingTop: "4px",
            borderColor: state.isFocused ? "#79A379" : "#ededed",

            borderWidth: "0px 0px 2px 0px",
            borderRadius: "0",
            "&:hover": {
              borderColor: state.isFocused ? "#79A379" : "#ededed",
            },
          }),
          option: (base, state) => ({
            ...base,
            "&:hover": {
              backgroundColor: state.isFocused ? "#79A379" : "#ededed",
              color: state.isFocused ? "white" : "black",
            },
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "none",
            primary: "#D1BB90",
          },
        })}
      />
    </div>
  );
};

export default Select;
