import React from "react";

export const TextArea = (props: React.HTMLProps<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className=" relative block mb-5 overflow-hidden  placeholder:text-white p-2  border border-white text-white bg-transparent   focus-within:border-white focus-within:ring-1 focus-within:ring-white
      w-full h-60  resize-none "
    />
  );
};
