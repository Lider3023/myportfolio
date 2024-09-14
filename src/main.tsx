import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { useThemeStore } from './store/themeStore.ts';
import { router } from './routes';
import './scss/main.scss';

const AppWrapper = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={theme}> 
      <RouterProvider router={router} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppWrapper />
);