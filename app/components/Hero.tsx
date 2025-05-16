import React from "react";
import Image from "next/image";
import Container from "./Container";
import background from "@/public/images/code-bg.jpg";
import astronaut from "@/public/images/github-astronaut.svg";

const Hero: React.FC = () => {
  return (
    <section className="flex items-center bg-gray-900 relative pt-40 max-h-[1000px] overflow-hidden">
      <Container
        classes={{
          container: "relative grid grid-cols-1 md:grid-cols-2 items-end z-10",
        }}
      >
        <div className="space-y-6 text-white mb-10">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Let&apos;s <span className="text-primary">Craft</span> Something{" "}
            <span className="text-indigo-500">Amazing</span>
          </h1>

          <p className="text-sm sm:text-lg max-w-md mx-auto md:mx-0">
            Hi, I&apos;m <span className="text-primary">Fabricio Cunha</span>, a
            frontend developer passionate about building fast, beautiful, and
            user-friendly{" "}
            <span className="text-indigo-500">web experiences.</span>
          </p>
        </div>
        <Image
          src={astronaut}
          alt="GitHub Astronaut"
          className="max-w-[650px]"
        />
      </Container>
      <Image
        src={background}
        alt="Code Background"
        className="absolute top-0 object-cover object-top h-full w-full opacity-50"
      />

      <div className="absolute bottom-0 left-0 right-0 h-[350px] bg-gradient-to-t from-gray-900 from-0% via-transparent" />
    </section>
  );
};

export default Hero;
