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
    title: "Software Development Student",
    location: "Althaus Digital",
    description:
      "I am actively engaged in intensive training sessions aimed at acquiring both fundamental and advanced software development skills. Currently, I am in the process of completing the Microsoft Azure Fundamentals course (AZ-900), which is equipping me with comprehensive knowledge and expertise in cloud computing principles and Microsoft Azure services. Additionally, I am pursuing a series of courses on Pluralsight to further enhance my skill set. Effectively managing my time, I balance coursework, projects, and self-study, ensuring productivity and progress. Furthermore, I demonstrate a knack for adapting quickly to new technologies and programming languages introduced during the boot camp, such as C# & ASP.Net.",
    icon: React.createElement(LuGraduationCap),
    date: "April 2024 - June 2024",
  },
  {
    title: "Roto & Prep Artist",
    location: "Cinesite , London (Remote)",
    description:
      "I worked at Cinesite as a Roto & Prep Artist for 1 year, where I specialized in creating roto mattes for compositors under tight deadlines. This role required a high level of concentration, particularly when working on challenging shots involving hair, fur, intricate details, and heavy motion blur. The scope of my work included actors, objects, and complex background sceneries. Notable projects I contributed to include The Witcher Season 3 (Netflix), Hijack (AppleTV+), The Family Plan (AppleTV+), and Our Man from Jersey. My technical skills include proficiency in Nuke, Mocha Pro, and Silhouette FX.",
    icon: React.createElement(FaRegFileVideo),
    date: "August 2022 - September 2023",
  },
  {
    title: "Full Stack Coding Bootcamp Student",
    location: "Northcoders, Remote",
    description:
      "At Northcoders, I completed an intensive 13-week coding bootcamp where I mastered full-stack software development fundamentals. I gained hands-on experience with APIs, databases, Express.js, Node.js, and SQL, and developed proficiency in version control with GitHub, pair programming, and Test-Driven Development (TDD) using Jest and Supertest. A key achievement was collaborating in a team of five to create a fully functional mobile app, Our House, using Firebase for the backend and React Native & Expo for the frontend. My primary focus on front-end development showcased my strong problem-solving skills and commitment to delivering reliable code.",
    icon: React.createElement(LuGraduationCap),
    date: "April 2022- July 2022",
    
  },
  {
    title: "Paint & Roto Artist",
    location: "Framestore, London",
    description: "I worked as a Roto & Prep Artist for four years and as a runner for one year, during which I was promoted to Head Runner within 10 months, showcasing exceptional leadership and organizational skills. Throughout my tenure, I collaborated seamlessly with cross-functional teams, working closely with compositors and animators to achieve high-quality visuals. I successfully tackled complex paint and rotoscoping issues, demonstrating adaptability and creative problem-solving. Efficiently managing my time and prioritizing tasks to meet project deadlines, I consistently showcased strong time management skills and the ability to work well under pressure. My projects include high-profile films such as Avengers: Endgame, The Matrix Resurrections, Beast, Christopher Robin, Pokémon: Detective Pikachu, Fantastic Beasts: The Crimes of Grindelwald, Fast & Furious: Hobbs & Shaw, Project Power (Netflix), The Midnight Sky, Tom & Jerry: The Movie, A Boy Called Christmas, The King’s Man, and Lockwood & Co (Netflix)",
    icon: React.createElement(FaRegFileVideo),
    date: " February 2017 - March 2022",
  },
  {
    title: "2D Compositing for Visual Effects Student",
    location: "Escape Studios, London",
    description:
      "I undertook a comprehensive study in 2D compositing for Visual Effects, encompassing a range of modules including Rotoscoping, Camera Tracking (2D & 3D), Rig Removal, 3D Projection Systems, Color Balancing, and other relevant topics.",
    icon: React.createElement(LuGraduationCap),
    date: "March 2016 - July 2016",
    
  },
  {
    title: "BA Hons Animation",
    location: "University Of Wolverhampton, Wolverhampton",
    icon: React.createElement(LuGraduationCap),
    date: "September 2010 - June 2013",
    
  },
] as const;

export const projectsData = [
  {
    title: "Dropbox Clone",
    description:
      "As part of my personal portfolio, I replicated the Dropbox platform, showcasing my proficiency in full-stack development. ",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Shadcn", "Clerk", "Typescript", "CRUD", "Vercel"],
    imageUrl: dropbox,
    
  },
  {
    title: "Our House",
    description:
      "Our House represents the pinnacle of my collaboration at Northcoders—a social app crafted to facilitate and elevate the chore delegation experience.",
    tags:  ["React", "Javascript", "Firebase", "Expo", "Node.js", "React Native", "Cloud Firestore"],
    imageUrl: ourhouse,
   
  },
  {
    title: "Booking.com Clone Demo",
    description:
      "I dedicated efforts to crafting a replica of Booking.com for demonstration purposes.",
    tags:  ["React", "Javascript", "Oxylabs", "ShadCn", "Next JS 14", "Vercel", "Tailwind"],
    imageUrl: booking,
   
  },
  
] as const;

export const skillsData = [
  "JavaScript",
  "C#",
  ".Net Core",
  "ASP.Net",
  ".Net 6+",
  "OOP",
  "HTML5",
  "CSS",
  "TypeScript",
  "Visual Studio",
  "Visual Studio Code",
  "React",
  "React Native",
  "SQL",
  "MySQL",
  "Next.js",
  "Node.js",
  "Github",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express.js",
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
