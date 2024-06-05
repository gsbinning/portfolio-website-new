"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a dedicated Junior Software Developer with a passion for{" "}
        <span className="font-medium">problem-solving and creating functional,</span> aesthetically pleasing applications. Through the intensive software development programs at{" "}
        <span className="font-medium">Northcoders and Althaus Digital,</span>{" "}
        <span className="italic">I have gained expertise in JavaScript, C#, React, Next.js, Node.js, ASP.NET Core, TypeScript, and more.</span> With a background in creative fields, <span className="underline"> I excel</span> in developing innovative solutions.
        is{" "}
        <span className="font-medium">
        I am always eager to learn new technologies and embrace challenges that foster professional growth.{" "}
        </span>
        I am seeking an entry-level position{" "}
      </p>

      <p>
        <span className="italic">where I can leverage my creativity,</span>, technical skills,{" "}
        <span className="font-medium">and dedication to contribute effectively to a dynamic team and excel in the tech industry.</span>
      </p>
    </motion.section>
  );
}
