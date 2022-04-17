import React from "react";

const SingIn = () => {
    return (
        <div>
            <div
                style={{ height: "75vh" }}
                className="container d-flex align-items-center"
            >
                <div className="w-50 mx-auto pt-5">
                    <main className="form-signin">
                        <form>
                            <h1 className="h3 mb-3 fw-normal">Sing in</h1>

                            <div className="form-floating pb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Your Name</label>
                            </div>
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
                            <button
                                className="w-100 btn btn-lg btn-primary py-2"
                                type="submit"
                            >
                                Sign in
                            </button>
                            <div className="d-flex align-items-center pt-3">
                                <div className="single_border"></div>
                                <h5>OR</h5>
                                <div className="single_border"></div>
                            </div>
                            <button className="btn btn-light w-100 border border-2 border-primary mb-2">
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
