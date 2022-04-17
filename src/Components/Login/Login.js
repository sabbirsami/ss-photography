import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        navigate("/");
    }
    return (
        <div>
            <div
                style={{ height: "75vh" }}
                className="container d-flex align-items-center"
            >
                <div className="w-50 mx-auto pt-5">
                    <main className="form-signin">
                        <form>
                            <h1 className="h3 mb-3 fw-normal p-2">
                                Please Login
                            </h1>

                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    required
                                />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    required
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <small className="text-danger text-start">
                                {errorElement}
                            </small>
                            <button
                                className="w-100 btn btn-lg btn-primary py-2"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </form>
                        <div className="p-3">
                            <Link to="/signin">Create an account</Link>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="single_border"></div>
                            <h5>OR</h5>
                            <div className="single_border"></div>
                        </div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-light w-100 border border-2 border-primary mb-2"
                        >
                            Log In With Google
                        </button>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Login;
