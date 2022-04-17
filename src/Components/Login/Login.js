import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <div>
            <div
                style={{ height: "75vh" }}
                className="container d-flex align-items-center"
            >
                <div className="w-50 mx-auto pt-5">
                    <main class="form-signin">
                        <form>
                            <h1 class="h3 mb-3 fw-normal p-2">Please Login</h1>

                            <div class="form-floating">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    required
                                />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    required
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button
                                class="w-100 btn btn-lg btn-primary py-2"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </form>
                        <div className="p-3">
                            <Link to="/signin">Create an account</Link>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Login;
