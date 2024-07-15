export type MenuProps = {
  title: string;
  href: string;
  description?: string;
  items?: Omit<MenuProps, "items">[];
};

export const menus: MenuProps[] = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/logs",
    title: "logs",
    items: [
      {
        href: "/coding",
        title: "coding",
        description:
          "personal archive of algo / coding related stuff! leetcode review. live coding interview etc",
      },
      {
        href: "/projects",
        title: "projects",
        description: "archive of projects that I have been working on!",
      },
    ],
  },
];
