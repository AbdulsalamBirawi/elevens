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
    <div className="flex flex-col  hover:border-2 border-primeryLight hover:scale-110 transition  duration-500 w-full lg:max-w-sm  bg-white items-start justify-center p-3">
      <Swiper
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
          <SwiperSlide className=" h-full" key={idx}>
            <Image
              width={900}
              height={900}
              src={image.src}
              alt=" "
              className=" absolute h-full   object-cover"
            />
            <div className="relative opacity-0 hover:opacity-100 transition duration-150 w-full h-full ">
              <div
                className={`   absolute top-[45%]  text-primery p-2 rounded-full m-2 bg-white custom-swiper-button-prev-${id}`}
              >
                <FaArrowLeft />
              </div>
              <div
                className={` absolute right-0 top-[45%] text-primery p-2 rounded-full m-2 bg-white custom-swiper-button-next-${id}`}
              >
                <FaArrowRight />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className=" text-black font-normal text-lg my-3">{title}</h2>
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
