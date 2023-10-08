import React from "react";
import ContactImage from "../../../../assets/conatctInfo.jpg";
import Image from "next/image";
import { Button, Container, Input, Logo, TextArea } from "../../atoms";
import { ContactUsInfo, SocialLinks } from "../../molecules";
import icon from "../../../../assets/Framed Icon-01.png";
export const ContactInfo = () => {
  return (
    <div className=" mt-14 min-h-screen  relative  bg-cover bg-center">
      <Image
        src={ContactImage.src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="absolute  inset-0   bg-black  z-0 opacity-50 "></div>
      <Container>
        <div className="relative lg:flex block z-10 xl:flex justify-between">
          <div className=" mt-[120px]">
            <div className="mb-10">
              <h2 className="text-white text-center text-2xl font-bold">
                Contact Information
              </h2>
              <p className="text-white text-base text-center font-normal">
                If you find your dream home connect with us
              </p>
            </div>
            <div className="w-40 m-auto xl:m-0 lg:m-0  flex   ">
              <Image src={icon} alt="icon" />
            </div>
            <div className="flex mt-5 justify-center lg:justify-start xl:justify-start ">
              <ContactUsInfo />
            </div>
            <div className=" flex flex-col items-center  lg:items-start xl:items-start">
              <p className=" mb-3 text-base text-white font-semibold">
                Social media
              </p>
              <SocialLinks />
            </div>
          </div>
          <div className=" relative pb-20  lg:w-1/2 xl:w-1/2 w-full mt-[83px]  p-10">
            <div className="absolute inset-0    bg-black  z-0 opacity-50 "></div>
            <form className="relative">
              <div className=" xl:flex lg:flex block gap-8">
                <div className=" w-full">
                  <Input
                    label="FIRST NAME"
                    inputProps={{ placeholder: "first name" }}
                  />
                  <Input
                    label="LAST NAME"
                    inputProps={{ placeholder: "first name" }}
                  />
                </div>
                <div className="w-full">
                  <Input
                    label="EMAIL ADDRESS"
                    inputProps={{ placeholder: "first name" }}
                  />
                  <Input
                    label="PHONE NUMBER"
                    inputProps={{ placeholder: "first name" }}
                  />
                </div>
              </div>
              <TextArea placeholder="MESSAGE" />

              <div className="absolute  xl:left-[30%] lg:lef-[30%] left-[25%]   w-52 ">
                <Button color="green" fill>
                  send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
