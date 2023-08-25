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
  },
  {
    id: 2,
    name: 'Facebook Messenger Clone',
    description: `A fullstack Facebook Messenger clone, built with Next.js, TailwindCSS, Typescript, and MongoDB. Users can create an account, login, and chat with other users in real time with Pusher.`,
    githubLink: 'https://github.com/Eddie-Kuo/chatgpt-messenger',
    deployedLink: 'https://chatgpt-messenger-mauve-nu.vercel.app/',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'MongoDb'],
    picture: '/images/facebook-messenger.png',
  },
  {
    id: 3,
    name: 'Global Weather App',
    description: `A weather app built with Next.js in Typescript incorporating "country-state-city" + "open-meteo weather api" providing all the detailed information for weather conditions around the world!`,
    githubLink: 'https://github.com/Eddie-Kuo/weather-app',
    deployedLink: 'https://weather-app-mu-brown.vercel.app/',
    tech: ['Next.js', 'Typescript', 'Tremor', 'TailwindCSS'],
    picture: '/images/weather-app.png',
  },
];

export { additionalProjects };
