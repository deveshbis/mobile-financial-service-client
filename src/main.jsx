import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Root from './Root/Root';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Registration />,

//   },
//   {
//     path: "/login",
//     element: <Login/>,
//   }
// ]);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration/>,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
