import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Login from "./Components/Login/Login";
import SiteNavbar from "./Components/Navbar/SiteNavbar";

function App() {
    return (
        <div className="App">
            <SiteNavbar></SiteNavbar>
            <Routes>
                <Route path="/" element={<Hero></Hero>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
