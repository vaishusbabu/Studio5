import React, { useState } from 'react'

function Login() {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (validForm()) {
            console.log('formData check ', formData);
        }
        else {
            console.log("Form is invalid");
        }
    };

    const validForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        //Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.

        if (!formData.password || !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(formData.password)) {
            newErrors.password = "Password is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }
    const ErrorList = ({ errors }) => {
        if (!submitted || Object.keys(errors).length === 0) {
            return null;
        }

    }
    return (
        <div id="main-content">
            <div className="page-title en">

            </div>
            <div id="skipContent">
                <div id="main-container">

                    <div className="container">

                        <div className="center" />
                        <div className="row col-8">

                            <ErrorList errors={errors} />
                            <form name="login" className="login-form loginForm" autoComplete="on" onSubmit={handleSubmit}>
                                <h2>Login</h2>

                                <div className="error-container fail">
                                    <h5>
                                        There is a problem with the form, please check and correct the following:
                                    </h5>

                                    <ul className="error-list">
                                        {Object.values(errors).map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>

                                </div>
                                <div className="input-field item">
                                    <input
                                        name="email"
                                        placeholder="Type your email"
                                        autoComplete="no"
                                        className="fontEnglish"
                                        id="email"
                                        type="text"
                                        defaultValue=""
                                        onChange={handleOnChange}
                                    />
                                    <label htmlFor="email" style={{ left: 0, right: "auto" }}>
                                        Email
                                    </label>
                                    {/* {errors.email && <span className="error">{errors.email}</span>} */}
                                </div>
                                <div className="input-field item">
                                    <input
                                        name="password"
                                        autoComplete="no"
                                        placeholder="Type your password"
                                        id="password"
                                        className="fontEnglish"
                                        type="password"
                                        defaultValue=""
                                        onChange={handleOnChange}
                                    />
                                    <button
                                        type="button"
                                        aria-label="show password"
                                        className="showEyes"
                                    >
                                        <i className="fa fa-eye" aria-hidden="true" />
                                        <span>show password</span>
                                    </button>
                                    <label htmlFor="password" style={{ left: 0, right: "auto" }}>
                                        Password
                                    </label>
                                    {/* {errors.password && <span className="error">{errors.password}</span>} */}
                                </div>
                                <div className="left-align">
                                    <a className="underline-text" href="/forgot_password">
                                        <b>Forget Password?</b>
                                    </a>
                                </div>
                                <div className="left-align btn-wrap">
                                    <button aria-label="login" className="btn blue login" type="submit">
                                        Login <i className="material-icons en">arrow_forward</i>
                                    </button>
                                </div>
                                <div className="left-align">
                                    Don’t have an account?{" "}
                                    <a className="underline-text" href="/register_home">
                                        <b>Sign up</b>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
