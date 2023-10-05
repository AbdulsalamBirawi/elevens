import React from "react";
import { Container, Logo } from "../../atoms";
import { ContactUsInfo, SocialLinks } from "../../molecules";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 ">
      <Container>
        <div className="lg:flex xl:flex  block gap-32 ">
          <div className="w-full flex flex-col lg:items-start items-center xl:items-start xl:w-1/3 lg:w-1/3">
            <div className="w-52 flex   mb-5 items-center ">
              <Logo dark={false} />
            </div>
            <p className="text-white text-center xl:text-start lg:text-start font-semibold mb-10 text-base">
              Welcome to ELEVENS, Maadi’s premier residence building, where
              sophisticated living meets modern design. Nestled in the heart of
              Maadi, one of Cairo’s most sought-after neighborhoods, ELEVENS
              stands tall as a beacon of modern luxury and elegance.
            </p>
          </div>
          <div className="flex flex-col  items-center">
            <h3 className="text-white text-2xl font-semibold mb-5">
              Contact Us
            </h3>
            <ContactUsInfo />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white text-2xl font-semibold mb-5">Follow Us</p>
            <SocialLinks />
          </div>
        </div>
      </Container>
      <div className="  w-full mb-3 h-[1px] bg-white mt-5" />
      <div className=" flex justify-center items-center ">
        <p className=" text-xs text-gray4 font-normal">
          © 2023 Dandelion | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
