import React from "react";
import { Link } from "react-router-dom";

const GoToAbout = () => {
    return (
        <div className="py-5">
            <section className="container mb-1 mb-md-3 mb-lg-4">
                <div className="bg-light rounded-3 overflow-hidden  shadow">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-md-5 offset-lg-1">
                            <div className="pt-5 pb-3 pb-md-5 px-4 px-lg-0 text-center text-md-start">
                                <p className="lead mb-3">Want to know more?</p>
                                <h2 className="h1 pb-3 pb-sm-4">
                                    Take a look to{" "}
                                    <span className="text-primary">About</span>{" "}
                                    section to know more.
                                </h2>
                                <Link
                                    to="/about"
                                    className="btn btn-primary btn-lg bg-gradient rounded-pill"
                                >
                                    Go To About
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 offset-xl-1">
                            <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100">
                                <svg
                                    className="d-none d-md-block position-absolute top-50 start-0 translate-middle-y"
                                    height="868"
                                    style={{
                                        minWidth: "868px",
                                        width: "868",
                                        height: "868",
                                    }}
                                    viewBox="0 0 868 868"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        opacity="0.15"
                                        cx="434"
                                        cy="434"
                                        r="434"
                                        fill="#6366F1"
                                    />
                                </svg>
                                <img
                                    src={"https://i.ibb.co/wQkRG7y/cta.png"}
                                    className="position-relative zindex-3 mb-2 my-lg-4"
                                    width="382"
                                    alt="Illustration"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GoToAbout;
