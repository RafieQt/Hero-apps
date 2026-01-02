import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './assets/Pages/Home.jsx';
import MainLayout from './MainLayout.jsx';
import Applications from './assets/Pages/Applications.jsx';
import AppDetails from './assets/Pages/AppDetails.jsx';

import ErrorLayout from './ErrorLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorLayout></ErrorLayout>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader: ()=>fetch("/data.json")
      },
      {
        path:"Applications",
        element:<Applications></Applications>,
        loader: ()=> fetch("/data.json")
      },{
        path:"Applications/:id",
        element:<AppDetails></AppDetails>,
        loader: ()=> fetch("/data.json")
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
