import {
  areaIcon,
  bath,
  bed,
  duplex,
  pabellonSuite,
  sofa,
  standartKing,
  superiorDuplex,
  threeHuman,
  twoHuman,
  wifi,
} from "./assets";

type Navbar = {
  id: number;
  title: string;
  route: string;
};

export const navbar: Navbar[] = [
  {
    id: 1,
    title: "Home",
    route: "/home",
  },
  {
    id: 2,
    title: "About Us",
    route: "/about-us",
  },
  {
    id: 3,
    title: "Rooms",
    route: "/rooms",
  },
  {
    id: 4,
    title: "Services",
    route: "/services",
  },

  {
    id: 5,
    title: "Experiences",
    route: "/experiences",
  },
  {
    id: 6,
    title: "Wine",
    route: "/wine",
  },
  {
    id: 7,
    title: "Agrotourism",
    route: "/agrotourism",
  },
  {
    id: 8,
    title: "Blog",
    route: "/blog",
  },
  {
    id: 9,
    title: "Contact",
    route: "/contact",
  },
];

type Rooms = {
  id: number;
  img: string;
  title: string;
  description: string;
  humanIcon: string;
  humanQuantity: number;
  sofaIcon?: string;
  sofaQuantity?: number;
  bedIcon: string;
  bedQuantity: number;
  areaIcon: string;
  area: number;
  wifiIcon: string;
  wifi: string;
  bathIcon?: string;
  bathQuantity?: number;
};

export const rooms: Rooms[] = [
  {
    id: 1,
    img: standartKing,
    title: "Standard King",
    description:
      "Soak in the scenery and unwind in style from your spacious king-bed retreat.",
    humanIcon: threeHuman,
    humanQuantity: 3,
    bedIcon: bed,
    bedQuantity: 1,
    sofaIcon: sofa,
    sofaQuantity: 1,
    areaIcon: areaIcon,
    area: 26,
    wifiIcon: wifi,
    wifi: "Free wifi",
  },
  {
    id: 2,
    img: duplex,
    title: "Duplec",
    description:
      "Designed over two levels, the lower floor offers a cozy living area with patio garden, cozy yet sophisticated ambiance, while upstairs, the sleeping area invites restful nights. ",
    humanIcon: twoHuman,
    humanQuantity: 4,
    bedIcon: bed,
    bedQuantity: 1,
    sofaIcon: sofa,
    sofaQuantity: 1,
    areaIcon: areaIcon,
    area: 55,
    wifiIcon: wifi,
    wifi: "Free wifi",
  },
  {
    id: 3,
    img: superiorDuplex,
    title: "Superior Duplex",
    description:
      "Duplex spans two levels, offering a separate living area below and a tranquil sleeping space above. Ideal for guests seeking a little extra luxury, enjoying the bath and calm atmosphere.",
    humanIcon: twoHuman,
    humanQuantity: 4,
    bedIcon: bed,
    bedQuantity: 1,
    bathIcon: bath,
    bathQuantity: 1,
    areaIcon: areaIcon,
    area: 55,
    wifiIcon: wifi,
    wifi: "Free wifi",
  },
  {
    id: 4,
    img: pabellonSuite,
    title: "Pabellon Suite",
    description:
      "Our Suite is the pinnacle of comfort. The space creates a tranquil atmosphere ideal for relaxation and inspiration, perfect choice for guests who appreciate refined living.",
    humanIcon: twoHuman,
    humanQuantity: 4,
    bedIcon: bed,
    bedQuantity: 1,

    areaIcon: areaIcon,
    area: 52,
    wifiIcon: wifi,
    wifi: "Free wifi",
  },
];

export const footerNavbar: Navbar[] = [
  {
    id: 1,
    title: "Blog",
    route: "/blog",
  },
  {
    id: 2,
    title: "Rooms",
    route: "/rooms",
  },
  {
    id: 3,
    title: "Home",
    route: "/home",
  },
  {
    id: 4,
    title: "Services",
    route: "/services",
  },
  {
    id: 5,
    title: "Restaurnat",
    route: "/restaurant",
  },
  {
    id: 6,
    title: "FAQs",
    route: "/faqs",
  },
];

export const footerSoc = [
  {
    id: 1,
    soc: "Instagram",
    link: "https://www.instagram.com",
  },
  {
    id: 2,
    soc: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: 1,
    soc: "LinkedIn",
    link: "https://www.linkedin.com/",
  },
];
type Facilities = {
  id: number;
  title: string;
};

export const facilities: Facilities[] = [
  {
    id: 1,
    title: "spa",
  },
  {
    id: 2,
    title: "Indoor pool",
  },
  {
    id: 3,
    title: "Outdoor pool",
  },
  {
    id: 4,
    title: "Gym",
  },
];

export const sapces: Facilities[] = [
  {
    id: 1,
    title: "Meeting Rooms",
  },
  {
    id: 2,
    title: "Boardroom",
  },
  {
    id: 3,
    title: "Ballroom",
  },
];

export const sapces2: Facilities[] = [
  {
    id: 1,
    title: "Pre-function Area",
  },
  {
    id: 2,
    title: "Hallway",
  },
];
