import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { guardian } from './JsonGuardian.js';
import { useTranslation } from 'react-i18next';
import Topline from './Topline.js';
import i18n from '../i18n.js';


function Guardian() {
    const currentLanguage = i18n.language
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        parentName: "",
        parentId: "",
        email: "",
        mobileNumber: "",
        agree: false
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (validateForm()) {
            console.log(formData);

        } else {
            console.log("Form is invalid");
        }
    };

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
        setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.parentName || !/^\w+\s+\w+/.test(formData.parentName)) {
            newErrors.parentName = "Parent name must contain at least two words.";
            isValid = false;
        }


        if (!formData.parentId || !/^\d{11}$/.test(formData.parentId)) {
            newErrors.parentId = "Parent ID is required.";
            isValid = false;
        }

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (!formData.mobileNumber || !/^\d{8}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = "Please enter a valid mobile number.";
            isValid = false;
        }

        if (!formData.agree) {
            newErrors.agree = "You must agree to the terms and conditions.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const ErrorList = ({ errors }) => {
        if (!submitted || Object.keys(errors).length === 0) {
            return null;
        }

        return (

            <div className="error-container fail">
                <h5>
                    {t("prblm")}
                </h5>

                <ul className="error-list">
                    {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>

            </div>
        );
    };


    return (
        <div>
            <div id="main-container">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div />
                            <h2
                                id="pageHeading"
                                role="heading"
                                tabIndex={0}
                                aria-label="page heading Register"
                            >
                                {t("reg")}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item">
                                <a href="/register_home">  {t("reg")}</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a tabIndex={0} aria-current="page" href="/guardian">
                                    <span>{t("gua")}</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="parent-color-container">
                    <span className="grey-square-rotate red-sq one" />
                    <span className="grey-square-rotate red-sq two" />
                    <span className="grey-square-rotate red-sq three" />
                    <span className="grey-square-rotate red-sq four" />
                    <span className="orange-circle one" />
                    <span className="orange-circle two" />
                    <span className="orange-circle three" />
                    <span className="multi-square one">
                        <b>
                            <i />
                        </b>
                    </span>
                    <span className="multi-square two">
                        <b>
                            <i />
                        </b>
                    </span>
                    <span className="multi-square three">
                        <b>
                            <i />
                        </b>
                    </span>
                </div>
                <div className="parent-registration-container">
                    <div id="skipContent" className="container registration-form">
                        <div className="registration-container">
                            <h2
                                id="registration-title"
                                className="primary-heading"
                                style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                            >
                                {t("are")}
                            </h2>
                            <div className="btn-wrap type-selection" id="skipContent">
                                <button aria-label="Are you Guardian" role="button" className="btn">
                                    <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/guardian">
                                        {" "}

                                        {t("gua")}
                                        {" "}
                                    </Link>

                                </button>
                                <button aria-label="Are you Student" className="btn">
                                    <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/student">
                                        {" "}
                                        {t("std")}{" "}
                                    </Link>
                                </button>
                                <button aria-label="Are you School" className="btn">
                                    <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/school">

                                        {t("scl")}
                                    </Link>
                                </button>
                                <button aria-label="Are you Volunteer" className="btn">
                                    <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/volunteer">
                                        {t("vol")}
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <h2
                            tabIndex={0}
                            aria-label="For Guardian form"
                            className="primary-heading"
                            style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                        >
                            {t("forg")}
                        </h2>
                        <div className="row">
                            <div className="col s6 form-container">
                                <p style={{ textAlign: 'left' }}>
                                    {t("req2")} <span className="asterisk">*</span>
                                </p>

                                <ErrorList errors={errors} />
                                <form autoComplete="no" onSubmit={handleSubmit}>
                                    {guardian.map((item) => {
                                        switch (item.type) {
                                            case "text":
                                            case "email":
                                                return (
                                                    <div className="input-field item" key={item.id}>
                                                        <input
                                                            name={item.name}
                                                            placeholder={item.placeholder}
                                                            id={item.id}
                                                            className={item.className}
                                                            type={item.type}
                                                            autoComplete={item.autoComplete}
                                                            defaultValue={item.defaultValue}
                                                            style={{ textAlign: "left" }}
                                                            onChange={handleOnChange}
                                                        />
                                                        <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
                                                            {item.label}
                                                        </label>
                                                        {/* {errors[item.name] && <span data-error={errors[item.name]}>{errors[item.name]}</span>} */}

                                                    </div>
                                                );
                                            case "number":
                                                return (
                                                    <div className="row mobile" key={item.id}>
                                                        <div className="col s4">
                                                            <div className="input-field item">
                                                                <input
                                                                    name="mobileNumber_country_code"
                                                                    placeholder="Country Code"
                                                                    className=""
                                                                    id="mobileNumber_country_code"
                                                                    type="text"
                                                                    minLength={3}
                                                                    maxLength={3}
                                                                    disabled
                                                                    value="+974"
                                                                    style={{ textAlign: "left" }}
                                                                    onChange={handleOnChange}
                                                                />
                                                                <label htmlFor="mobileNumber_country_code" className="active" style={{ left: 0, right: "auto" }}>
                                                                    Country Code *
                                                                </label>
                                                                <span className="helper-text" data-error="Enter a valid code." />
                                                            </div>
                                                        </div>
                                                        <div className="col s8">
                                                            <div className="input-field item">
                                                                <input
                                                                    name={item.name}
                                                                    placeholder={item.placeholder}
                                                                    id={item.id}
                                                                    className={item.className}
                                                                    maxLength={item.maxLength}
                                                                    type={item.type}
                                                                    aria-label={item.ariaLabel}
                                                                    autoComplete="no"
                                                                    defaultValue={item.defaultValue}
                                                                    style={{ textAlign: "left" }}
                                                                    onChange={handleOnChange}
                                                                />
                                                                <label htmlFor={item.id} style={{ left: 0, right: "auto" }}>
                                                                    {item.label} <span className="asterisk"> </span>
                                                                </label>
                                                                {/* 
                                                                {errors[item.name] && <span data-error={errors[item.name]}>{errors[item.name]}
                                                                </span>} */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            case "checkbox":
                                                return (
                                                    <div className="item subscribe-items" key={item.id}>
                                                        <p>
                                                            <input
                                                                name={item.name}
                                                                id={item.id}
                                                                type="checkbox"
                                                                className={item.className}
                                                                onChange={handleOnChange}
                                                            />
                                                            <label htmlFor={item.id}>
                                                                <span className="en">
                                                                    {item.label}
                                                                    <button
                                                                        type="button"
                                                                        aria-label="Read terms and condition"
                                                                        tabIndex={0}
                                                                        className="modal-trigger underline-text"
                                                                        style={{ border: 0, background: "none" }}
                                                                    >
                                                                        {" "}
                                                                        Terms and conditions
                                                                    </button>
                                                                </span>
                                                            </label>


                                                        </p>
                                                    </div>
                                                );
                                            default:
                                                return null;
                                        }
                                    })}
                                    <div className="btn-wrap">
                                        <button className="btn blue">Register</button>
                                    </div>
                                </form>

                            </div>
                            <div className="col s6" />
                            <div />
                        </div>
                    </div>
                </div>
                <div
                    id="termsAndConditionModal"
                    className="modal"
                    role="dialog"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{
                        zIndex: 1003,
                        display: "none",
                        opacity: 0,
                        top: "4%",
                        transform: "scaleX(0.8) scaleY(0.8)"
                    }}
                >
                    {/* <div className="modal-content ">
                        <span className="badge modalClose">
                            <button type="button" aria-label="close" tabIndex={0} className="close">
                                <i className="material-icons">close</i>
                            </button>
                        </span>
                        <h4>Terms and Conditions</h4>
                        <div className="description">
                            <p>
                                Ministry of Transport and Communications (MOTC) is committed to
                                protecting your privacy and providing a secure website environment.
                                MOTC does not collect personal information about you when you visit
                                our website unless you specifically and knowingly choose to provide
                                such information to us. Any personal information which you volunteer
                                will be treated with the highest standards of security and
                                confidentiality.
                            </p>
                            <p>
                                We will not use personal information you provide for commercial use.
                                Personal information will not be forwarded to third parties unless
                                MOTC is required by law or that entity is relevant to your enquiry.
                            </p>
                            <p>
                                This statement relates to our privacy practices in connection with
                                this website. We are not responsible for the content or privacy
                                practices o
                            </p>
                        </div>
                        <button className="modal-close waves-effect waves-green btn blue pull-right">
                            Agree
                        </button>
                    </div> */}
                </div>
                <Topline />
            </div >
        </div >
    )
}

export default Guardian