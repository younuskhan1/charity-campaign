import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Home.css";
import Card from "../Card/Card";

const Home = () => {
    const donations = useLoaderData();
    // console.log(donations);
    return (
        <div className="home-parent">
            <Banner></Banner>
            <div className="cards-parent">
               {

                donations?.map((donate, index) => <Card key={index} donate = {donate}></Card>)
               
               }
            </div>
        </div>
    );
};

export default Home;