import React from "react";
import "../Login/Login.css";

const About = () => {
    return (
        <div style={{ height: "72vh" }}>
            <div className="container">
                <div className="pt-5">
                    <h1 className="fw-bold text-start p-2">About</h1>
                    <div className="single_border w-5"></div>
                    <div className="pt-4 ps-2">
                        <h2 className="h1 pb-3 pb-sm-2 text-uppercase fw-bold text-start">
                            My <span className="text-primary">Goal</span>{" "}
                        </h2>
                        <p className="w-50  text-start">
                            I want to be a Web Developer. I work hard to reach
                            my goal and I am fully focused on it because If you
                            want to be a successful programmer you will have to
                            focused. So I decided to say focus on my goal. And I
                            will do it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
