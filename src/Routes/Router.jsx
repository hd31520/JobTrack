import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";
import ComDetails from "../Pages/ComDetails/ComDetails";





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
            element: <ComDetails></ComDetails>

        }
    ]
  },
]);

export default router;