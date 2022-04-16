import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a
                            href="/"
                            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                        ></a>
                        <span className="text-muted">
                            &copy; 2021 Company, Inc
                        </span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                Tweeter
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                instagram
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                facebook
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
