import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import SiteNavbar from "./Components/Navbar/SiteNavbar";

function App() {
    return (
        <div className="App">
            <SiteNavbar></SiteNavbar>
            <Routes>
                <Route path="/" element={<Hero></Hero>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
