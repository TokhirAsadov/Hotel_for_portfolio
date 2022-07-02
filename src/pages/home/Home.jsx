import "./home.css"
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
      </div>
    </div>
  );
};

export default Home;