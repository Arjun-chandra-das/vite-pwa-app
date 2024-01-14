import { createBrowserRouter } from "react-router-dom";
import Main from './../LayOut/Main';
import Home from "../component/Home/Home";
import About from "../component/About/About";
import User from "../component/User/User";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/user",
            element: <User />
        }
      ]
    }
  ]);