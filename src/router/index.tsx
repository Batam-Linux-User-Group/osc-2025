import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';
import FormRegister from '../pages/FormRegisterPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/daftar',
      element: <FormRegister />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_PATH || '',
  }
);

export default router;
