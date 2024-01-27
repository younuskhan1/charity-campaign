import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import ErrorElement from "../ErrorElement/ErrorElement";
import DonationDetailsPage from "../DonationDetailsPage/DonationDetailsPage";
const myCreatedRoutes = createBrowserRouter([
   {
    path : "/",
    element : <MainLayout></MainLayout>,
    errorElement : <ErrorElement></ErrorElement>,
    children :[
        {
            path : "/",
            loader: ()=>fetch("/donations.json"),
            element: <Home></Home>
        },
        {
            path : "/donation",
            element: <Donation></Donation>
        },
        {
            path : "/statistics",
            element: <Statistics></Statistics>
        },
        {
            path : "/donationDetailsPage/:id",
            loader: ()=>fetch("/donations.json"),
            element: <DonationDetailsPage></DonationDetailsPage>
        }
    ]
   }
])

export default myCreatedRoutes;