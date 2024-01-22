import "./Navbar.css";
import image from "../../../public/Logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-parent">
           <img className="icon-image" src={image} alt="" />
           <div className="nav-bar-links">
              <NavLink to = "/" 
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
             }>Home</NavLink>
              <NavLink to = "/donation"  className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
             }>Donation</NavLink>
              <NavLink to = "/statistics"  className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
             }>Statistics</NavLink>
           </div>
        </div>
    );
};

export default Navbar;