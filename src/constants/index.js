import {
  creator,
  mobile,
  backend,
  python,
  springreen,
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
  ellawhobird
} from "../assets";

import promptshare from '../assets/promptshare.png'
import music from '../assets/music.png'

export const navLinks = [{
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "experience",
    title: "Experience",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [{
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack",
    icon: mobile,
  },
  {
    title: "Data Science",
    icon: creator,
  },
  {
    title: "Freelancer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
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
    name: "git",
    icon: git,
  }
];

const experiences = [

  {
    title: "Full Stack Developer Intern",
    company_name: "Springreen",
    icon: springreen,
    iconBg: "black",
    date: "June 2023 - present",
    points: [
      "Developing and maintaining web applications using Flask and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ]
  }
];

const testimonials = [{
    testimonial: "Fantastic Communication and really listened to what I wanted!",
    name: "Angelo Brown",
    designation: "Founder",
    company: "Ellawhobird designs",
    image: ellawhobird,
  },
  {
    testimonial: "DEMO I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: " DEMO After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [{
    name: "PromptShare App",
    description: "NEXT.JS APP, WHERE YOU CAN DISCOVER AND SHARE AI-POWERED PROMPTS TO GET 100% CORRECT RESULTS.",
    tags: [{
        name: "next.js 13",
        color: "orange-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "google-auth",
        color: "orange-text-gradient",
      },
    ],
    image: promptshare,
    source_code_link: "https://github.com/Jayesh60/promptshare-nextjs",
    hostlink: "https://promptshare.netlify.com"
  },

  
  
  {
    name: "Music Recommendation System",
    description: "IMPLEMENTED A CUTTING-EDGE SONG RECOMMENDATION SYSTEM USING FLET TECHNOLOGY. USING ADVANCED VECTORIZATION TECHNIQUES, I ALSO CREATED A WEB APP USING FLET",
    tags: [{
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "flet",
        color: "green-text-gradient",
      },
      {
        name: "data science",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/Jayesh60/Song-recommendations-system",
    hostlink:"",
  },
  {
    name: "Ellawhobird.com",
    description: "BUILD AN ATTRACTIVE AND CUSTOMIZED BUSINESS PORTFOLIO FOR MY CLIENT USING  REACTJS",
    tags: [{
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "freelance",
        color: "green-text-gradient",
      },
      {
        name: "business-portfolio",
        color: "pink-text-gradient",
      },
    ],
    image: ellawhobird,
    source_code_link: "https://github.com/Jayesh60/ellawhobird.com",
    hostlink: "https://ellawhobird.netlify.com"
  },
  {
    name: "Youtube Clone",
    description: "REACT YOUTUBE CLONE WITH THE BASIC FUNTIONALITIES LIKE SEARCH PAGE CONNECTION, URL DISPATCHER, DYNAMICITY AND STICKINESS. AND DIVIDING A PAGE INTO COMPONENETS, LIKE HEADER, FOOTER, SIDEBAR, ETC.",
    tags: [{
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Jayesh60/YoutubeUI",
    hostlink:"",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects
};