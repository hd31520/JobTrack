import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";
import ComDetails from "../Pages/ComDetails/ComDetails";


import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import PrivetRoutes from "./PrivetRoutes"
import Templates from "../Pages/Templates/Templates";
import Forget from "../Pages/ForgetPage/Forget";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'company/:id',
            element: <PrivetRoutes><ComDetails></ComDetails></PrivetRoutes>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path:'profile',
          element: <PrivetRoutes><Profile></Profile></PrivetRoutes>
        },
        {
          path:'templates',
          element: <Templates></Templates>
        },
        {
          path: 'forget',
          element:<Forget></Forget>
        }
    ]
  },
]);

export default router;