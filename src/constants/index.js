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
];

const services = [{
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Data Science Enthusiast",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
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
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [{
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
  // {
  //   name: "NFT Showcase App",
  //   description: "A WEB-APP PLATFORM THAT SHOWCASES THE NFT'S FROM OPENSEA'S OFFICIAl WEBSITE DIRECTLY WITH THE HELP OF AN API",
  //   tags: [{
  //       name: "react",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "opensea",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/Jayesh60/CryptoWeb3",
  // },
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
    image: jobit,
    source_code_link: "https://github.com/Jayesh60/Song-recommendations-system",
    hostlink:"",
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