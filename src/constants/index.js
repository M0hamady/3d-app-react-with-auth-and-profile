import axios from "axios";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  villa,
  building,
  apartment,
  office,
} from "../assets";

export const navLinks = [{
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [{
    title: "villa",
    icon: villa,
  },
  {
    title: "Building",
    icon: building,
  },
  {
    title: "apartment",
    icon: apartment,
  },
  {
    title: "Administrative Office",
    icon: office,
  },
];

const technologies = [{
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [{
    title: "villa in madinaty",
    company_name: "mr/ ah med ali",
icon: villa,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "we started with bolean.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "building zagazik",
    company_name: "Tesla",
    icon: building,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "office constructions",
    company_name: "support constructions",
    icon: office,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "floor elomhammedy",
    company_name: "new capital",
    icon: apartment,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [{
    testimonial: "I used to think that it was impossible to create a beautiful website like our product in the field of 3D construction design. However, the company I worked with, which has extensive experience in this field like Wesal, and has a system that organizes everything from the application process to the completion of my project, proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
testimonial: "Once upon a time, I held the belief that finding a company specializing in 3D construction design—like Wesal—was akin to discovering a mythical creature. How could such a company exist, possessing both vast experience and an efficient system that seamlessly guides projects from inception to completion? But then, my encounter with Wesal shattered my preconceptions. Their expertise and streamlined approach defied my expectations, leaving me pleasantly surprised.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "In the heart of my skepticism, I once believed that finding a unicorn—a company proficient in 3D construction design—was more plausible than stumbling upon an entity like Wesal. How could a single organization possess both the wisdom of ages and a streamlined process that dances effortlessly from blueprint to reality? But lo and behold, Wesal shattered my illusions. Their expertise, akin to a masterful symphony, orchestrated projects with finesse, leaving me in awe.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [{
    name: "cairo",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [{
        name: "madinaty",
        description: [" descriptions 1", "descriptions 2"],
        color: "blue-text-gradient",
      },
      {
        name: "obour",
        description: [" descriptions 1", "descriptions 2"],
        color: "green-text-gradient",
      },
      {
        name: "6 october",
        description: [" descriptions 1", "descriptions 2"],
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://support-constructions.com/",
  },
  {
    name: "alexandria",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [{
        name: "برج العرب",
        description: [" descriptions 1", "descriptions 2"],
        color: "blue-text-gradient",
      },
      {
        name: "الساحل",
        description: [" descriptions 1", "descriptions 2"],
        color: "green-text-gradient",
      },
      {
        name: "العالمين",
        description: [" descriptions 1", "descriptions 2"],
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://support-constructions.com/",
  },
  {
    name: "zaqazek",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [{
        name: "مدينة الزقازيق",
        description: [" descriptions 1", "descriptions 2"],
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        description: [" descriptions 1", "descriptions 2"],
        color: "green-text-gradient",
      },
      {
        name: "css",
        description: [" descriptions 1", "descriptions 2"],
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://support-constructions.com/",
  },
];

export const getAllBaqas = async () => {
  try {
    const response = await axios.get('https://www.backend.support-constructions.com/website/api/baqas');
console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error occurred while fetching baqas:', error);
    return null;
  }
};

// id: "1",
//     name: "VIP",
//     description: "3800 LE",
//     tags: [{
//         name: "الكهرباء",
//         description: [" descriptions d1", "descriptions 2"],
//         color: "blue-text-gradient",
//       },
//       {
//         name: "التيار الخفيف        ",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "green-text-gradient",
//       },
//       {
//         name: "الكاميرات",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "pink-text-gradient",
//       },
//       {
//         name: "الساوند سيستم",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "blue-text-gradient",
//       },
//       {
//         name: "كابينه شاور",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "green-text-gradient",
//       },
//       {
//         name: "العزل",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "pink-text-gradient",
//       },
//       {
//         name: "السباكه",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "blue-text-gradient",
//       },
//       {
//         name: "الجبسونبورد",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "green-text-gradient",
//       },
//       {
//         name: "االسقف",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "pink-text-gradient",
//       },
//       {
//         name: "النقاشه",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "blue-text-gradient",
//       },
//       {
//         name: "الديكور",
//         description: [" descriptions 1", "descriptions 2"],
//         color: "green-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://support-constructions.com/",
//   },
export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};