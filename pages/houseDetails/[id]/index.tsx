/* eslint-disable react-hooks/rules-of-hooks */
import Image1 from "../../../src/assets/1.jpg";
import Image2 from "../../../src/assets/3.jpg";
import Image3 from "../../../src/assets/4.jpg";
import Image4 from "../../../src/assets/5.jpg";
import Image5 from "../../../src/assets/6.jpg";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import GridGallary from "../../../src/components/UI/molecules/GridGallary";
import GridImage from "../../../src/components/UI/atoms/GridImage";
import "react-image-gallery/styles/css/image-gallery.css";
import ImagesGallery from "../../../src/components/UI/molecules/ImagesGallery";
import HouseDescription from "../../../src/components/UI/molecules/HouseDescription";
import HouseFeatures from "../../../src/components/UI/molecules/HouseFeatures";
import HousePlan from "../../../src/components/UI/molecules/HousePlan";
import HouseForm from "../../../src/components/UI/molecules/HouseForm";
import GridVideos from "../../../src/components/UI/molecules/GridVideos";
import VideosGallery from "../../../src/components/UI/molecules/VideosGallery";
import imageHost from "../../../src/assets/Unframed Icon-01.png";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  ContactInfo,
  Footer,
  GallerySection,
  Navbar,
} from "../../../src/components/UI/organisms";
import { Container, Title } from "../../../src/components/UI/atoms";
import Image from "next/image";

const index = () => {
  const [startIndex, setStartIndex] = useState(2);
  const [showGallary, setShowGallary] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1600);
  const handelStartIndex = (e: number) => {
    setStartIndex(e);
  };

  const handelshowGallary = (e: boolean) => {
    setShowGallary(e);
  };

  const handelshowVideos = (e: boolean) => {
    setShowVideos(e);
  };

  const imageGalleryRef = useRef(null);

  const playVideo = () => {
    imageGalleryRef?.current.play(true);
  };

  const renderVideo = (item) => {
    return (
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="480px"
          src={item.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="ex"
        />
      </div>
    );
  };

  const images = [
    {
      original: Image1.src,
      thumbnail: Image1.src,
    },
    {
      original: Image2.src,
      thumbnail: Image2.src,
    },
    {
      original: Image3.src,
      thumbnail: Image3.src,
    },
    {
      original: Image4.src,
      thumbnail: Image4.src,
    },
    {
      original: Image5.src,
      thumbnail: Image5.src,
    },
    {
      original: Image5.src,
      thumbnail: Image5.src,
    },
  ];

  const videos = [
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: Image1.src,
      thumbnail: Image1.src,
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: Image2.src,
      thumbnail: Image2.src,
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: Image3.src,
      thumbnail: Image3.src,
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: Image4.src,
      thumbnail: Image4.src,
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: Image5.src,
      thumbnail: Image5.src,
      renderItem: renderVideo.bind(this),
    },
  ];

  const originalImages = images.map((img) => img.original);
  const originalVidoes = videos.map((img) => img.original);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="" style={{ fontFamily: "NeulisAlt-Regular" }}>
      <Navbar solid />
      <Container>
        <div className="h-20" />
        <div className=" py-7 ">
          <Title>GALLARY</Title>
        </div>

        <GridGallary
          windowWidth={windowWidth}
          showGallare={handelshowGallary}
          images={originalImages}
          handelStartIndex={handelStartIndex}
        />
        <div className=" flex flex-col lg:flex-row  justify-start items-start gap-7">
          <HouseForm />
          <div className=" w-[100%] lg:w-[70%] xl:w-[100%]">
            <HouseDescription />
            <div className="w-full border-b-2 border-gray-200 py-5 items-center flex justify-start ">
              <div className="rounded-full w-14 h-14 p-2 bg-slate-200">
                <Image src={imageHost} alt="sd" />
              </div>
              <div className="mx-2 ">
                <p className="text-base font-semibold text-black">
                  Hosted by Elevens
                </p>
                <p className="text-sm text-gray-300 font-light">New Host</p>
              </div>
            </div>
            <p className="text-lg py-5 border-b-2 border-gray-200">
              Welcome to ELEVENS, Maadi’s premier residence building, where
              sophisticated living meets modern design. Nestled in the heart of
              Maadi, one of Cairo’s most sought-after neighborhoods, ELEVENS
              stands tall as a beacon of modern luxury and elegance.
            </p>
            <HouseFeatures />
            {/* <HousePlan /> */}
          </div>
        </div>
        <div className="   ">
          <GridVideos
            showVideos={handelshowVideos}
            handelStartIndex={handelStartIndex}
            videos={originalVidoes}
          />
        </div>
        {showGallary && (
          <ImagesGallery
            setShowGallary={handelshowGallary}
            startIndex={startIndex}
            images={images}
          />
        )}
        {showVideos && (
          <VideosGallery
            setShowVideos={handelshowVideos}
            playVideo={playVideo}
            imageGalleryRef={imageGalleryRef}
            startIndex={startIndex}
            videos={videos}
          />
        )}
      </Container>

      <GallerySection houseDetails={true} />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default index;
