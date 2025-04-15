import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Header from './components/Header/Header.jsx';
import Root from './components/Root/Root.jsx';
import Footer from './components/Footer/Footer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root
  },

  {
    path: "/header",
    Component: Header
  },
  {
    path: "/footer",
    Component: Footer
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
   
  </StrictMode>,
)
