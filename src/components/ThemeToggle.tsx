import React from 'react';
import { useThemeStore } from '../store/themeStore.ts';
import '../scss/Layout/Layout.scss'
const ThemeToggle = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
const theme= useThemeStore((state) => state.theme)
  return (
    <button onClick={toggleTheme} className='toggle_btn'>
      {theme==='light' ? 'dark' : 'light'}
    </button>
  );
};

export default ThemeToggle;