import React from "react";

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
                        <img className="w-100" src={img} alt="" />
                        <h1>{price}</h1>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{about}</p>
                        {services.map((ourServices) => (
                            <li>{ourServices}</li>
                        ))}
                    </div>
                    <button className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
