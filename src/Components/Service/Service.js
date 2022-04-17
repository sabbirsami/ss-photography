import React from "react";
import "../Services/Services.css";

const Service = ({ service }) => {
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
                    <button className="btn btn-primary rounded">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
