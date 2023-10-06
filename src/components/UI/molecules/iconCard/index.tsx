import React from "react";
type props = {
  icon: any;
  text: string;
};

export const IconCard = ({ icon, text }: props) => {
  return (
    <div className="flex flex-col w-40  items-center justify-start">
      <div className="bg-[#F5F5F5] mb-3 p-1 text-secondary flex items-center justify-center w-24 h-24  text-5xl rounded-full">
        {icon}
      </div>
      <p className="text-black text-lg text-center font-medium">
        {text.toUpperCase()}
      </p>
    </div>
  );
};
