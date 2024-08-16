import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'


import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx';
import Projects from './Projects.jsx';
import Devlogs from './Devlogs.jsx';
import Artworks from './Artworks.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {

      }
    ]
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "devlogs",
    element: <Devlogs />,
  },
  {
    path: "artworks",
    element: <Artworks />,
  },
  {
    path: "contact",
    element: <Contact />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
