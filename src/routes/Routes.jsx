import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Dashboard from "../page/Dashboard/Dashboard"
import PrivateRoute from "./PrivateRoute";
import LoginAuth from "../page/Login/LoginAuth";
import CreateTask from "../components/CreateTask/CreateTask";
import UpdateTask from "../components/UpdateTask/UpdateTask";
import MyTask from "../page/MyTask/MyTask";
import AboutUs from "../page/AboutUs/AboutUs";
import ContactUs from "../page/ContactUs/ContactUs";
import Details from "../page/Details/Details";

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
            },
            {
                path: '/login/auth',
                element: <LoginAuth></LoginAuth>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/mytask',
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>,
                loader: () => fetch('https://tmp-server-zeta.vercel.app/task')
            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('https://tmp-server-zeta.vercel.app/task')
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                loader: () => fetch('https://tmp-server-zeta.vercel.app/task')
            },
            {
                path: '/create',
                element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
            },
            {
                path: '/updatetask/:id',
                element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tmp-server-zeta.vercel.app/task/${params.id}`)
            }
        ]
    },
]);
export default router;  