"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import logo from "@/public/images/fabricio-cunha-logo.svg";

import clsx from "clsx";
import { useScrollPosition } from "../hooks/useScrollPosition";

type NavbarProps = {
  classes?: {
    wrapper?: string;
    container?: string;
    button?: string;
  };
};

type NavigationProps = {
  id: number;
  title: string;
  link: string;
};

type SubNavigationProps = {
  id: number;
  title: string;
  navigation: NavigationProps[];
};

const mockNavigation: NavigationProps[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Contact", link: "/contact" },
];

const mockSubNavigation: SubNavigationProps[] = [
  {
    id: 1,
    title: "More",
    navigation: [
      { id: 1, title: "Team", link: "/team" },
      { id: 2, title: "Careers", link: "/careers" },
    ],
  },
];

const MobileMenu: React.FC<{ navigation: NavigationProps[] }> = ({
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={clsx(
          "hidden",
          isOpen &&
            "flex fixed top-0 right-0 bottom-0 left-0 bg-white text-gray-dark z-20 w-full h-full overflow-y-scroll"
        )}
      >
        <Container
          classes={{
            container: "flex flex-col gap-10 items-end w-full",
          }}
        >
          <Button
            classes={{
              button:
                "w-8 h-8 bg-transparent rounded hover:bg-red-primary/60 hover:text-white mt-1",
            }}
            onClick={toggleMenu}
          >
            <IoMdClose className="text-4xl" />
          </Button>
          <Link href="/" className="mx-auto" onClick={toggleMenu}>
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt="Logo"
            />
          </Link>
          <ul className="flex flex-col text-center gap-10 mx-auto">
            {navigation.map(({ id, title, link }) => (
              <li
                key={id}
                className={clsx(
                  "hover:border-b transition-all duration-100 ease-in-out h-8",
                  pathname.endsWith(link) && "border-b"
                )}
                onClick={toggleMenu}
              >
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Button
        classes={{
          button: "block xl:hidden bg-transparent w-8 h-8 rounded",
        }}
        onClick={toggleMenu}
      >
        <GiHamburgerMenu className="w-5 h-5 m-auto" />
      </Button>
    </>
  );
};

const Navigation: React.FC<{
  navigation: NavigationProps[];
  subNavigation: SubNavigationProps[];
}> = ({ navigation }) => {
  const pathname = usePathname();

  return (
    <ul className="hidden xl:flex items-center justify-between gap-10">
      {navigation.map(({ id, title, link }) => (
        <li
          key={id}
          className={clsx(
            "hover:border-b transition-all duration-100 ease-in-out h-8",
            pathname.endsWith(link) && "border-b"
          )}
        >
          <Link href={link}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar: React.FC<NavbarProps> = ({ classes }) => {
  const scrollPosition = useScrollPosition();

  return (
    <Container
      classes={{
        container: clsx(
          "fixed top-0 xl:top-20 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 transition-all duration-300 ease-in-out z-10 w-full xl:rounded-full",
          classes?.wrapper,
          scrollPosition > 80
            ? "bg-white/90 shadow-lg"
            : "text-white bg-transparent"
        ),
      }}
      element="header"
    >
      <nav
        className={clsx(
          "flex items-center justify-between",
          classes?.container
        )}
      >
        <Link href="/" className="w-40">
          <Image src={logo} alt="Logo" />
        </Link>
        <Navigation
          navigation={mockNavigation}
          subNavigation={mockSubNavigation}
        />
        <MobileMenu navigation={mockNavigation} />
      </nav>
    </Container>
  );
};

export default Navbar;
