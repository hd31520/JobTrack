import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";
import ComDetails from "../Pages/ComDetails/ComDetails";


import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import PrivetRoutes from "./PrivetRoutes"





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<h1>This ois error</h1>,
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
          Component: Profile
        }
    ]
  },
]);

export default router;