/* eslint-disable react-hooks/rules-of-hooks */
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
import {
  ContactInfo,
  Footer,
  GallerySection,
  Navbar,
} from "../../../src/components/UI/organisms";
import { Container, Title } from "../../../src/components/UI/atoms";

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
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
  ];

  const videos = [
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/1000/600/",
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/1000/600/",
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/1000/600/",
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/1000/600/",
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/1000/600/",
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
          <div className=" w-[100%] lg:w-[70%] xl:w-[100%]">
            <HouseDescription />
            <HouseFeatures />
            <HousePlan />
          </div>

          <HouseForm />
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
