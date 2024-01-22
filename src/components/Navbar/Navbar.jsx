import "./Navbar.css";
// import image from "../../../public/Logo.png";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <input type="checkbox" id="check" />
            <label htmlFor ="check" className="checkBtn">
              <i className="fa-solid fa-bars"></i>
            </label>
           <nav>
            <label className="logo">DesignX</label>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Donation</a></li>
                <li><a href="#">Statistics</a></li>
            </ul>
           </nav>
        </div>
    );
};

export default Navbar;




{/* <img className="icon-image" src={image} alt="" />
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
           </div> */}