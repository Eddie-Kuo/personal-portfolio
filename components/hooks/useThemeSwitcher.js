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
