import React, { useEffect, useState } from "react";
import Checkout from "../Checkout/Checkout";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="py-4">
            <h1 className="p-4">Our Services</h1>
            <div className="container">
                <div className="row">
                    {services.map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
