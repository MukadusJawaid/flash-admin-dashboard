export const NAV_DATA = [
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    label: "Platform Users",
    // route: "/dashboard",
    subMenu: [
      { label: "Drivers", route: "/drivers" },
      { label: "Riders", route: "/riders" },
      { label: "Sub Admin", route: "/sub-admin" },
    ],
  },
  {
    label: "Trips",
    route: "/trips",
  },
  {
    label: "CMS",
    route: "/cms",
  },
];
