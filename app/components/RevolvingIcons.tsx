import Image from "next/image";
import { TECH_ICON_LINKS } from "@/app/data/svg-data";

function IconSection() {
  return (
    <div className="flex items-center w-full lg:w-screen h-20 justify-between gap-20 px-10 overflow-hidden">
      {TECH_ICON_LINKS.map((icon) => (
        <a
          key={icon.id}
          href={icon.link}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`Visit ${icon.name} website`}
          className="w-10 flex items-center hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={icon.path}
            alt={icon.name}
            width={40}
            height={40}
            className="flex-shrink-0 object-contain w-10 h-10"
          />
        </a>
      ))}
    </div>
  );
}

export default function RevolvingIcons() {
  return (
    <div className="flex overflow-hidden py-4">
      <div className="animate-loop-scroll">
        <IconSection />
      </div>
      <div className="animate-loop-scroll" aria-hidden="true">
        <IconSection />
      </div>
    </div>
  );
}
