"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { NavigationLink } from "@/app/data/navigation-links";

type DesktopNavigationProps = {
  navigation: ReadonlyArray<NavigationLink>;
};

export default function DesktopNavigation({ navigation }: DesktopNavigationProps) {
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
}
