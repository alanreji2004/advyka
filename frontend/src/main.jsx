import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from './home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
