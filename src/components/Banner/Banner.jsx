import PropTypes from 'prop-types'; // ES6
import "./Banner.css";

const Banner = ({handleSearchButton}) => {
    return (
        <div className="banner-parent ">
            <div className="background-image"></div> 
            <div className="banner-heading-parent">
                <p className="banner-heading">I Grow By Helping People In Need</p>
                <p className="input-button-parent">
                <input id='input-field' className="search-input-field" type="text" placeholder="Search here....."/>
                <button className="search-button" onClick={handleSearchButton}>Search</button></p>
            </div>
        </div>
    );
};

Banner.propTypes ={
    handleSearchButton:PropTypes.func.isRequired,
}
export default Banner;