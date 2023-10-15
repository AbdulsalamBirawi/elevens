import React from "react";
import ContactImage from "../../../../assets/contactUs.jpg";
import Image from "next/image";
import { Button, Container, Input, Logo, TextArea } from "../../atoms";
import { ContactUsInfo, SocialLinks } from "../../molecules";
import icon from "../../../../assets/Framed Icon-01.png";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { contactUsInfo } from "../../../../../lib/services/types";
import { useCreateContactUsInfoMutation } from "../../../../../lib/services/backendApi";
export const ContactInfo = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<contactUsInfo>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      phone: "",
    },
  });

  const [createContactUs] = useCreateContactUsInfoMutation();

  const onSubmit: SubmitHandler<contactUsInfo> = (data) => {
    console.log(data);
    createContactUs(data);
  };

  return (
    <div
      id="contactUs"
      className=" mt-14 min-h-screen  relative  bg-cover bg-center"
    >
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
          <div className=" mt-[140px] w-1/2">
            <div className="w-full flex flex-col lg:items-start items-center xl:items-start px-10">
              <div className="w- flex   mb-5 items-center ">
                <Logo dark={false} />
              </div>
              <p className="text-white w-full text-center xl:text-start lg:text-start font-light mb-10 text-base">
                Welcome to ELEVENS, Maadi’s premier residence building, where
                sophisticated living meets modern design. Nestled in the heart
                of Maadi, one of Cairo’s most sought-after neighborhoods,
                ELEVENS stands tall as a beacon of modern luxury and elegance.
              </p>
            </div>
            {/* <div className="mb-10">
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
            </div> */}
          </div>
          <div className=" relative pb-20  lg:w-1/2 xl:w-1/2 w-full mt-[83px]  p-10">
            <div className="absolute inset-0    bg-black  z-0 opacity-50 "></div>
            <form onSubmit={handleSubmit(onSubmit)} className="relative">
              <div className=" xl:flex lg:flex block gap-8">
                <div className=" w-full">
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        label="FIRST NAME"
                        inputProps={{ ...field, placeholder: "first name" }}
                      />
                    )}
                  />
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        label="LAST NAME"
                        inputProps={{ ...field, placeholder: "first name" }}
                      />
                    )}
                  />
                </div>
                <div className="w-full">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        label="EMAIL ADDRESS"
                        inputProps={{ ...field, placeholder: "first name" }}
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Input
                        label="PHONE NUMBER"
                        inputProps={{ ...field, placeholder: "first name" }}
                      />
                    )}
                  />
                </div>
              </div>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextArea {...field} placeholder="MESSAGE" />
                )}
              />
              <div className="absolute  xl:left-[30%] lg:lef-[30%] left-[25%]   w-52 ">
                <Button type="submit" color="green" fill>
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
