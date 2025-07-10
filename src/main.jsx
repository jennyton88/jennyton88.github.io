import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles.css';
import Log from './pages/Log.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Devlogs from './pages/Devlogs.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "projects",
    element: <Projects />,
    errorElement: <Error />,
  },
  {
    path: "devlogs",
    element: <Devlogs />,
    errorElement: <Error />,
  },
  {
    path: "devlogs/log/:log_id",
    element: <Log />,
    errorElement: <Error />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <Error />,
  }
], {
  basename: '/',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
