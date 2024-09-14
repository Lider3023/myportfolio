import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/skills', element: <Skills /> },
      { path: '/about', element: <About /> },
    ],
  },
]);


