import React from "react";
import Image from "next/image";
import Container from "./Container";
import background from "@/public/images/code-bg.jpg";
import astronaut from "@/public/images/github-astronaut.svg";

const Hero: React.FC = () => {
  return (
    <section className="flex items-center bg-gray-900 relative pt-20 max-h-[1000px] overflow-hidden">
      <Container
        classes={{
          container: "relative grid grid-cols-1 md:grid-cols-2 items-end z-10",
        }}
      >
        <div className="space-y-6 text-white ">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Let&apos;s <span className="text-primary">Build</span> Something{" "}
            <span className="text-indigo-500">Great</span>
          </h1>

          <p className="text-sm sm:text-lg max-w-md mx-auto md:mx-0 font-semibold">
            Hi, I&apos;m <span className="text-primary">Fabricio Cunha</span>, a
            frontend developer passionate about crafting fast, beautiful, and
            user-friendly web experiences. With years of experience, I
            specialize in modern web technologies and{" "}
            <span className="text-indigo-500">
              delivering exceptional digital solutions.
            </span>
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
        className="absolute top-0 object-cover object-top h-full w-full opacity-50 z-0"
      />

      <div className="absolute bottom-0 left-0 right-0 z-0 h-[350px] bg-gradient-to-t from-gray-900 from-0% via-transparent" />
    </section>
  );
};

export default Hero;
