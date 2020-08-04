import {
  businessArray,
  projectsArray,
  codeSourcesArray,
  mediaArray,
  googleArray,
  gamesArray,
  miscSourcesArray,
} from "./linkData";

export const cardData1 = [
  {
    id: 1,
    title: "Business",
    links: businessArray,
  },
  { id: 2, title: "Projects", links: projectsArray },
  { id: 3, title: "Code soures", links: codeSourcesArray },
];

export const cardData2 = [
  {
    id: 1,
    title: "Media",
    links: mediaArray,
  },
  { id: 2, title: "Google", links: googleArray },
  { id: 3, title: "Games", links: gamesArray },
  { id: 4, title: "Misc sources", links: miscSourcesArray },
];
