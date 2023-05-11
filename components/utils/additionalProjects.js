import Link from 'next/link';

const additionalProjects = [
  {
    id: 1,
    name: 'Intergalactic Space Escape',
    description: `An interactive escape room style game to be played right inside your terminal. Using arrow to navigate through each room with prompts and actions, it's up to you to find your way out.`,
    githubLink: 'https://github.com/Eddie-Kuo/intergalactic-space-escape',
    tech: ['NodeJs', 'Express', 'Supertest'],
  },
  {
    id: 2,
    name: 'Whisper Chatting App',
    description: `A fullstack chatting app utilizing Google OAuth and Upstash Redis for real-time messaging along with full friend list features. Add me through 'eddiekuo97@gmail.com' to try it out!`,
    githubLink: 'https://github.com/Eddie-Kuo/whisper',
    deployedLink: 'https://whisper-theta.vercel.app/',
    tech: ['NextJS', 'TailwindCSS', 'TypeScript'],
  },
  {
    id: 3,
    name: 'Number Guessing Game',
    description: `A number guessing game built with React-Native through Expo where your phone tries to guess the number you've input by providing it with higher or lower hints. `,
    githubLink: 'https://github.com/Eddie-Kuo/Number-Guessing-Game-RN',
    tech: ['React-Native', 'Expo'],
  },
];

export { additionalProjects };
