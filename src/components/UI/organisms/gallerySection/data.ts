import Image1 from "../../../../assets/1.jpg";
import Image2 from "../../../../assets/3.jpg";
import Image3 from "../../../../assets/4.jpg";
import Image4 from "../../../../assets/5.jpg";
import Image5 from "../../../../assets/6.jpg";
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
    images: [Image1, Image2],
    link: "/aboutus",
    room: "Living Area",

    title: "No.Floor:Ground,ID:2",
    type: "PentHouse",
  },
  {
    cost: 500,
    images: [Image4, Image1, Image4],
    link: "/aboutus",
    room: "Living Area",

    title: "No.Floor:Ground,ID:2",
    type: "PentHouse",
  },
  {
    cost: 500,
    images: [Image2, Image4, Image1],
    link: "/aboutus",
    room: "deluxe one bed room",

    title: "No.Floor:Ground,ID:2",
    type: "PentHouse",
  },
  {
    cost: 500,
    images: [Image5, Image2, Image1],
    link: "/aboutus",
    room: "deluxe king studio",

    title: "No.Floor:Ground,ID:2",
    type: "PentHouse",
  },
];
