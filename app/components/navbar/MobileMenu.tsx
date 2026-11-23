"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Container from "../Container";
import Button from "../Button";
import logo from "@/public/images/fabricio-cunha-logo.svg";
import type { NavigationLink } from "@/app/data/navigation-links";

type MobileMenuProps = {
  navigation: ReadonlyArray<NavigationLink>;
};

export default function MobileMenu({ navigation }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((open) => !open);

  return (
    <>
      <div
        className={clsx(
          isOpen
            ? "flex fixed top-0 right-0 bottom-0 left-0 bg-gray-900 z-20 w-full h-full overflow-y-scroll"
            : "hidden"
        )}
      >
        <Container
          classes={{
            container: "flex flex-col gap-10 items-end w-full",
          }}
        >
          <button
            type="button"
            aria-label="Close menu"
            className="text-4xl text-primary cursor-pointer mt-1 ml-1"
            onClick={toggleMenu}
          >
            <IoMdClose />
          </button>

          <Link href="/" className="mx-auto" onClick={toggleMenu}>
            <Image src={logo} alt="Logo" className="w-40" />
          </Link>
          <ul className="flex flex-col text-center gap-10 mx-auto">
            {navigation.map(({ id, title, link }) => (
              <li
                key={id}
                className={clsx(
                  "hover:border-b transition-all duration-100 ease-in-out h-8",
                  pathname.endsWith(link) && "border-b"
                )}
              >
                <Link href={link} onClick={toggleMenu}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Button
        aria-label="Open menu"
        classes={{
          button: "block xl:hidden",
        }}
        onClick={toggleMenu}
        size="sm"
      >
        <GiHamburgerMenu className="text-white" size="24" />
      </Button>
    </>
  );
}
