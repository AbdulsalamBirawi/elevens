import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Button } from "../../atoms";
import { useRouter } from "next/router";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type props = {
  images: any[];
  title: string;
  type: string;
  cost: number;
  room: string;
  link: string;
  id: any;
};

export const GalleryCard = ({
  cost,
  images,
  link,
  room,

  title,
  type,
  id,
}: props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col relative   w-full lg:max-w-sm  bg-white items-start justify-center">
      <Swiper
        style={{ height: "400px" }}
        modules={[Pagination, Navigation]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay
        navigation={{
          prevEl: `.custom-swiper-button-prev-${id}`,
          nextEl: `.custom-swiper-button-next-${id}`,
        }}
        className="w-full h-60"
      >
        {images.map((image, idx) => (
          <div key={idx} className="relative w-full h-full">
            <SwiperSlide className=" z-10 absolute  h-full" key={idx}>
              <Image
                width={900}
                height={900}
                src={image.src}
                alt=" "
                className=" absolute h-full   object-cover"
              />
              <div className="relative opacity-0 hover:opacity-100 transition duration-150 w-full h-full ">
                <div
                  className={` cursor-pointer   absolute top-[45%]  text-primery p-2 rounded-full m-2 bg-white custom-swiper-button-prev-${id}`}
                >
                  <FaArrowLeft />
                </div>
                <div
                  className={` cursor-pointer absolute right-0 top-[45%] text-primery p-2 rounded-full m-2 bg-white custom-swiper-button-next-${id}`}
                >
                  <FaArrowRight />
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      <div className="absolute  w-full  bottom-[259px] ">
        <div className="w-full h-[170px]  opacity-70 absolute  bg-gradient-to-t from-black  z-10  " />
        <div className="  z-30 w-full p-2  top-10  absolute ">
          <h2 className=" text-white font-normal text-base mt-2">{title}</h2>
          <h2 className=" text-white font-normal text-base ">{type}</h2>
          <div className="flex items-center mb-3 w-full justify-between">
            <h2 className="text-secondary font-semibold text-base">
              $ {cost.toString()}
            </h2>
            <div className="bg-white   px-5 p-2">
              <h4 className=" text-base font-normal text-tertiary">
                <span className="text-black ml-2 font-normal text-base">
                  {room}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <Button fill={false} hover={true} onClick={() => router.push(link)}>
        view details
      </Button>
    </div>
  );
};
