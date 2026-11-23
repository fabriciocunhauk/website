export type NavigationLink = Readonly<{
  id: number;
  title: string;
  link: string;
}>;

export const NAVIGATION_LINKS: ReadonlyArray<NavigationLink> = Object.freeze([
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Projects", link: "#projects" },
]);
