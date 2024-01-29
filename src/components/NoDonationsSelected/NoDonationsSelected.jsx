import { Link } from "react-router-dom";
import "./NoDonationsSelected.css";
const NoDonationsSelected = () => {
    return (
        <div>
            <div className="no-donation-selected">
                <p className="no-donation-heading">You have donated nothing yet...</p>
                <div className="go-to-home-button-div"> <Link to = "/"><button className="go-to-home">Go to Home</button></Link> </div>
            </div>
        </div>
    );
};

export default NoDonationsSelected;