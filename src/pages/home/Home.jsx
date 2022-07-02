import "./home.css"
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
      </div>
    </div>
  );
};

export default Home;