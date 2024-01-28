import { Link } from "react-router-dom";
import "./NoDonationsSelected.css";
const NoDonationsSelected = () => {
    return (
        <div>
            <div className="no-donation-selected">
                <h1>You have donated nothing yet...</h1>
                <div className="go-to-home-button-div"> <Link to = "/"><button className="go-to-home">Go to Home</button></Link> </div>
            </div>
        </div>
    );
};

export default NoDonationsSelected;