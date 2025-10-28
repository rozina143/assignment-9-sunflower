import { createBrowserRouter } from "react-router";
import MainLayout from "../page/MainLayout/MainLayout";
import { Children } from "react";
import Home from "../page/Home/Home";
import LoginIn from "../page/LoginIn/Login";
import Login from "../page/LoginIn/Login";
import SignUp from "../page/SignUp/SignUp";

export const router = createBrowserRouter ([
  {
    path: "/",
    Component: MainLayout,
     children: [ {
       path: "/",
        element:<Home></Home>,
       },
       { index: true, 
        path: "/login", 
       element: <Login></Login>,
    },
       { index: true, 
        path: "/signup", 
       element: <SignUp></SignUp>,
    },
      
      ]

  },
  
]);