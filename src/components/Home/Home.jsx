import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Home.css";
import Card from "../Card/Card";
import { useState } from "react";

const Home = () => {
    
    const [categoryWiseData, setCategoryWiseData] = useState([]);

    const donations = useLoaderData();
    const handleSearchButton = ()=> {
        // console.log("just clicked the search button.");
        const searchInputField = document.getElementById("input-field");
        const inputFieldValue = searchInputField.value;
        searchInputField.value = "";
        // console.log(inputFieldValue);
        const categoryData = donations?.filter((item)=>(item.Category).toLowerCase() === inputFieldValue.toLowerCase());
        setCategoryWiseData(categoryData);
    }

    // console.log(donations);
    return (
        <div className="home-parent">
            <Banner handleSearchButton = {handleSearchButton}></Banner>
            <div className="cards-parent">
               {
                categoryWiseData?.length ? categoryWiseData?.map((donate,index) => <Card key={index} donate={donate}></Card>) :
                donations?.map((donate, index) => <Card key={index} donate = {donate}></Card>)
               
               }
            </div>
        </div>
    );
};

export default Home;