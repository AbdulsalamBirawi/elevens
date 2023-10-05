import React, { useEffect, useState } from "react";
import { NavbarLinks } from "../../molecules";

type props = {
  solid: boolean;
};

export const Navbar = ({ solid }: props) => {
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const [liTextColor, setLiTextColor] = useState("text-white");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (solid) {
        setNavbarBackground("bg-white");
        setLiTextColor("text-primery");
      } else if (window.scrollY > 100) {
        setNavbarBackground("bg-white");
        setLiTextColor("text-primery");
        setIsTop(false);
      } else {
        setNavbarBackground("bg-transparent");
        setLiTextColor("text-white");
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full  top-0 z-20 p-4 transition duration-300 ease-in-out ${navbarBackground} ${
        isTop ? "border-none" : "border-b"
      } border-gray-300`}
    >
      <NavbarLinks textColor={liTextColor} />
    </nav>
  );
};
