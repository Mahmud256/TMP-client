import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            // {
            //     path: '/login/auth',
            //     element: <LoginAuth></LoginAuth>
            // },
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // }
        ]
    },
]);
export default router;  