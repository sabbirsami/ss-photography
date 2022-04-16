import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroCarousel from "./Componnents/HeroCarousel/HeroCarousel";
import SiteNavbar from "./Componnents/Navbar/SiteNavbar";

function App() {
    return (
        <div className="App">
            <SiteNavbar></SiteNavbar>
            <Routes>
                <Route path="/" element={<HeroCarousel></HeroCarousel>}></Route>
            </Routes>
        </div>
    );
}

export default App;
