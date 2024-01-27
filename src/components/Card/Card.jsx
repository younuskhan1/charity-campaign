import PropTypes from 'prop-types'; // ES6
import "./Card.css"
import { Link } from 'react-router-dom';

const Card = ({donate}) => {
    // console.log(donate);
    // const handleDonateElements = (donation) =>{
    //     console.log("I donated the elements",(donation));
    // }
   const {card_id,Title, Picture, Color_for_text_and_button_background, Color_for_category_bg, Color_for_card_bg, Category} = donate;
    return (
        <div className='card-parent'>
            <Link to={`/donationDetailsPage/${card_id}`}>
                <div className='each-card' style={{background: Color_for_card_bg}}>
                <img className='card-image' src={Picture} alt="" />
                    <div>
                        <button className='category-button' style={{backgroundColor: Color_for_category_bg, color:Color_for_text_and_button_background}}>{Category}</button>
                        <h3 className='card-title' style={{color:Color_for_text_and_button_background}}>{Title}</h3>
                    </div>
                </div>
            </Link>
        </div>  
    ); 
};

Card.propTypes = {
    donate:PropTypes.object.isRequired,
}
export default Card;