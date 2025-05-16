import React from "react";
import Image from "next/image";
import { mySvgData } from "../data/svg-data";

interface IconLink {
  id: number;
  path: string;
  link: string;
}

const IconItem: React.FC<{ icon: IconLink }> = ({ icon }) => (
  <a
    key={icon.id}
    href={icon.link}
    rel="noopener noreferrer"
    target="_blank"
    aria-label={`Visit ${icon.link}`}
    className="w-10 flex items-center hover:scale-110 transition-transform duration-300"
  >
    <Image
      src={icon.path}
      alt={icon.link || "icon"}
      width={40}
      height={40}
      className="flex-shrink-0 object-contain w-10 h-10"
    />
  </a>
);

const IconSection: React.FC = () => (
  <div className="flex items-center w-full lg:w-screen h-20 justify-between gap-20 px-10 overflow-hidden">
    {mySvgData.map((icon) => (
      <IconItem key={icon.id} icon={icon} />
    ))}
  </div>
);

const RevolvingIcons: React.FC = () => (
  <div className="flex overflow-hidden py-4">
    <div className="animate-loop-scroll">
      <IconSection />
    </div>
    <div className="animate-loop-scroll" aria-hidden="true">
      <IconSection />
    </div>
  </div>
);

export default RevolvingIcons;
