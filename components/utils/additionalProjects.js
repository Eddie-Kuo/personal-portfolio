import Link from "next/link";

const additionalProjects = [
  {
    id: 1,
    name: "Honest Land - Freelance",
    description: `A frontend freelance project built with Next.js 13, TailwindCSS, and Typescript. The client wanted a simple, clean, and modern landing page to showcase their business.`,
    githubLink: "https://github.com/Eddie-Kuo/honest-land",
    deployedLink: "https://honest-land.vercel.app/",
    tech: ["Next.js", "TailwindCSS", "TypeScript", "PostHog"],
    picture: "/images/Honest-cover.png",
    cover: "/images/sunflower-logo.png",
  },
  {
    id: 2,
    name: "Weather App",
    description: `Mobile weather app built with React Native and Nativewind utilizing weather API. Focus of this project: Re familiarize with mobile development, API integrations, and Nativewind`,
    githubLink:
      "https://github.com/Eddie-Kuo/weather-app-react-native?tab=readme-ov-file",
    tech: ["React-Native Expo SDK 49", "Javascript", "Weather API"],
    picture: "/images/Weather-cover-v2.png",
    cover: "/images/mobile-weather-app.png",
  },

  {
    id: 5,
    name: "Washington Gym - Freelance",
    description: `A frontend project showcasing a local gym in Houston, Texas.`,
    githubLink: "https://github.com/Eddie-Kuo/washington-gym",
    deployedLink: "https://bespoke-ganache-a22553.netlify.app",
    tech: ["HTML", "CSS", "Javascript", "Netlify"],
    picture: "/images/WG-cover.jpg",
    cover: "/images/gym-logo.png",
  },
  {
    id: 3,
    name: "Facebook Messenger Clone",
    description: `A fullstack Facebook Messenger clone built with Next.js, TailwindCSS, Typescript, and MongoDB. Built with the intention of practicing UI skills with the replication of a popular web app using modern technologies and to learn about backend development.`,
    githubLink: "https://github.com/Eddie-Kuo/chatgpt-messenger",
    deployedLink: "https://chatgpt-messenger-mauve-nu.vercel.app/",
    tech: ["Next.js", "TailwindCSS", "TypeScript", "MongoDb", "Prisma"],
    picture: "/images/Messenger-cover.jpg",
    cover: "/images/messenger-logo.png",
  },
];

export { additionalProjects };
