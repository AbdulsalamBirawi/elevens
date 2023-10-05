import React, { InputHTMLAttributes, ReactHTMLElement } from "react";

type props = {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  disable?: boolean;
};

export const Input = ({ inputProps, label, disable }: props) => {
  return (
    <label
      className={`relative text-white block my-4  px-3 pt-3 overflow-hidden  border border-white shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white${
        disable ? ` bg-gray-200` : ``
      }`}
    >
      <input
        {...inputProps}
        defaultValue={inputProps.value ?? ""}
        className={`peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent  focus:outline-none focus:ring-0 sm:text-sm `}
      />

      <span
        className={`absolute start-3 top-3 -translate-y-1/2 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs `}
      >
        {label}
      </span>
    </label>
  );
};
