export type links = {
  text: string;
  link: string;
  activeIdx?: number;
  id?: number;
};

export const links: links[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About Us",
    link: "#aboutUs",
  },
  {
    text: "All Properties",
    link: "/allProperties",
  },
];
