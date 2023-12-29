import React, { Children, createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Appoinment from './Component/Appoinment';
import Login from './Component/Login';
import Login2 from './Component/Login2';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Home/> ,
      },
      {
        path: "Appoinment/",
        element:<Appoinment/> ,
      },
      {
        path: "SignIn/",
        element:<Login/> ,
      },
      {
        path: "SignUp/",
        element:<Login2/> ,
      },
      
    ],
  },
]);
export const ContextUser= createContext();

const Context =({children})=>{
  const [auth,setAuth]=useState({})
 
  return <ContextUser.Provider value={[auth,setAuth]}>
    {
      children
    }
  </ContextUser.Provider>
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
   
  
)
