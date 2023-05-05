import React, { useEffect } from 'react';

export default function useThemeSwitcher() {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = React.useState('light');

  // if user has previously visited the site or has a preference set in local storage - set the theme accordingly
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

  // setting the mode when toggled
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
