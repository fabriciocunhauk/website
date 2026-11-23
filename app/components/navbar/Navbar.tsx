"use client";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Container from "../Container";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";
import logo from "@/public/images/fabricio-cunha-logo.svg";
import { NAVIGATION_LINKS } from "@/app/data/navigation-links";
import { useIsScrolledPast } from "@/app/hooks/useIsScrolledPast";

const SCROLL_THRESHOLD_PX = 80;

export default function Navbar() {
  const isScrolled = useIsScrolledPast(SCROLL_THRESHOLD_PX);

  return (
    <Container
      classes={{
        container: clsx(
          "fixed top-0 xl:top-20 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 transition-all duration-300 ease-in-out z-20 w-full xl:rounded-full text-white",
          isScrolled ? "bg-gray-700/90 shadow-lg" : "bg-transparent"
        ),
      }}
      element="header"
    >
      <nav className="flex items-center justify-between px-0 lg:px-10">
        <Link href="/" className="w-40">
          <Image src={logo} alt="Logo" />
        </Link>
        <DesktopNavigation navigation={NAVIGATION_LINKS} />
        <MobileMenu navigation={NAVIGATION_LINKS} />
      </nav>
    </Container>
  );
}
