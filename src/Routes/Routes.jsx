import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Booking from "../components/Booking/Booking";
import Destination from "../components/Destionation/Destination";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Profile from "../components/Profile/Profile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Booking></Booking>
            },
            // {
            //     path: '/destination',
            //     element: <Destination></Destination>
            // },
            {
                path: '/destination/:id',
                element: <Destination></Destination>,
                // element: <Booking></Booking>,
                loader: () => fetch('/travel.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default router;