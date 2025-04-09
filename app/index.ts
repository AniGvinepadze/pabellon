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
    title: "History",
    route: "/history",
  },
  {
    id: 3,
    title: "Rooms",
    route: "/rooms",
  },
  {
    id: 4,
    title: "Blog",
    route: "/blog",
  },

  {
    id: 5,
    title: "Contact",
    route: "/contact",
  },
  {
    id: 6,
    title: "Restaurant",
    route: "/restaurant",
  },
];
