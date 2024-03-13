import i18n from "../i18n";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { volunteer } from "./JsonVolunteer";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Topline from "./Topline";

function Volunteer() {
    const { t } = useTranslation();
    const [startDate, setStartDate] = useState();

    const [formData, setFormData] = useState({
        name: "",
        nameArabic: "",
        qid: "",
        gender: "",
        email: "",
        mobile: "",
        agree: false
    })

    const currentLanguage = i18n.language;

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
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
        setErrors({ ...errors, [name]: "" });
    }

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        //contain atleast2 words
        if (!formData.name || !/^\w+\s+\w+/.test(formData.name)) {
            newErrors.name = "Name must contain at least two words.";
            isValid = false;
        }
        if (!formData.qid || !/^\d{11}$/.test(formData.qid)) {
            newErrors.qid = "QID is required";
            isValid = false;

        }

        if (!formData.gender) {
            newErrors.gender = 'Gender is required';
            isValid = false;
        }
        // if (!formData.dob) {
        //     newErrors.dob = 'Date of birth is required';
        //     isValid = false;
        // }

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (!formData.mobile || !/^\d{8}$/.test(formData.mobile)) {
            newErrors.mobile = "Please enter a valid mobile number.";
            isValid = false;
        }
        if (!formData.agree) {
            newErrors.agree = 'You must agree to the terms and conditions';
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
                                <a href="/register_home"> {t("reg")}</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a tabIndex={0} aria-current="page" href="/volunteer">
                                    <span> {t("vol")}</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="volunteer-color-container">
                    <span className="grey-square-rotate red-sq one" />
                    <span className="grey-square-rotate red-sq two" />
                    <span className="grey-square-rotate red-sq three" />
                    <span className="orange-circle one" />
                    <span className="orange-circle two" />
                    <span className="orange-circle three" />
                    <span className="orange-circle four" />
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
                        aria-label="For Volunteer form"
                        className="primary-heading"
                    >
                        {t("fvol")}
                    </h2>
                    <div className="row">
                        <div className="col s6 form-container">
                            <p>
                                {t("req2")}
                                <span className="asterisk">*</span>
                            </p>
                            <ErrorList errors={errors} />
                            <form autoComplete="no" onSubmit={handleSubmit}>
                                {volunteer.map((item) => {
                                    switch (item.type) {
                                        case "text":
                                        case "email":
                                            return (
                                                <div className="input-field item">
                                                    <input
                                                        key={item.id}
                                                        name={item.name}
                                                        placeholder={t(item.placeholder)}
                                                        id={item.id}
                                                        className={item.className}
                                                        type={item.type === "text" ? "text" : "email"}
                                                        autoComplete={item.autoComplete}
                                                        defaultValue={item.defaultValue}
                                                        style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                                                        onChange={handleInputChange}
                                                    />

                                                    <label htmlFor="parentId" style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right', left: currentLanguage === 'en' ? 0 : 'auto', right: currentLanguage === 'en' ? 'auto' : 0 }}>
                                                        {t(item.label)}
                                                    </label>
                                                    <span
                                                        className="helper-text"
                                                        data-error="Required field."
                                                        style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                                                    />
                                                </div>

                                            );

                                        case "radio":
                                            return (
                                                <div className="input-field item">
                                                    <div
                                                        className="input-radio valign-wrapper"
                                                        role="radiogroup"
                                                        aria-labelledby="gender"
                                                    >
                                                        {item.details.map((item, index) => (
                                                            <div className={item.className} key={index}>
                                                                <input
                                                                    aria-checked="false"
                                                                    name="gender"
                                                                    id={item.id}
                                                                    aria-labelledby={item.arialabelledby}
                                                                    type={item.type}
                                                                    readOnly=""
                                                                    className="radio-btn"
                                                                    onChange={handleInputChange}
                                                                />
                                                                <label id={item.labelid} htmlFor={item.htmlFor} className="custom-radio-style">
                                                                    <span className="custom-radio-style">
                                                                        {t(item.label)}
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <label
                                                        htmlFor={item.htmlFor}
                                                        id={item.id}
                                                        style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right', left: currentLanguage === 'en' ? 0 : 'auto', right: currentLanguage === 'en' ? 'auto' : 0 }}>
                                                        {t(item.label)} <span className="asterisk">*</span>
                                                    </label>
                                                    <span className="helper-text" data-error="Required field." />
                                                </div>
                                            );
                                        case 'date':
                                            return (
                                                <div className="date-popup">
                                                    <div className="input-field item">
                                                        <div className="react-datepicker-wrapper">
                                                            <div className="react-datepicker__input-container">
                                                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                            </div>
                                                        </div>
                                                        <label htmlFor="dob" style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right', left: currentLanguage === 'en' ? 0 : 'auto', right: currentLanguage === 'en' ? 'auto' : 0 }}>
                                                            {t("dob")} <span className="asterisk">*</span>
                                                        </label>
                                                        <span
                                                            className="helper-text"
                                                            data-error="Required field."
                                                            style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                                                        />
                                                    </div>
                                                </div>
                                            );

                                        case "number":
                                            return (
                                                <div className="row mobile">
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
                                                                onChange={handleInputChange}
                                                                disabled
                                                                value={t("code")}
                                                                style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}

                                                            />
                                                            <label htmlFor="mobileNumber_country_code" className="active" style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right', left: currentLanguage === 'en' ? 0 : 'auto', right: currentLanguage === 'en' ? 'auto' : 0 }}>
                                                                {t("ccode")} *
                                                            </label>
                                                            <span className="helper-text" data-error="Enter a valid code."></span>
                                                        </div>
                                                    </div>
                                                    <div className="col s8">
                                                        <div className="input-field item">

                                                            <input
                                                                name={item.name}
                                                                placeholder={t(item.placeholder)}
                                                                id={item.id}
                                                                className={item.className}
                                                                maxLength={item.maxLength}
                                                                type={item.type}
                                                                aria-label={item.ariaLabel}
                                                                autoComplete="no"
                                                                onChange={handleInputChange}
                                                                defaultValue={item.defaultValue}
                                                                style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                                                            />
                                                            <label htmlFor={item.htmlFor} style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right', left: currentLanguage === 'en' ? 0 : 'auto', right: currentLanguage === 'en' ? 'auto' : 0 }}>
                                                                {t(item.label)} <span className="asterisk">  </span>
                                                            </label>
                                                            <span
                                                                className="helper-text"
                                                                data-error="Required field."
                                                                style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );


                                        case "checkbox":
                                            return (
                                                <div className="item subscribe-items">
                                                    <p>
                                                        <input
                                                            key={item.id}
                                                            name={item.name}
                                                            id={item.id}
                                                            type="checkbox"
                                                            className={item.className}
                                                            onChange={handleInputChange}


                                                        />
                                                        <label htmlFor="agree">
                                                            <span className="en">
                                                                {t(item.label)}
                                                                <button
                                                                    type="button"
                                                                    aria-label="Read terms and condition"
                                                                    tabIndex={0}
                                                                    className="modal-trigger underline-text"
                                                                    style={{ border: 0, background: "none" }}
                                                                >
                                                                    {" "}
                                                                    {t("fterms")}
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
                                    <button className="btn blue">{t("reg")}</button>
                                </div>
                            </form>
                        </div>
                        <div className="col s6" />
                    </div>
                </div>
                <div id="termsAndConditionModal" className="modal" role="dialog" tabIndex={0}>
                    <div className="modal-content">
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
                    </div>

                </div>
                <Topline />
            </div>
        </div>
    )
}

export default Volunteer