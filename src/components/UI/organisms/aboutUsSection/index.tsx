import React from "react";
import Victor from "../../../../assets/Vector.svg";
import Image from "next/image";
import {
  Button,
  Container,
  Description,
  Title,
  TitleDesign,
} from "../../atoms";
import AboutUsImage from "../../../../assets/aboutusimage.png";
import ImageTop from "../../../../assets/imageTop.svg";
import ImageBottom from "../../../../assets/aboutus22.jpg";
import { useRouter } from "next/router";
import Image2 from "../../../../assets/Background-01-01.png";
export const AboutUsSection = () => {
  const router = useRouter();
  return (
    <Container>
      <div id="aboutUs" className="relative  ">
        <div className=" lg:flex xl:flex block    w-full mt-24 z-20 h-full">
          <div className=" xl:w-1/2 lg:w-1/2 w-full   h-full">
            <div className=" z-20 mt-5 mr-5">
              <Title>welcome to elevens</Title>
              <Description>
                Welcome to ELEVENS, Maadi’s premier residence building, where
                sophisticated living meets modern design. Nestled in the heart
                of Maadi, one of Cairo’s most sought-after neighborhoods,
                ELEVENS stands tall as a beacon of modern luxury and elegance.
              </Description>
            </div>

            <div className=" mt-5 mr-5">
              <Description>
                Step inot a world of refined living as you enter ELEVENS, where
                sleek lines and modern finished greet you with a warm embrace.
                Our commitment to impeccable design ensures that every corner
                reflects the essence of modern living, creating an environment
                that is both inviting and inspiring.
              </Description>
            </div>
            <div className=" z-20 my-5 w-64">
              {/* <Button
                onClick={() => router.push("/allProperties")}
                fill={false}
                color="green"
              >
                LEARN MORE
              </Button> */}
            </div>
          </div>
          <div className="xl:w-1/2 lg:w-1/2 z-20  w-full m-auto flex relative  h-full">
            <Image
              src={ImageBottom}
              className=" hidden xl:absolute lg:absolute -bottom-10 -left-10 "
              alt="a"
            />

            <Image
              objectFit="cover"
              className="w-full  p-5 xl:p-0 lg:p-0  h-full"
              src={ImageBottom.src}
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
    </Container>
  );
};
