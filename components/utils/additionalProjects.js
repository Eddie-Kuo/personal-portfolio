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
    name: 'Facebook Messenger Clone',
    description: `A fullstack Facebook Messenger clone, built with Next.js, TailwindCSS, Typescript, and MongoDB. Users can create an account, login, and chat with other users in real time with Pusher.`,
    githubLink: 'https://github.com/Eddie-Kuo/chatgpt-messenger',
    deployedLink: 'https://chatgpt-messenger-mauve-nu.vercel.app/',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'MongoDb'],
    picture: '/images/facebook-messenger.png',
    cover: '/images/messenger-logo.png',
  },
  {
    id: 3,
    name: 'Global Weather App',
    description: `A weather app built with Next.js in Typescript incorporating "country-state-city" + "open-meteo weather api" providing all the detailed information for weather conditions around the world!`,
    githubLink: 'https://github.com/Eddie-Kuo/weather-app',
    deployedLink: 'https://weather-app-mu-brown.vercel.app/',
    tech: ['Next.js', 'Typescript', 'Tremor', 'TailwindCSS'],
    picture: '/images/weather-app.png',
    cover: '/images/weather-logo.png',
  },
  {
    id: 4,
    name: 'Craft Course Learning AI',
    description: `A fullstack web application built with Next.js, Typescript, TailwindCSS integrated with OpenAI & Youtube's API to allow users the power to generate full courses with detailed chapters along with end of module quizzes to better their learning on any given topic of choice.`,
    githubLink: 'https://github.com/Eddie-Kuo/craft-course-learning-ai',
    tech: ['Next.js', 'Typescript', 'TailwindCSS', 'OpenAi'],
    picture: '/images/craft-course.png',
    cover: '/images/ai-learning-logo.png',
  },
];

export { additionalProjects };
