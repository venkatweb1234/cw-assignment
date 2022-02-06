import blue from "../../media/blue.jpg";
import hand from "../../media/hand-painted.jpg";
import heme from "../../media/heme.jpg";
import green from "../../media/green.jpg";
import indigo from "../../media/indigo.jpg";
import saucer from "../../media/saucer.jpg";

export interface imageType {
  name: string;
  src: string;
}

export const imageItems: imageType[] = [
  { name: "blue", src: blue },
  { name: "hand", src: hand },
  { name: "heme", src: heme },
  { name: "green", src: green },
  { name: "indigo", src: indigo },
  { name: "saucer", src: saucer },
];
