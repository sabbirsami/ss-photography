import React from "react";
import notFound from "../../notFound.png";

const ErrorPage = () => {
    return (
        <div>
            <img
                className="w-75"
                style={{ hight: "95vh" }}
                src={notFound}
                alt=""
            />
        </div>
    );
};

export default ErrorPage;
