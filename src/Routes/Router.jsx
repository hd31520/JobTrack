import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root/Root";
import Home from "./Home/Home";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<h1>This ois error</h1>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            
        }
    ]
  },
]);

export default router;