import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Home.css";
import Card from "../Card/Card";
import { useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
    
    const [categoryWiseData, setCategoryWiseData] = useState([]);

    const donations = useLoaderData();

    const handleSearchButton = ()=> {
        // console.log("just clicked the search button.");
        const searchInputField = document.getElementById("input-field");
        const inputFieldValue = searchInputField.value;
        searchInputField.value = "";
        // console.log(inputFieldValue);
        if(inputFieldValue === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please input me health or education or clothing or food. Do not keep me empty!",
              });
        }else if(!isNaN(inputFieldValue)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please input me health or education or clothing or food. Do not give me numeric value.",
              });
        }
        else{
            const categoryData = donations?.filter((item)=>(item.Category).toLowerCase() === inputFieldValue.toLowerCase());
            setCategoryWiseData(categoryData);
        } 
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