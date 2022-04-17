import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Login from "./Components/Login/Login";
import SiteNavbar from "./Components/Navbar/SiteNavbar";
import Services from "./Components/Services/Services";
import SingIn from "./Components/SingIn/SingIn";

function App() {
    return (
        <div className="App">
            <SiteNavbar></SiteNavbar>
            <Routes>
                <Route path="/" element={<Hero></Hero>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signin" element={<SingIn></SingIn>}></Route>
                <Route path="/services" element={<Services></Services>}></Route>
                <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
