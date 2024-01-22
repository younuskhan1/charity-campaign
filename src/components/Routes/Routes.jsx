import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import ErrorElement from "../ErrorElement/ErrorElement";
const myCreatedRoutes = createBrowserRouter([
   {
    path : "/",
    element : <MainLayout></MainLayout>,
    errorElement : <ErrorElement></ErrorElement>,
    children :[
        {
            path : "/",
            element: <Home></Home>
        },
        {
            path : "/donation",
            element: <Donation></Donation>
        },
        {
            path : "/statistics",
            element: <Statistics></Statistics>
        }
    ]
   }
])

export default myCreatedRoutes;