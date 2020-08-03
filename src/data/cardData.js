import {
  uniLeidenArray,
  onderwAfstandArray,
  taalkundeArray,
  japansArray,
  array3_1,
  array3_2,
} from "./linkData";

export const cardData1 = [
  {
    id: 1,
    title: "Universiteit Leiden",
    links: uniLeidenArray,
  },
  { id: 2, title: "Onderwijs op afstand", links: onderwAfstandArray },
];

export const cardData2 = [
  {
    id: 1,
    title: "Taal en taalkunde",
    links: taalkundeArray,
  },
  { id: 3, title: "Japans", links: japansArray },
];

export const cardData3 = [
  {
    id: 1,
    title: "3",
    links: array3_1,
  },
  { id: 3, title: "33", links: array3_2 },
];
