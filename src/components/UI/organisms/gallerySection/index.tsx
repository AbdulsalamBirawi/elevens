import React from "react";
import { Button, Container, Title } from "../../atoms";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Zoom } from "swiper/modules";
import Victor from "../../../../assets/victor2.svg";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import { cards } from "./data";
import { GalleryCard } from "../../molecules";
import { useSwiper } from "swiper/react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <button
      className="p-3 border border-gray-400 text-gray-400 hover:border-primery hover:text-primery hover:scale-125 rounded-full transition duration-200"
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};

const SwiperButtonPrev = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <button
      className="p-3 border border-gray-400 text-gray-400 hover:border-primery hover:text-primery hover:scale-125 rounded-full transition duration-200"
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};

export const GallerySection = ({ houseDetails = false }) => {
  return (
    <div className="relative">
      <Image
        alt="victor"
        className="absolute -mt-24 z-0 top-60 right-0 w-[500px]"
        src={Victor}
      />
      {houseDetails ? (
        <Container>
          <div className="m-auto my-10">
            <Title>PROPERTY GALLERY</Title>
          </div>
        </Container>
      ) : (
        <div className="m-auto my-10 text-center">
          <Title>PROPERTY GALLERY</Title>
        </div>
      )}

      <Container>
        <Swiper
          loop={true}
          autoplay
          spaceBetween={60}
          style={{ padding: "30px" }}
          modules={[Autoplay, Zoom]}
          zoom={true}
          breakpoints={{
            // when window width is >= 576px
            576: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
          }}
          className="w-full  h-full"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <Link href={"/houseDetails/1"}>
                <GalleryCard
                  cost={card.cost}
                  images={card.images}
                  link={card.link}
                  room={card.room}
                  title={card.title}
                  type={card.type}
                  id={idx}
                />
              </Link>
            </SwiperSlide>
          ))}

          <div className=" flex xl:justify-end p-5 lg:justify-end justify-center my-5 gap-5 ">
            <SwiperButtonPrev>
              <MdArrowBackIosNew />
            </SwiperButtonPrev>
            <SwiperButtonNext>
              <MdArrowForwardIos />
            </SwiperButtonNext>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};
