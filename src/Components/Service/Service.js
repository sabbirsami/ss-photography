import React from "react";
import { Link } from "react-router-dom";
import "../Services/Services.css";

const Service = ({ service, addToCart }) => {
    const { price, name, about, services, img } = service;
    return (
        <div className="col-lg-3 p-2">
            <div className="card_section">
                <div
                    className="card_style card"
                    style={{ backgroundColor: "#F6F6F6" }}
                >
                    <div className="card-body text-start">
                        <img className="w-100 rounded-3" src={img} alt="" />
                        <h1 className="py-2 fw-bold">{price}</h1>
                        <h4 className="card-title fw-bold">{name}</h4>
                        <p className="card-text">{about}</p>
                        <ul>
                            {services.map((ourServices) => (
                                <li>{ourServices}</li>
                            ))}
                        </ul>
                    </div>
                    <Link
                        to={`/checkout/`}
                        className="btn btn-primary p-2 bg-gradient rounded-bottom"
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
