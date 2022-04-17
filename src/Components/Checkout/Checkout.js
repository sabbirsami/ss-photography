import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = (props) => {
    const { id } = useParams();

    return (
        <div>
            <h1>{id}</h1>
            <h3>{props.name}</h3>
            <h1>Checkout Service</h1>
        </div>
    );
};

export default Checkout;
