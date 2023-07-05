import Link from 'next/link';

const additionalProjects = [
  {
    id: 1,
    name: 'Intergalactic Space Escape',
    description: `An interactive escape room style game to be played right inside your terminal. Using arrow keys to navigate through each room with prompts and actions, it's up to you to find your way out.`,
    githubLink: 'https://github.com/Eddie-Kuo/intergalactic-space-escape',
    tech: ['Node.js', 'Express', 'Supertest', 'SQL'],
  },
  {
    id: 2,
    name: 'ChatGPT Messenger',
    description: `A fullstack chatting app utilizing Facebook Messenger UI and OpenAi for the ultimate chatting experience. Either start a chat with a registered user or ask ChatGPT what's on your mind. Current work in progress.`,
    githubLink: 'https://github.com/Eddie-Kuo/chatgpt-messenger',
    // deployedLink: 'https://whisper-theta.vercel.app/',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'MongoDb'],
  },
  {
    id: 3,
    name: 'Weather App',
    description: `A weather app built with Next.js in Typescript incorporating "country-state-city" + "open-meteo weather api" providing all the detailed information for weather conditions around the world!`,
    githubLink: 'https://github.com/Eddie-Kuo/weather-app',
    deployedLink: 'https://weather-app-mu-brown.vercel.app/',
    tech: ['Next.js', 'Typescript', 'Tremor', 'TailwindCSS'],
  },
];

export { additionalProjects };
