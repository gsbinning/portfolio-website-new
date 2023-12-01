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
         I am a Junior Software Developer graduated from the{" "}
        <span className="font-medium">Northcoders</span> institute. I decided to pursue my
        passion for programming and enrol in a coding bootcamp, learning{" "}
        <span className="font-medium">full-stack web development.</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and creating apps & websites using my skills. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Vercel
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies I am always looking to challenge myself further and utilise the transferable skills I have developed over my professional and academic career. 
      </p>

      <p>
        <span className="italic">Coming from a creative background</span>, I am naturally attracted to front-end, web & mobile app development. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently looking for an{" "}
        <span className="font-medium">entry-level full-time position</span> as a software
        developer mainly front-end.
      </p>
    </motion.section>
  );
}

