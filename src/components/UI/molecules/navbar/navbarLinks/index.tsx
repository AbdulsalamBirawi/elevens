import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { links } from "./links";
import { Button, Container, Logo, NavbarLink } from "../../../atoms";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

type props = {
  textColor: string;
  sectionId: string;
};

export const NavbarLinks = ({ textColor, sectionId }: props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const path = router.asPath.split("?")[0];
    const activeIdx = links.findIndex((e) => {
      return e.link === path;
    });
    setActiveIdx(activeIdx);
  }, [router.asPath]);
  return (
    <div>
      <Container>
        <div className="flex  justify-between">
          <div className="flex items-center  gap-x-5">
            <div className="w-32 flex items-center h-full">
              <Logo dark={true} />
            </div>

            <div className="hidden lg:flex xl:flex gap-x-5">
              {links.map((itm, idx) => (
                <NavbarLink
                  key={idx}
                  link={itm.link}
                  text={itm.text}
                  activeIdx={activeIdx}
                  textColor={textColor}
                  id={idx}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="hidden lg:block xl:block">
              <Button
                fill={false}
                color={""}
                onClick={() => scrollToSection(sectionId)}
              >
                contact us
              </Button>
            </div>
            <button
              className="lg:hidden xl:hidden ml-auto  text-primery  transition duration-500 text-xl "
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </Container>
      <div className="h-full">
        <ul
          className={`text-center block h-[100vh] ${menuOpen ? "w-80 " : "w-0"}
           right-0 
           transition-width duration-500  absolute top-0    bg-white  z-30`}
        >
          <div className="flex mx-5 text-primery   justify-between items-center m-3">
            <p className="text-base text-secondary font-semibold">Menu</p>

            <AiOutlineClose
              className="text-secondary"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          {links.map((link, id) => (
            <li
              key={id}
              className={`transition  px-5  text-start block text-primery   group delay-150 hover:bg-primary  duration-300 text-sm  pt-2  py-3 text-dark    font-semibold ${
                activeIdx == id ? "bg-primery text-white p-10 " : ""
              }`}
              onClick={() => setActiveIdx(id)}
            >
              <div className="flex items-center gap-3">
                <Link className="p-2 mt-2 w-full  mb-2" href={link.link}>
                  {link.text}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
