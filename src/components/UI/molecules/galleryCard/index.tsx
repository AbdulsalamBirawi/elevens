import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import Image from "next/image";
import { Button } from "../../atoms";
import { useRouter } from "next/router";
import { Navigation } from "swiper/modules";

type props = {
  images: any[];
  title: string;
  type: string;
  cost: number;
  room: string;
  link: string;
};

export const GalleryCard = ({
  cost,
  images,
  link,
  room,

  title,
  type,
}: props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full lg:max-w-sm  bg-white items-start justify-center p-3">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop={true} // Add this line to enable infinite looping
        pagination={{ clickable: true }}
        autoplay
        navigation
        className="w-full h-60"
      >
        {images.map((image, idx) => (
          <SwiperSlide className=" h-full" key={idx}>
            <Image
              width={900}
              height={900}
              src={image.src}
              alt=" "
              className="h-full  object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className=" text-black font-normal text-2xl my-3">{title}</h2>
      <h2 className=" text-tertiary font-normal text-base mb-3">{type}</h2>
      <div className="flex items-center mb-3 w-full justify-between">
        <h2 className="text-secondary font-semibold text-[32px]">
          $ {cost.toString()}
        </h2>
        <div className="bg-[#F5F5F5]    p-2">
          <h4 className=" text-base font-normal text-tertiary">
            <span className="text-black ml-2 font-normal text-base">
              {room}
            </span>
          </h4>
        </div>
      </div>
      <Button fill color="green" onClick={() => router.push(link)}>
        rent now
      </Button>
    </div>
  );
};
