import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { PiStackOverflowLogoFill } from "react-icons/pi";
import Container from "./Container";
import BrainLogo from "@/public/images/fabricio-cunha-logo.svg";
import { NAVIGATION_LINKS } from "@/app/data/navigation-links";
import { SOCIAL_LINKS } from "@/app/data/social-links";
import { SITE_CONFIG } from "@/app/lib/site-config";

const SOCIAL_ICONS = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: SOCIAL_LINKS.github, Icon: FaSquareGithub },
  { label: "Stack Overflow", href: SOCIAL_LINKS.stackoverflow, Icon: PiStackOverflowLogoFill },
] as const;

export default function Footer() {
  return (
    <footer className="w-full bg-gray-700 py-20 text-white">
      <Container
        classes={{
          container:
            "flex flex-wrap items-center justify-center sm:justify-between gap-10",
        }}
      >
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image className="w-32" src={BrainLogo} alt="brain logo" />
          </Link>
          <ul className="flex items-center justify-between gap-6">
            {NAVIGATION_LINKS.map(({ id, title, link }) => (
              <li key={id}>
                <Link
                  href={link}
                  className="hover:border-b-2 hover:border-b-primary h-8 pb-4"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-center sm:justify-start gap-4 text-3xl">
            {SOCIAL_ICONS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="hover:text-primary" />
              </Link>
            ))}
          </div>
          <ul className="mt-4">
            <li>
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
              reserved.
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
