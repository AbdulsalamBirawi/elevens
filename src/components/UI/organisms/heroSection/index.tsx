import React from "react";
import HeroImage from "../../../../assets/hero.jpg";
import Image from "next/image";
import { Button, TitleDesign } from "../../atoms";
import Icon from "../../../../assets/Framed Icon-02.png";
import { useRouter } from "next/router";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <div
      className="   relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="h-20" />
      <Image
        src={HeroImage.src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute inset-0 bg-black  opacity-60 "></div>
      <div className="relative flex flex-col items-center justify-center z-10 p-8 lg:mt-36 xl:mt-36 mt-28 ">
        <div className="w-40 h-40 mb-5">
          <Image src={Icon} alt="icon" />
        </div>
        <h1 className=" mb-8 text-white lg:text-5xl xl:text-5xl text-3xl  font-semibold">
          WELCOME TO ELEVENS
        </h1>
        <h1 className="text-white mb-8 xl:text-2xl lg:text-2xl text-lg font-normal">
          Elevate Your Living Experience
        </h1>

        <div className="w-">
          <Button
            onClick={() => router.push("/allProperties")}
            color="white"
            fill={false}
          >
            discover Properties
          </Button>
        </div>
      </div>
    </div>
  );
};
