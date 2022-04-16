import React from "react";
import Services from "../Services/Services";
import "./Hero.css";

const Hero = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-info">
                            <h1 className="fs-7 text-start">
                                Get Best Wedding Picture
                            </h1>
                            <p className="text-start w-75">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolorum fugiat quaerat eaque
                                exercitationem. Quo asperiores iure facere totam
                                libero harum?
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-img ">
                            <img
                                className=" rounded-pill w-100 p-5"
                                src={
                                    "https://i.ibb.co/jLVk9JY/10-Best-Wedding-Website-Temkkkkplates-For-Your-Special-Day-copy.jpg"
                                }
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Hero;
