import Image from "../../../../assets/aboutusimage.png";
export type Tcards = {
  images: any[];
  title: string;
  type: string;
  cost: number;
  room: string;
  link: string;
}[];

export const cards: Tcards = [
  {
    cost: 500,
    images: [Image, Image, Image, Image],
    link: "/aboutus",
    room: "Living Area",

    title: "No.Floor:Ground,ID:2",
    type: "PentHouse",
  },
  {
    cost: 500,
    images: [Image, Image, Image, Image],
    link: "/aboutus",
    room: "Living Area",

    title: "No.Floor:Ground,ID:2",
    type: "PentHouse",
  },
  {
    cost: 500,
    images: [Image, Image, Image, Image],
    link: "/aboutus",
    room: "deluxe one bed room",

    title: "No.Floor:Ground,ID:2",
    type: "PentHouse",
  },
  {
    cost: 500,
    images: [Image, Image, Image, Image],
    link: "/aboutus",
    room: "deluxe king studio",

    title: "No.Floor:Ground,ID:2",
    type: "PentHouse",
  },
];
