import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaRegFileVideo } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import dropbox from "@/public/db.png";
import ourhouse from "@/public/our-house.png";
import booking from "@/public/booking.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Roto & Prep Artist",
    location: "Cinesite , London (Remote)",
    description:
      "I worked as a Roto & Prep artist for 1 year. Creating roto mattes for Compositors within tight deadlines. I had to have a high level of concentration as I worked on challenging shots such as hair, fur, intricate details and heavy motion blur. Shots ranged from actors, objects to complex background sceneries. The projects I worked on include Witcher S3 (Netflix), Hijack (AppleTV+), The Family Plan (AppleTV+), Our Man from Jersey. My Skills include Nuke, Mocha Pro and Silhoutte FX",
    icon: React.createElement(FaRegFileVideo),
    date: "2022 - 2023",
  },
  {
    title: "Trainee Software Developer",
    location: "Northcoders, Remote",
    description:
      "I learned the fundamentals of full-stack software development and the best practises of programming in a 13 week coding bootcamp. I worked with API’s, databases, covered express.js, node.js and SQL. I also learnt version control with github,  pair programming, TDD with jest and supertest. A big achievement was working in a group of 5 to create a fully functioning mobile app called Our House. We achieved this collectively using Firebase for backend and React Native & Expo for frontend. I primarily worked on the front end of this app",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
    
  },
  {
    title: "Paint & Roto Artist",
    location: "Framestore, London",
    description: "I worked as a Roto & Prep artist for 4 years and 1 year as a runner. I worked mainly on films throughout my time here working to very fine details. My projects include Avengers: End game, Beast, Christopher Robin, Pokemon: Detective Pikachu Fantastic Beast (The Crimes Of Grindelwald), Fast & Furious: Hobbs & Shaw, Project Power (Netflix), The Midnight Sky, Tom & Jerry: The Movie, A Boy Called Christmas, The Matrix Resurrections, The King’s Man, Lockwood & Co (Netflix).  ",
    icon: React.createElement(FaRegFileVideo),
    date: "2017 - 2022",
  },
  {
    title: "Student",
    location: "Escape Studios, London",
    description:
      "I studied 2D compositing for Visual effects. Modules included: Rotoscoping, camera tracking (2D & 3D), rig removal, 3D projection system, colour balance and more",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
    
  },
] as const;

export const projectsData = [
  {
    title: "Dropbox Clone",
    description:
      "I worked on making a dropbox clone as a personal project to help me practise full stack development. ",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Shadcn", "Clerk", "Typescript", "CRUD", "Vercel"],
    imageUrl: dropbox,
    
  },
  {
    title: "Our House",
    description:
      "Our House is a social app which makes enjoyable the process of delegating chores. This was my final group project with Northcoders.",
    tags:  ["React", "Javascript", "Firebase", "Expo", "Node.js", "React Native", "Cloud Firestore"],
    imageUrl: ourhouse,
   
  },
  {
    title: "Booking.com Clone Demo",
    description:
      "I worked on creating a booking.com clone for demo purposes.",
    tags:  ["React", "Javascript", "Oxylabs", "ShadCn", "Next JS 14", "Vercel", "Tailwind"],
    imageUrl: booking,
   
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Github",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Firebase",
  "Sanity",
  "Vercel",
  "Expo",
  "Jest",
  "Framer Motion",
  "ShadCn",
  "Oxylabs",
] as const;
