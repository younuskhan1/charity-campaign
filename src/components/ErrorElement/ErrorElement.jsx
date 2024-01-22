import { Link } from "react-router-dom";
import image from "../../images/no-data-found.jpg";
import "./ErrorElement.css";
const ErrorElement = () => {
    return (
        <div >
            <div className="no-data-found-parent"><img className="no-data-image" src={image} alt="" /></div>
            <p className="no-data-found">No Data Found...</p>
            <div className="go-to-home-button-div"> <Link to = "/"><button className="go-to-home">Go to Home</button></Link> </div>
        </div>
       
    );
};

export default ErrorElement;