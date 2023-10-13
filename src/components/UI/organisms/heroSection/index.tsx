import React from "react";
import HeroImage from "../../../../assets/TEXTURE-02.png";
import Image from "next/image";
import { Button, TitleDesign } from "../../atoms";
import Icon from "../../../../assets/LOGO-02.png";
import { useRouter } from "next/router";
import vector from "../../../../assets/ILLUSTRATION-02.png";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <div
      className="   relative h-screen  bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="h-20" />
      <Image
        src={HeroImage.src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />

      {/* <div className="absolute inset-0 bg-black  opacity-60 "></div> */}
      <div className="relative flex flex-col items-center justify-center z-10 p-8 lg:mt-36 xl:mt-36 mt-28 ">
        <div className="xl:w-[500px] lg:w-[500px] w-full  mb-5">
          <Image src={Icon} alt="icon" />
        </div>
        <div className=" absolute w-96 z-0     -top-0 opacity-70 -right-0">
          <Image src={vector} alt="..." />
        </div>
        <div className=" absolute w-80  z-0 -bottom-36  rotate-45 xl:block lg:block hidden opacity-70 -left-10">
          <Image src={vector} alt="..." />
        </div>
        {/* <h1 className=" mb-8 text-white lg:text-5xl xl:text-5xl text-3xl  font-semibold">
          WELCOME TO ELEVENS
        </h1>
        <h1 className="text-white mb-8 xl:text-2xl lg:text-2xl text-lg font-normal">
          Elevate Your Living Experience
        </h1> */}

        {/* <div className="">
          <Button
            onClick={() => router.push("#aboutUs")}
            color="white"
            fill={false}
          >
            discover Properties
          </Button>
        </div> */}
      </div>
    </div>
  );
};
