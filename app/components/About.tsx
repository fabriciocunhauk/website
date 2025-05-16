import React from "react";
import Container from "./Container";
import Card from "./Card";
import linkedinProfile from "@/public/images/linkedin-profile.png";
import Image from "next/image";
import Button from "./Button";
import { CiLinkedin } from "react-icons/ci";

function About() {
  return (
    <section id="about" className="text-white py-24">
      <Container>
        <Card
          classes={{
            card: "relative grid grid-rows-2 lg:grid-rows-1 text-white mb-16 bg-gray-800/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl",
          }}
        >
          <div className="space-y-8 z-20">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">About</span> Me
            </h2>

            <p className="text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed text-gray-200">
              I&apos;m a{" "}
              <span className="text-primary font-semibold">
                Software Developer
              </span>{" "}
              who thrives on turning ideas into innovative, user-friendly
              solutions. With over 4 years of experience in the industry,
              I&apos;ve honed my skills in crafting high-performance web
              applications that deliver exceptional user experiences.{" "}
              <span className="text-indigo-400 font-medium">
                delivering exceptional digital solutions.
              </span>
            </p>

            <Button
              link="https://www.linkedin.com/in/fabricio-cunha-uk/"
              icon={<CiLinkedin size={28} />}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <Image
            src={linkedinProfile}
            alt="Code Background"
            className="absolute -bottom-60 top-120 lg:-top-48 -right-24 lg:-right-110 -rotate-20 lg:-rotate-40 object-cover opacity-50 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </Card>
      </Container>
    </section>
  );
}

export default About;
