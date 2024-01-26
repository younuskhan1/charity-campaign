import "./Navbar.css";
import image from "../../../public/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-parent">
           <nav>
            <input type="checkbox" id="check" />
            <label htmlFor ="check" className="checkBtn">
              <i className="fa-solid fa-bars"></i>
            </label>
            <img className="icon-image" src={image} alt="" />
            <ul>
                <li><NavLink to = "/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} >Home</NavLink></li>
                <li><NavLink to = "/donation"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} >Donation</NavLink></li>
                <li><NavLink to = "/statistics"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" } >Statistics</NavLink></li>
            </ul>
           </nav>
        </div>
    );
};

export default Navbar;

