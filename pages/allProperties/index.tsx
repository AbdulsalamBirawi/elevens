/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Button, Container, Title } from "../../src/components/UI/atoms";

import SearchBar from "../../src/components/UI/organisms/searchBar/index";
import { GalleryCard } from "../../src/components/UI/molecules";

import Image from "../../src/assets/aboutusimage.png";
import { Pagination } from "../../src/components/UI/molecules/pagination";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ContactInfo, Footer, Navbar } from "../../src/components/UI/organisms";
const index = () => {
  const [page, setPage] = useState();
  const cards = [
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
    {
      cost: 500,
      images: [Image, Image, Image, Image],
      link: "/aboutus",
      room: "Living Area",
      size: 700,
      title: "No.Floor:Ground,ID:2",
      type: "PentHouse",
    },
  ];

  return (
    <div className="mt-32" style={{fontFamily:'NeulisAlt-Regular'}}>
      <Navbar solid />
      <Container>
        <Title>Search</Title>
        <SearchBar />
        <div className="flex flex-row items-center justify-center flex-wrap gap-2 basis-1/3">
          {cards.map((card, idx) => {
            return (
              <div key={idx} className="w-1/4">
                <GalleryCard
                  cost={card.cost}
                  images={card.images}
                  link={card.link}
                  room={card.room}
                  size={card.size}
                  title={card.title}
                  type={card.type}
                />
              </div>
            );
          })}
        </div>
        <div className="text-center my-8 ">
          <Pagination count={18} countPerPage={9} setCurrentPage={setPage} />
        </div>
      </Container>
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default index;