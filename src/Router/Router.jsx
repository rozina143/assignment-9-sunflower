import { createBrowserRouter } from "react-router";
import MainLayout from "../page/MainLayout/MainLayout";
import Home from "../page/Home/Home";
import LoginIn from "../page/LoginIn/Login";
import Login from "../page/LoginIn/Login";
import SignUp from "../page/SignUp/SignUp";
import PrivateRout from "../privateRout/privateRout";
import Profile from "../profile/profile";
import Details from "../Details/Details";


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
       
       { index: true, 
        path: "/profile", 
       element: <PrivateRout><Profile></Profile></PrivateRout>,
    },
       { index: true, 
        path: "/skills/:id", 
       element: <PrivateRout><Details></Details></PrivateRout>,
    },
       
      
      ]
    


  },
  
]);