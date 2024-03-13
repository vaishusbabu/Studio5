import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { t } = useTranslation();
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
        } else {
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

        // Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character,
        // no space, and it must be 8-16 characters long.
        if (!formData.password || !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(formData.password)) {
            newErrors.password = "Password is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const ErrorList = ({ errors }) => {
        if (!submitted || Object.keys(errors).length === 0) {
            return null;
        }
    };


    return (
        <div id="main-content">
            <div className="page-title en"></div>
            <div id="skipContent">
                <div id="main-container">
                    <div className="container">
                        <div className="center"></div>
                        <div className="row col-8">
                            <ErrorList errors={errors} />
                            <form name="login" className="login-form loginForm" autoComplete="on" onSubmit={handleSubmit}>
                                <h2>{t("navlogin")}</h2>
                                <div className="error-container fail">
                                    <h5>{t("prblm")}</h5>
                                    <ul className="error-list">
                                        {Object.values(errors).map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="input-field item">
                                    <input
                                        name="email"
                                        placeholder={t("pgmail")}
                                        autoComplete="no"
                                        className="fontEnglish"
                                        id="email"
                                        type="text"
                                        defaultValue=""
                                        onChange={handleOnChange}
                                    />
                                    <label htmlFor="email" style={{ left: 0, right: "auto" }}>
                                        {t("email")}
                                    </label>
                                </div>
                                <div className="input-field item">
                                    <input
                                        name="password"
                                        autoComplete="no"
                                        placeholder={t("pass")}
                                        id="pass"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        aria-label="show password"
                                        className="showEyes"
                                        value={showPassword}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                        <span> </span>
                                    </button>
                                    <label htmlFor="password" style={{ left: 0, right: "auto" }}>
                                        {t("password")}
                                    </label>
                                </div>
                                <div className="left-align">
                                    <Link className="underline-text" to="/forgot_password">
                                        <b>{t("forgot")}</b>
                                    </Link>
                                </div>
                                <div className="left-align btn-wrap">
                                    <button aria-label="login" className="btn blue login" type="submit">
                                        {t("navlogin")} <i className="material-icons en"></i>
                                    </button>
                                </div>
                                <div className="left-align">
                                    {t("donthve")}{" "}
                                    <Link className="underline-text" to="/register_home">
                                        <b>{t("signup")}</b>
                                    </Link>
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
