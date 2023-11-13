import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Admin from './components/Admin.jsx'
import Add from './components/Add.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:   <App />

  },
  {
    path: "/admin",
    element:   <Admin />

  },
  {
    path: "/add",
    element:   <Add />

  },
  {
    path: "/update",
    element:   <Admin />

  },
  {
    path: "/delete",
    element:   <Admin />

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
