import React from "react";

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="w-50 mx-auto pt-5">
                    <main class="form-signin">
                        <form>
                            <h1 class="h3 mb-3 fw-normal">Please Login</h1>

                            <div class="form-floating py-2">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating py-2">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
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
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Login;
