import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-parent">
            <Banner></Banner>
            <h1>This is our Home page</h1>
        </div>
    );
};

export default Home;