import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

const SingIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        userEmail,
        loadingEmail,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email);
    console.log(password);

    const navigate = useNavigate();
    let errorElement;
    if (error || emailError) {
        errorElement = (
            <div>
                <p>
                    Error: {error?.message} {emailError?.message}
                </p>
            </div>
        );
    }
    if (user || userEmail) {
        navigate("/");
    }
    const handleEmailVerification = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            toast("Email verification sent");
        });
    };

    const handleSingUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        handleEmailVerification();
    };
    return (
        <div>
            <div
                style={{ height: "72vh" }}
                className="container d-flex align-items-center"
            >
                <div className="w-50 mx-auto pt-5">
                    <main className="form-signin">
                        <form onSubmit={handleSingUp}>
                            <h1 className="h3 mb-3 fw-normal">Sing Up</h1>

                            <div className="form-floating pb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    // placeholder="user"
                                />
                                <label htmlFor="floatingInput">Your Name</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    onBlur={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label htmlFor="floatingInput">
                                    Email address
                                </label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    onBlur={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label htmlFor="floatingPassword">
                                    Password
                                </label>
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
                            <div className="p-3">
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login">Log In</Link>
                                </p>
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
                                Sing In With Google
                            </button>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SingIn;
