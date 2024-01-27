import { useLoaderData, useParams } from "react-router-dom";
import "./DonationDetailsPage.css";

const DonationDetailsPage = () => {
    const {id} = useParams();
     // console.log(id);
    const donationData = useLoaderData();
    // console.log(donationData);
    const singleDonatedElement = donationData?.find((donation)=> donation.card_id === id);
    console.log(singleDonatedElement);
    const {Picture, Price, Title, Color_for_text_and_button_background,Description} =singleDonatedElement;
    return (
        <div className="details-donation-parent">
            <div className="donation-details-image-div">
                <img className="details-image" src={Picture} alt="" />
                <p className="image-overlay-part"></p>
                <div className="donation-button-div"><button className="donation-button" style={{ backgroundColor:Color_for_text_and_button_background}}>Donate $ {Price}</button></div>
            </div>
            <h2 className="details-title">{Title}</h2>
            <p className="details-description">{Description}</p>
        </div>
       
    );
};

export default DonationDetailsPage;