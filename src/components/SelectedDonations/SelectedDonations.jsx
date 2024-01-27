import PropTypes from 'prop-types'; // ES6
import "./SelectedDonations.css";

const SelectedDonations = ({element}) => {
    const {Title, Price, Picture, Color_for_text_and_button_background, Color_for_category_bg, Color_for_card_bg, Category} = element;
    return (
        <div className='selectedItemsGrandParent'>
            <div className='selectedItemsParent'>
                <div className='selectedDonationImageDiv'><img className='selectedDonationImage' src={Picture} alt="" /></div>
                <div className='selectedDonationTextDiv' style={{backgroundColor:Color_for_card_bg}}>
                    <div className='category-button-div'><button className='category-button' style={{color:Color_for_text_and_button_background, backgroundColor: Color_for_category_bg}}>{Category}</button></div>
                    <h3 className='selectedItemTitle'>{Title}</h3>
                    <p className='selectedItemPrice' style={{color:Color_for_text_and_button_background}}>$ {Price}<span>.00</span></p>
                    <button className='view-details-button' style={{background:Color_for_text_and_button_background}}>View Details</button>
                </div>
            </div>
        </div>
    );
};

SelectedDonations.propTypes={
    element:PropTypes.object.isRequired,
}

export default SelectedDonations;