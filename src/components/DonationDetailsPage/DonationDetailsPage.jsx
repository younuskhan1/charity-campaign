import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./DonationDetailsPage.css";
import { addDonationsToLocalStorage, getStoredItemsFromLocalStorage } from "../LocalStorage/LocalStorage";

const DonationDetailsPage = () => {
     
    const handleDonateElements=(card_id)=>{

        const alreadyStoredItems = getStoredItemsFromLocalStorage();
        for (let storedItem of alreadyStoredItems){
            if(storedItem === card_id){
                return toast.warn("You cannot donate the same item for twice.",{
                    position: "top-center",
                    theme: "colored",     
                });
            }
        }
        addDonationsToLocalStorage(card_id);
        toast.success("Congratulations ! you have donated this amount successfully.",{
                position: "top-center",
                theme: "colored",   
        });
        
            
    }
    // console.log(donatedItems);
    const {id} = useParams();
     // console.log(id);
    const donationData = useLoaderData();
    // console.log(donationData);
    const singleDonatedElement = donationData?.find((donation)=> donation.card_id === id);
    // console.log(singleDonatedElement);
    const {card_id,Picture, Price, Title, Color_for_text_and_button_background,Description} = singleDonatedElement;
    return (
        <div className="details-donation-parent">
            <div className="donation-details-image-div">
                <img className="details-image" src={Picture} alt="" />
                <p className="image-overlay-part"></p>
                <div className="donation-button-div"><button className="donation-button" style={{ backgroundColor:Color_for_text_and_button_background}}onClick={()=>handleDonateElements(card_id)}>Donate $ {Price}</button></div>
            </div>
            <h2 className="details-title">{Title}</h2>
            <p className="details-description">{Description}</p>
            <ToastContainer />
        </div>
       
    );
};

export default DonationDetailsPage;