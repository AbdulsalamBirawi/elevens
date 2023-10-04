import React from "react";
import Victor from "../../../../assets/Vector.svg";
import Image from "next/image";
import { Button, Description, TitleDesign } from "../../atoms";
import AboutUsImage from "../../../../assets/aboutusimage.png";
import ImageTop from "../../../../assets/imageTop.svg";
import ImageBottom from "../../../../assets/imageBottom.svg";

export const AboutUsSection = () => {
  return (
    <div className="relative ">
      <Image
        alt="victor"
        className="absolute -mt-24 z-0 top-0 right-0"
        src={Victor}
      />
      <div className=" lg:flex xl:flex block  xl:pr-[140px] lg:pr-[140px] pr-0     w-full mt-24 z-20 h-full">
        <div className=" xl:w-1/2 lg:w-1/2 w-full   h-full">
          <TitleDesign>About Us</TitleDesign>
          <div className="lg:ml-[140px] xl:ml-[140px] ml-5 mt-5 mr-5">
            <Description>
              Welcome to ELEVENS, Maadi’s premier residence building, where
              sophisticated living meets modern design. Nestled in the heart of
              Maadi, one of Cairo’s most sought-after neighborhoods, ELEVENS
              stands tall as a beacon of modern luxury and elegance.
            </Description>
          </div>

          <div className="lg:ml-[140px] xl:ml-[140px] ml-5 mt-5 mr-5">
            <Description>
              Step inot a world of refined living as you enter ELEVENS, where
              sleek lines and modern finished greet you with a warm embrace. Our
              commitment to impeccable design ensures that every corner reflects
              the essence of modern living, creating an environment that is both
              inviting and inspiring.
            </Description>
          </div>
          <div className="lg:ml-[140px] xl:ml-[140px] ml-5 my-10 w-64">
            <Button fill={false} color="green">
              LEARN MORE
            </Button>
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-1/2 w-full m-auto flex relative  h-full">
          <Image
            src={ImageBottom}
            className=" hidden xl:absolute lg:absolute -bottom-10 -left-10 "
            alt="a"
          />

          <Image
            objectFit="cover"
            className="w-full  p-5 xl:p-0 lg:p-0  h-full"
            src={AboutUsImage.src}
            width={700}
            height={700}
            alt="about us"
          />
          <Image
            src={ImageTop}
            className=" hidden xl:absolute  lg:absolute -top-10 -right-10"
            alt="a"
          />
        </div>
      </div>
    </div>
  );
};
