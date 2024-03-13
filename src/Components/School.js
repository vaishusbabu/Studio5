import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// import { schoolData } from "./JsonSchool";
import { schoolData } from './JsonSchool';
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import Topline from "./Topline";

function School() {
    const { t } = useTranslation();
    const currentLanguage = i18n.language
    const [startDate, setStartDate] = useState(new Date());

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        SchoolName: "",
        // name: "",
        // nameArabic: "",
        repName: "",
        repNameArabic: "",
        qid: "",
        repPosition: "",
        repMobile: "",
        repEmail: "",
        agree: false,
        schoolName: "",
        schoolNameOther: "",
        schoolPhoneNumber: "",
        schoolEmail: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: newValue });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (validateForm()) {
            console.log(formData);

        } else {
            console.log("Form is invalid");
        }
    };
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.schoolName) {
            newErrors.schoolName = "School name is required.";
            isValid = false;
        }
        if (!formData.schoolNameOther) {
            newErrors.schoolNameOther = "School name is required.";
            isValid = false;
        }

        if (!formData.schoolPhoneNumber || !/^\d{8}$/.test(formData.schoolPhoneNumber)) {
            newErrors.schoolPhoneNumber = "Please enter a valid mobile number.";
            isValid = false;
        }
        if (!formData.schoolEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.schoolEmail)) {
            newErrors.schoolEmail = "Please enter a valid email address.";
            isValid = false;
        }


        if (!formData.repName) {
            newErrors.repName = "Representative name is required";
            isValid = false;
        }

        if (!formData.repPosition) {
            newErrors.repPosition = "repPosition is required";
            isValid = false;
        }

        if (!formData.repMobile || !/^\d{8}$/.test(formData.repMobile)) {
            newErrors.repMobile = "Please enter a valid mobile number.";
            isValid = false;
        }


        if (!formData.repEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.repEmail)) {
            newErrors.repEmail = "Please enter a valid email address.";
            isValid = false;
        }


        if (!formData.agree) {
            newErrors.agree = "agree is required";
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
                                <a href="/en/register_home"> {t("reg")}</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a tabIndex={0} aria-current="page" href="/school">
                                    <span>{t("scl")}</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="school-registration-container">
                    <span className="grey-square-rotate red-sq one" />
                    <span className="grey-square-rotate red-sq two" />
                    <span className="grey-square-rotate red-sq three" />
                    <span className="orange-circle one" />
                    <span className="orange-circle two" />
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
                    <span className="multi-square four">
                        <b>
                            <i />
                        </b>
                    </span>
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
                            aria-label="For School representative form"
                            className="primary-heading"
                            style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                        >
                            {t("fscl")}
                        </h2>
                        <div className="row">
                            <div className="col s6 form-container">
                                <p style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}>
                                    {t("req2")} <span className="asterisk">*</span>
                                </p>
                                <ErrorList errors={errors} />
                                <form autoComplete="no" onSubmit={handleSubmit}>
                                    {schoolData && schoolData.map((item) => {
                                        switch (item.type) {
                                            case "text":
                                            case "email":
                                                if (item?.refValue == formData.schoolName || !item?.refValue) {
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
                                                }
                                                else break

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
                                                                        onChange={handleInputChange}
                                                                        className="radio-btn"
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
                                                                    <DatePicker
                                                                        className="example-custom-input"
                                                                        placeholderText="dd/mm/yyyy"
                                                                        selected={startDate}

                                                                    />
                                                                </div>
                                                            </div>
                                                            <label htmlFor="dob" style={{ left: 0, right: "auto" }}>
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
                                                if (item?.refValue == formData.schoolName || !item?.refValue) {
                                                    return (
                                                        <div className="row mobile">
                                                            <div className="col s4">
                                                                <div className="input-field item">
                                                                    <input
                                                                        name="mobileNumber_country_code"
                                                                        placeholder={t("code")}
                                                                        className=""
                                                                        id="mobileNumber_country_code"
                                                                        type="text"
                                                                        minLength={3}
                                                                        maxLength={3}
                                                                        disabled
                                                                        value="+974"
                                                                        style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                                                                        onChange={handleInputChange}

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
                                                                        defaultValue={item.defaultValue}
                                                                        style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                                                                        onChange={handleInputChange}
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
                                                }
                                                else break
                                            case "select":
                                                return (
                                                    <div>
                                                        <div className="result-type1">
                                                            <div className="input-field mobileSelect">
                                                                <label htmlFor={item.htmlFor} style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right', left: currentLanguage === 'en' ? 0 : 'auto', right: currentLanguage === 'en' ? 'auto' : 0 }}>    {t(item.label)}
                                                                    <span className="asterisk">*</span>
                                                                </label>
                                                                <select
                                                                    className="browser-default"
                                                                    name={item.name}
                                                                    id={item.id}
                                                                    tabIndex={0}
                                                                    style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                                                                    onChange={handleInputChange}
                                                                >
                                                                    <option value="" disabled>
                                                                        {item.defaultSelectText}
                                                                    </option>
                                                                    {item.options.map((option, index) => (
                                                                        <option key={index} value={option.value}>
                                                                            {option.label}
                                                                            {option.text}
                                                                        </option>
                                                                    ))}
                                                                </select>
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
                        <div
                            id="termsAndConditionModal"
                            className="modal"
                            role="dialog"
                            tabIndex={0}
                        >
                            <div className="modal-content">
                                <span className="badge modalClose">
                                    <button
                                        type="button"
                                        aria-label="close"
                                        tabIndex={0}
                                        className="close"
                                    >
                                        <i className="material-icons">close</i>
                                    </button>
                                </span>
                                <h4>Terms and Conditions</h4>
                                <div className="description">
                                    <p>
                                        Ministry of Transport and Communications (MOTC) is committed to
                                        protecting your privacy and providing a secure website
                                        environment. MOTC does not collect personal information about you
                                        when you visit our website unless you specifically and knowingly
                                        choose to provide such information to us. Any personal information
                                        which you volunteer will be treated with the highest standards of
                                        security and confidentiality.
                                    </p>
                                    <p>
                                        We will not use personal information you provide for commercial
                                        use. Personal information will not be forwarded to third parties
                                        unless MOTC is required by law or that entity is relevant to your
                                        enquiry.
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
                            <div className="btn-wrap">
                                <button className="btn blue">{t("reg")}</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Topline />
            </div>


        </div>
    )
}

export default School

