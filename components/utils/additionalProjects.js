import Link from 'next/link';

const additionalProjects = [
  {
    id: 1,
    name: 'Honest Land - Freelance',
    description: `A Frontend freelance project built with Next.js 13, TailwindCSS, and Typescript. The client wanted a simple, clean, and modern landing page to showcase their business. I also implemented product analytics with PostHog to analyze overall website traction`,
    githubLink: 'https://github.com/Eddie-Kuo/honest-land',
    deployedLink: 'https://honest-land.vercel.app/',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'PostHog'],
    picture: '/images/honest-land.png',
    cover: '/images/sunflower-logo.png',
  },
  {
    id: 2,
    name: 'Weather App',
    description: `Mobile weather app built with React Native and Nativewind utilizing weather API. Focus of this project: Re familiarize with mobile development, API integrations, and Nativewind`,
    githubLink:
      'https://github.com/Eddie-Kuo/weather-app-react-native?tab=readme-ov-file',
    tech: ['React-Native Expo SDK 49', 'Javascript', 'Weather API'],
    picture: '/images/mobile-weather-app.png',
    cover: '/images/mobile-weather-app.png',
  },
  {
    id: 3,
    name: 'Facebook Messenger Clone',
    description: `A fullstack Facebook Messenger clone, built with Next.js, TailwindCSS, Typescript, and MongoDB. Users can create an account, login, and chat with other users in real time with Pusher.`,
    githubLink: 'https://github.com/Eddie-Kuo/chatgpt-messenger',
    deployedLink: 'https://chatgpt-messenger-mauve-nu.vercel.app/',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'MongoDb', 'Prisma'],
    picture: '/images/facebook-messenger.png',
    cover: '/images/messenger-logo.png',
  },
  {
    id: 4,
    name: 'Craft Course Learning AI',
    description: `A fullstack web application built to empower users in their learning journey with the help of AI. Users can enter a topic of choice and allow AI to generate detailed courses, chapters, and videos along with an end of course quiz to ensure proficiency on the given topic`,
    note: 'Application is currently unavailable due to PlanetscaleDB removing free tier. Migration of database is in the works.',
    githubLink: 'https://github.com/Eddie-Kuo/craft-course-learning-ai',
    tech: [
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'OpenAi',
      'PlanetscaleDB',
      'Prisma',
    ],
    picture: '/images/craft-course-pic.png',
    cover: '/images/ai-learning-logo.png',
  },
  {
    id: 5,
    name: 'Washington Gym - Freelance',
    description: `A frontend project showcasing a local gym in Houston, Texas.`,
    githubLink: 'https://github.com/Eddie-Kuo/washington-gym',
    deployedLink: 'https://bespoke-ganache-a22553.netlify.app',
    tech: ['HTML', 'CSS', 'Javascript', 'Netlify'],
    picture: '/images/wg-app.png',
    cover: '/images/gym-logo.png',
  },
];

export { additionalProjects };
