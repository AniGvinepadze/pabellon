import {
  areaIcon,
  bath,
  bed,
  blogImg,
  blogImg2,
  blogImg3,
  blogImg4,
  blogImg5,
  blogImg6,
  duplex,
  meetingImg2,
  meetingImg3,
  meetingImg4,
  meetingImg5,
  pabellonSuite,
  roomImg2,
  roomImg3,
  roomImg4,
  roomImg5,
  roomImg6,
  roomImg7,
  roomImg8,
  sofa,
  standartKing,
  superiorDuplex,
  threeHuman,
  fourHuman,
  wifi,
  twoHuman,
} from "./assets";

type Navbar = {
  id: number;
  title: string;
  route?: string;
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
    // route: "/experiences",
  },
  {
    id: 6,
    title: "Wine",
    route: "/wine",
  },
  {
    id: 7,
    title: "Agriculture",
    route: "/agro",
  },
  // {
  //   id: 8,
  //   title: "Blog",
  //   route: "/blog",
  // },
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
    humanIcon: fourHuman,
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
    humanIcon: fourHuman,
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
    humanIcon: fourHuman,
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
  // {
  //   id: 1,
  //   title: "Blog",
  //   route: "/blog",
  // },
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
    route: "/makrine-restaurant",
  },
  {
    id: 6,
    title: "FAQs",
    route: "/home",
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
    title: "Spa",
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

export const ourFacilities: Facilities[] = [
  {
    id: 1,
    title: "Spa",
  },
  {
    id: 2,
    title: "Heated Indoor pool",
  },
  {
    id: 3,
    title: "Outdoor pool",
  },
  {
    id: 5,
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

export const meeting = [
  {
    id: 1,
    img: meetingImg4,
  },
  {
    id: 2,
    img: meetingImg3,
  },
  {
    id: 3,
    img: meetingImg4,
  },
  {
    id: 4,
    img: meetingImg3,
  },
  {
    id: 5,
    img: meetingImg4,
  },
  {
    id: 6,
    img: meetingImg3,
  },
];

type Wine = {
  id: number;
  title: string;
  description: string;
};

export const wine: Wine[] = [
  {
    id: 1,
    title: "Khikhvi 2024",
    description: "White Dry, alc. 11.5% – Kakheti, Georgia",
  },
  {
    id: 2,
    title: "Kisi Qvevri 2022",
    description: "White Dry, alc. 12.5% – Kakheti, Georgia",
  },
  {
    id: 3,
    title: "Saperavi 2023",
    description: "Red Dry, alc. 13% – PDO Khashmi, Kakheti, Georgia",
  },
  {
    id: 4,
    title: "Kindzmarauli 2024",
    description: "Red Semi-Sweet, alc. 11.5% – Kakheti, Georgia",
  },
];

type Blog = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export const blog: Blog[] = [
  {
    id: 1,
    img: blogImg,
    title: "5 Things To Do In Kakheti",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 2,
    img: blogImg2,
    title: "Spring Workshop At Pabellon",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 3,
    img: blogImg3,
    title: "5 Things To Do In Kakheti",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 4,
    img: blogImg4,
    title: "What To Enjoy At Pabellon Dining",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 5,
    img: blogImg5,
    title: "5 Things To Do In Kakheti",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: 6,
    img: blogImg6,
    title: "“Best Spa Experience In Georgia”",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

type RoomsBook = {
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
  price: number;
};

export const roomsBook: RoomsBook[] = [
  {
    id: 1,
    img: roomImg2,
    title: "Standard Double Room Accessible",
    description:
      "A tender, thoughtfully crafted space where care and ease come together for guests with limited mobility.",
    humanIcon: twoHuman,
    humanQuantity: 2,
    bedIcon: bed,
    bedQuantity: 1,
    areaIcon: areaIcon,
    area: 26,
    wifiIcon: wifi,
    wifi: "Free wifi",
    price: 155,
  },
  {
    id: 2,
    img: roomImg3,
    title: "Iverisi Standard",
    description:
      "Standard Rooms are thoughtfully designed for comfort and convenience. Each features an elegant furnishing and a calming color palette.",
    humanIcon: twoHuman,
    humanQuantity: 2,
    bedIcon: bed,
    bedQuantity: 1,

    areaIcon: areaIcon,
    area: 26,
    wifiIcon: wifi,
    wifi: "Free wifi",
    price: 155,
  },
  {
    id: 3,
    img: roomImg4,
    title: "Rcheuli Room",
    description:
      "Soak in the scenery and unwind in style from your spacious king-bed retreat.",
    humanIcon: threeHuman,
    humanQuantity: 3,
    bedIcon: bed,
    bedQuantity: 1,
    sofaIcon: sofa,
    sofaQuantity: 1,
    areaIcon: areaIcon,
    area: 55,
    wifiIcon: wifi,
    wifi: "Free wifi",
    price: 155,
  },
  {
    id: 4,
    img: roomImg5,
    title: "Rcheuli Standard Room with View",
    description:
      "An inviting space to relax. Recharge and soak in the beauty just beyond your window.",
    humanIcon: fourHuman,
    humanQuantity: 4,
    bedIcon: bed,
    bedQuantity: 1,
    sofaIcon: sofa,
    sofaQuantity: 1,

    areaIcon: areaIcon,
    area: 52,
    wifiIcon: wifi,
    wifi: "Free wifi",
    price: 155,
  },
  {
    id: 5,
    img: roomImg6,
    title: "Verde Duplex",
    description:
      "Designed over two levels, the lower floor offers a cozy living area with patio garden, cozy yet sophisticated ambiance, while upstairs, the sleeping area invites restful nights.",
    humanIcon: fourHuman,
    humanQuantity: 4,
    bedIcon: bed,
    bedQuantity: 1,
    areaIcon: areaIcon,
    area: 55,
    wifiIcon: wifi,
    wifi: "Free wifi",
    price: 155,
  },
  {
    id: 6,
    img: roomImg7,
    title: "Gantiani Duplex",
    description:
      "Duplex spans two levels, offering a separate living area below and a tranquil sleeping space above. Ideal for guests seeking a little extra luxury, enjoying the bath and calm atmosphere.",
    humanIcon: fourHuman,
    humanQuantity: 4,
    bedIcon: bed,
    bedQuantity: 1,
    bathIcon: bath,
    bathQuantity: 1,
    areaIcon: areaIcon,
    area: 52,
    wifiIcon: wifi,
    wifi: "Free wifi",
    price: 155,
  },
  {
    id: 7,
    img: roomImg8,
    title: "Tsiagi Suite",
    description:
      "Our Suite is the pinnacle of comfort. The space creates a tranquil atmosphere ideal for relaxation and inspiration, perfect choice for guests who appreciate refined living.",
    humanIcon: fourHuman,
    humanQuantity: 4,
    bedIcon: bed,
    bedQuantity: 1,
    areaIcon: areaIcon,
    area: 52,
    wifiIcon: wifi,
    wifi: "Free wifi",
    price: 155,
  },
];
