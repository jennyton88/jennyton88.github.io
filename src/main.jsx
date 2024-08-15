import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import Home from './Home';
import Portfolio from './Portfolio';
import Projects from './Projects';
import Devlogs from './Devlogs';
import Artworks from './Artworks';
import Contact from './Contact';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home />
    <Portfolio />
    <Projects /> */}
    <Devlogs />
    {/* <Artworks />
    <Contact /> */}
    {/* <App /> */}
  </StrictMode>,
)
