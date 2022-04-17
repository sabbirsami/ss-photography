import React from "react";

const Footer = () => {
    return (
        <div className="bg-dark bg-gradient p-5">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
                    <div className="col-md-4 d-flex align-items-center">
                        <p className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></p>
                        <span className="text-light">
                            &copy; 2021 Company, Inc
                        </span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <p className="text-light">Tweeter</p>
                        </li>
                        <li className="ms-3">
                            <p className="text-light">instagram</p>
                        </li>
                        <li className="ms-3">
                            <p className="text-light">facebook</p>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
