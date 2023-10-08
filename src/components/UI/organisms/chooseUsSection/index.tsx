import Image from "next/image";
import React from "react";
import { Container, Title, TitleDesign } from "../../atoms";
import ChooseUsImage from "../../../../assets/choose-ussvg.svg";
import ImageTop from "../../../../assets/imageTop.svg";

import { FaMoneyBill1, FaMobileScreenButton } from "react-icons/fa6";
import { PiCubeFocusBold } from "react-icons/pi";
import { IconCard } from "../../molecules";
import { SlBadge } from "react-icons/sl";
import { BiCheckShield } from "react-icons/bi";
import { MdOutlineDiamond } from "react-icons/md";

const cards = [
  { icon: <FaMoneyBill1 />, text: "best price" },
  { icon: <FaMobileScreenButton />, text: "online booking" },
  { icon: <PiCubeFocusBold />, text: "Virtual Tour & Site" },
  { icon: <SlBadge />, text: "High Quality" },
  { icon: <BiCheckShield />, text: "Extra Security" },
  { icon: <MdOutlineDiamond />, text: "Extra Security" },
];

export const ChooseUsSection = () => {
  return (
    <Container>
      <div className="relative ">
        <div className=" lg:flex xl:flex block        w-full mt-24 z-20 h-full">
          <div className="xl:w-1/3 lg:w-1/3 w-full m-auto flex relative  h-full">
            <Image
              objectFit="cover"
              className="w-full m-auto  p-5 xl:p-0 lg:p-0  h-[500px]"
              src={ChooseUsImage.src}
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
          <div className=" xl:w-2/3 lg:w-2/3 w-full   h-full">
            <div className=" m-10 ">
              <div className="mb-10">
                <Title>WHY CHOOSE US</Title>
              </div>
              <div className="  flex flex-wrap     gap-y-14 lg:justify-start xl:justify-start justify-center gap-x-24 ">
                {cards.map((card, idx) => (
                  <IconCard icon={card.icon} text={card.text} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
