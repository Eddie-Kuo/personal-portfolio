import React, { useState, useEffect } from 'react';

export default function useThemeSwitcher() {
  const preferDarkQuery = '(prefer-color-scheme: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const userPref = window.localStorage.getItem('theme');
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia(preferDarkQuery).matches)
    ) {
      document.documentElement.classList.add('dark');
      setMode(userPref);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return [mode, setMode];
}

// export default function useThemeSwitcher() {
//   // media query to check the users preference
//   const preferDarkQuery = '(prefers-color-scheme:dark)';
//   const [mode, setMode] = useState('');

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     //store user preference in local storage
//     const userPref = window.localStorage.getItem('theme');

//     function handleChange() {
//       // if there is a user preference - check if user preference is dark or light
//       // set the theme accordingly
//       if (userPref) {
//         let check = userPref === 'dark' ? 'dark' : 'light';
//         setMode(check);
//         // if check is dark, add dark class
//         if (check === 'dark') {
//           document.documentElement.classList.add('dark');
//         } else {
//           document.documentElement.classList.remove('dark');
//         }
//       } else {
//         // if user has a preference and matches set state accordingly
//         let check = mediaQuery.matches ? 'dark' : 'light';
//         setMode(check);

//         if (check === 'dark') {
//           document.documentElement.classList.add('dark');
//         } else {
//           document.documentElement.classList.remove('dark');
//         }
//       }
//     }
//     // listen for changes in media query
//     mediaQuery.addEventListener('change', handleChange);

//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, []);

//   // update the local storage when mode is changed
//   useEffect(() => {
//     if (mode === 'dark') {
//       window.localStorage.setItem('theme', 'dark');
//       document.documentElement.classList.add('dark');
//     }
//     if (mode === 'light') {
//       window.localStorage.setItem('theme', 'light');
//       document.documentElement.classList.remove('dark');
//     }
//   }, [mode]);

//   return [mode, setMode];
// }
