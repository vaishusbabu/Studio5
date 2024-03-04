
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { schoolData } from "./JsonSchool";
// import { showMore } from "./JsonSchool";

function School() {
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
                    There is a problem with the form, please check and correct the following:
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
                                Register
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item">
                                <a href="/en/register_home">Register</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a tabIndex={0} aria-current="page" href="/school">
                                    <span>School</span>
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
                                style={{ textAlign: "left" }}
                            >
                                Are you?
                            </h2>
                            <div className="btn-wrap type-selection" id="skipContent">
                                <button aria-label="Are you Guardian" role="button" className="btn">
                                    <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/guardian">
                                        {" "}
                                        Guardian{" "}
                                    </Link>

                                </button>
                                <button aria-label="Are you Student" className="btn">
                                    <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/student">
                                        {" "}
                                        Student{" "}
                                    </Link>
                                </button>
                                <button aria-label="Are you School" className="btn">
                                    <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/school">

                                        School
                                    </Link>
                                </button>
                                <button aria-label="Are you Volunteer" className="btn">
                                    <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/volunteer">
                                        Volunteer
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <h2
                            tabIndex={0}
                            aria-label="For School representative form"
                            className="primary-heading"
                            style={{ textAlign: "left" }}
                        >
                            For School representative
                        </h2>
                        <div className="row">
                            <div className="col s6 form-container">
                                <p style={{ textAlign: "left" }}>
                                    Required fields are followed by <span className="asterisk">*</span>
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
                                                                placeholder={item.placeholder}
                                                                id={item.id}
                                                                className={item.className}
                                                                type={item.type === "text" ? "text" : "email"}
                                                                autoComplete={item.autoComplete}
                                                                defaultValue={item.defaultValue}
                                                                style={{ textAlign: "left" }}
                                                                onChange={handleInputChange}
                                                            />

                                                            <label htmlFor="parentId" style={{ left: 0, right: "auto" }}>
                                                                {item.label}
                                                            </label>
                                                            <span
                                                                className="helper-text"
                                                                data-error="Required field."
                                                                style={{ textAlign: "left" }}
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
                                                                        <span className="custom-radio-style">{item.label}</span>
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <label
                                                            htmlFor={item.htmlFor}
                                                            id={item.id}
                                                            style={{ left: 0, right: "auto" }}
                                                        >
                                                            {item.label} <span className="asterisk">*</span>
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
                                                                Date of Birth <span className="asterisk">*</span>
                                                            </label>
                                                            <span
                                                                className="helper-text"
                                                                data-error="Required field."
                                                                style={{ textAlign: "left" }}
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
                                                                        placeholder="Country Code"
                                                                        className=""
                                                                        id="mobileNumber_country_code"
                                                                        type="text"
                                                                        minLength={3}
                                                                        maxLength={3}
                                                                        disabled
                                                                        value="+974"
                                                                        style={{ textAlign: "left" }}
                                                                        onChange={handleInputChange}

                                                                    />
                                                                    <label htmlFor="mobileNumber_country_code" className="active" style={{ left: 0, right: "auto" }}>
                                                                        Country Code *
                                                                    </label>
                                                                    <span className="helper-text" data-error="Enter a valid code."></span>
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
                                                                        onChange={handleInputChange}
                                                                    />
                                                                    <label htmlFor={item.htmlFor} style={{ left: 0, right: "auto" }}>
                                                                        {item.label} <span className="asterisk">  </span>
                                                                    </label>
                                                                    <span
                                                                        className="helper-text"
                                                                        data-error="Required field."
                                                                        style={{ textAlign: "left" }}
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
                                                                <label htmlFor={item.htmlFor} style={{ left: 0, right: "auto" }}>{item.label}
                                                                    <span className="asterisk">*</span>
                                                                </label>
                                                                <select
                                                                    className="browser-default"
                                                                    name={item.name}
                                                                    id={item.id}
                                                                    tabIndex={0}
                                                                    style={{ textAlign: "left" }}
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
                                                                    style={{ textAlign: "left" }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                );

                                            // case "select":
                                            //     return (
                                            //         <div key={item.id}>
                                            //             <div className="result-type1">
                                            //                 <div className="input-field mobileSelect">
                                            //                     <label htmlFor={item.htmlFor} style={{ left: 0, right: "auto" }}>
                                            //                         {item.label} <span className="asterisk">*</span>
                                            //                     </label>
                                            //                     <select
                                            //                         className="browser-default"
                                            //                         name={item.name}
                                            //                         id={item.id}
                                            //                         tabIndex={0}
                                            //                         style={{ textAlign: "left" }}
                                            //                         // onChange={handleSchoolNameChange}
                                            //                         onChange={handleInputChange}

                                            //                         value={formData.SchoolName}
                                            //                     >
                                            //                         <option value="" disabled>
                                            //                             {item.defaultSelectText}
                                            //                         </option>
                                            //                         {item.options.map((option, index) => (
                                            //                             <option key={index} value={option.value}>
                                            //                                 {option.label}
                                            //                             </option>
                                            //                         ))}
                                            //                     </select>
                                            //                     {/* {showOtherFields && (
                                            //                         <div>
                                            //                             {showOtherFields && (
                                            //                                 <div>
                                            //                                     {showMore
                                            //                                         .filter((field) => field.schoolKey === "333")
                                            //                                         .map((field) => {
                                            //                                             if (field.type === "text" || field.type === "email") {
                                            //                                                 return (

                                            //                                                     <div>
                                            //                                                         <label>{field.label}</label>
                                            //                                                         <input
                                            //                                                             key={field.id}
                                            //                                                             name={field.name}
                                            //                                                             placeholder={field.placeholder}
                                            //                                                             id={field.id}
                                            //                                                             className={field.className}
                                            //                                                             type={field.type}
                                            //                                                             autoComplete={field.autoComplete}
                                            //                                                             defaultValue={field.defaultValue}
                                            //                                                             onChange={handleInputChange}
                                            //                                                         />
                                            //                                                     </div>
                                            //                                                 );
                                            //                                             } else {
                                            //                                                 return (
                                            //                                                     <div className="row mobile" key={field.id}>
                                            //                                                         <div className="col s4">
                                            //                                                             <div className="input-field item">
                                            //                                                                 <input
                                            //                                                                     name="mobileNumber_country_code"
                                            //                                                                     placeholder="Country Code"
                                            //                                                                     className=""
                                            //                                                                     id="mobileNumber_country_code"
                                            //                                                                     type="text"
                                            //                                                                     minLength={3}
                                            //                                                                     maxLength={3}
                                            //                                                                     disabled
                                            //                                                                     value="+974"
                                            //                                                                     style={{ textAlign: "left" }}
                                            //                                                                 />
                                            //                                                                 <label htmlFor="mobileNumber_country_code" className="active" style={{ left: 0, right: "auto" }}>
                                            //                                                                     Country Code *
                                            //                                                                 </label>
                                            //                                                                 <span className="helper-text" data-error="Enter a valid code."></span>
                                            //                                                             </div>
                                            //                                                         </div>
                                            //                                                         <div className="col s8">
                                            //                                                             <div className="input-field item">
                                            //                                                                 <input
                                            //                                                                     name={field.name}
                                            //                                                                     placeholder={field.placeholder}
                                            //                                                                     id={field.id}
                                            //                                                                     className={field.className}
                                            //                                                                     maxLength={field.maxLength}
                                            //                                                                     type={field.type}
                                            //                                                                     aria-label={field.ariaLabel}
                                            //                                                                     autoComplete="no"
                                            //                                                                     defaultValue={field.defaultValue}
                                            //                                                                     style={{ textAlign: "left" }}
                                            //                                                                 />
                                            //                                                                 <label htmlFor={field.htmlFor} style={{ left: 0, right: "auto" }}>
                                            //                                                                     {field.label} <span className="asterisk">  </span>
                                            //                                                                 </label>
                                            //                                                                 <span
                                            //                                                                     className="helper-text"
                                            //                                                                     data-error="Required field."
                                            //                                                                     style={{ textAlign: "left" }}
                                            //                                                                 />
                                            //                                                             </div>
                                            //                                                         </div>
                                            //                                                     </div>
                                            //                                                 );
                                            //                                             }
                                            //                                         })}
                                            //                                 </div>
                                            //                             )
                                            //                             }

                                            //                         </div>
                                            //                     )} */}

                                            //                 </div>
                                            //             </div>
                                            //         </div>
                                            //     );
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
                                                                    I agree to the studio 5
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
                                <button className="btn blue">Register</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="top-line ng-scope">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAABnCAYAAAAOn4lhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNkM5MTRFQUVFQjMxMUU5QkFDMkY5NzFEMDY3NUJFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNkM5MTRFQkVFQjMxMUU5QkFDMkY5NzFEMDY3NUJFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2QzkxNEU4RUVCMzExRTlCQUMyRjk3MUQwNjc1QkVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2QzkxNEU5RUVCMzExRTlCQUMyRjk3MUQwNjc1QkVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IuBe3gAAG2xJREFUeNrsXQl4FdXZ/u5Nwhq2hAKK0IAILlXccUEal2potaDYuLS4/y7QipWqxf4KtrbYutRqXRAXFheIVAtaAdFfkKKCuCEu7AgqiySyhJCQ7X9f5lyYXHKTuctM7tz7vc/zPjOZO3Nmcs6Zd75zzne+ExCFQpEWuPK64S2xOQ48BTwS7AH2BNuA2ea0GnAHuBlcDa4APwDfBZc/M+6RWs3J5EFtrbPiCGhWKRQpLe7tsRkCng/+BGwWR3LfgNPBaeBcFX0VeoVC0bQC3xeb34CXgi1duMVK8DHwCQh+qea4Cr1CofBO4Htj8yewsIHTtoGLwOVidc8Um2NEFtgW7CZW185RYnXzZERIi9f+DXwYgr9LS0CFXqFQuCfwLbAZDd4SQZQXgv8GXwU/hyjXRJF2a2xOAweDg8Au9Zy2BrwB6c7W0lChVygUiRf547F5Hjwk7Ked4ETwEQjw5wm6V5YR+xuN+Ifjaf6G++3UklGhVygUiRHea7F5WOoOslaCj4NjIbgbXLx3Pjb3gP3CfvoMHIJ7L9MSUqFXKBTxCe2VxoK2g10010Bkl3r0DNQQfmz+Craz/bQezIumi0jhntAHNasUCt+iv22fgso++lO8EnmCLpbgOOz+CHzP9tMBYKYWUXJALXqFwr8W/TFiDbCyq2YYBPf1KK6lV81JYB+wu1ieNhzQpavk9+BacAn4PtLd6jBN9t/fCZ4DPorrJmgpJYdFr0KvUKTPh4GifrVYg6m9HV7GlgJnxRaBz0O8t2hOqtArFIrkE3gOlt5lLO14UC7WmMBfIPjfaM6q0CsUiqYX+I7YPAAOjXBKNUi3S06aYvcMu20Y96aLsfjzIlxH10lOyroPgl+tOa1Cr1Aomkbkz8DmWbEGRe3gDNgp4Evg/IZmsyKNH5hWwEXgQNl/Iha7dM5DGsWa4yr0CoXCW5GntwujT3awHaYY3w2Oj2UyE9LkgO3t4DVhgv87pHe/5npyC726P/n3ZeasxMvAAaaJ3SxBSZeY5jynyj+lg2++RI1hCJwdezPKsiTWBHHtOmyuR717BNsJ4LHmJ50U5QOoRe8/gWegKfot/8SD27FZz0G8e3Xii+/qyUnGEJiFspuR4LTpRnkBjQKkPUdzO/ktehV6f7289J6YGdYkJ3YYSzxe8AXuVE9LjzHIC/FS79ZSUCj8J/TadeMfkT+Y1hnY3hxiP+t94CQI8OoEW2s/Bm+1tRoGmeb6pVoSKVWnaOgdAZ4AdhZrwhQnS7E7ZiHq1feaS6kBteib7iULmheM7OjgkqvEihFOcGDtOfNShmOTWLHGP4x3BSA84zBs/mmrJ5cgzSlaer6vezQWbjR16ocRTqsCOdOW3XZzNdf8bdGr0Hv/krEVNRz8HXiQi7eilc/Igk/F07+O5+WU9rvMn1xVqI/21/u6/h1nWoYdo7jsHyjzmzT3/Cv02nXj7UtGYX8ZPN6D23HR5yfAX+G+F+JF/S7GdP4i1oSbXoangvMdftDoy32glnzcYKjhN1GGVQlI68IwkadSMAgau2s485WTpehRkxN2jQq9j6FC753Id8VmgVgBpEL4AqRHxCqxAlNFAuONZwcCtXLJkR9K88z63/fKmgzZXJotH204SL7bmR06TPfLeXTHjGViC8UF104QywdbjHjPb+R/5SQdDhr31ZJPGJYiX89BeXwbZzosF3bbsFX2kFjBx74JKz/6yZ8F3iFWrPlHNPtV6BWNizz741+0iTy9ZK4HX2isHx3XMsb3M9zvkr1DTu+5onGT7YhPZP5XPWXKp8dKZfWeuS2HgZPAn8X4Lyy07fdycP6TKvIJx49Mvv40nkRQ3942oRFqsF8R4RyGNZht6NY7cY1pHXrRfUwj6ln8X/NU6BVugv7MJ5t9xhMZgEr3scNr24R2WmU5826k5T8gb5Uc2Ga73L/gdKmq2bPswE/xcg3CfafH8Pz2MLXZjbzArbApsP2vD4oVU0URGzKMBc4wwgXI3zYowx1xin2TLuJtlj4c7/Ft2f3UQYVe4SZG2vZvikLkib3dLVvLW0Z1016538ngw5fItKVHhw7dLJZPfLToattvrK+ffvihBW0+wP96hxZ/3MLIWdA/NtZvrmkRJgwl/QrysBkilusuFw95LWfhrFoX/6WDmiAb26dzHVKhd/8l7WWa3QSXV5sQrfWFNOjt0qu4rLVsLG2zpwvHKc7osUJeW3a4lFXuiZBwGtLKiWEq/Fm2/aVaqqkDiHwhNpOlbgiN2Tg+CGJf4cEj/EssF163wO6ug9O9nFXo3cfRtv3XYgzr+pppvsvsFYfJ5ccscnxhVka1HN5pkyz+Zo8LPi1Crkr0ZhQfKlroV9gOzdQiTRmRp4fNRNk/ThIjVo4Cx3jwGF+76aeP+luqJa1rxnqBLrb9NTGm8bhYbnCy4Kue8snGrlFd3LFVnbreKYqXJMO0QEL98rPxUq7QIk0ZnCvWbNj6UKjZo0KvcA77CGrzWBKAuH4Rat5S7R9fdKr8F4LvtBOVbpf2Px2KPGOR0/VzoO3/+J0WZ0qhoYH11po9qQPtunEfa237R8eRzm3giWA/etFM/OhEeWv1IXJK9zXSrf330jIz8lyalcV1JkE2h4hHeg5+EQ4wTffLxebxAwzHB0f751ML78T4m0KFXhEG+qBXmbw+hz7MscR4N4OyFGCuDMRJS7JuWwdZ92nUHmPPRnk+WwC/xv2f1KJMLeQsnLWopF8BYyb9MuwnutOO1hxKHWjXjcuAQHLptv+YP+lj/tc40zobHCHWCkJugxNMTsB9n9CSTFmw5XYL+JFYM7RfYMsRH4HlmjVq0SuiAxdS/rlYXi9XwTJfAfG8J0axp9fOQ0iDi4/QwqePdY8IZckQtKGZrJzy/pZYk5gawnZwiVgeQp9r0aW8Vc/6dJ+hQoVeEYcl/gGEmZb8782hsfj7FGzvjHLylD1N+jjPMKwDs0DJn6VuuIJRuOZvWhoKhQq9wj38r1ixbkKLd5xHQpTXYkuXxbIE3INeFH1k/5mHj4L3ahEokh0l/Qp6Y1OJlsZ+rsiDhhblmLq9bPrkwjqTuapm5rIbmjGdSjIHFm/QnPSJ0KNQKVhTGzjlNBT2Dr9kNLtcIOq/wu5ntORln6tlnqEb4MfjVtxbow8qkl3g6fE1DRxs/n4MYj/Mpgdc5YyL3tDv/yv8fQbe/9VG5BkHiJMAGUOnGn/fCrF/QHN1H5J5MJaBXfo2wAy/ZTYjVYKM706r5e+ssC7dioNqY8FeKvIKn2BgSOQNboDYH2n7+wHZN7mLq2LdbvvtGtm3xgN14R6IfTvNUh9Y9G7BhAw+yZCzVsuN4L4OUVzvkeCvEyvA2M14HgapOiBBZcFJTRt0rU+FD1GfMOdG2A8/PyfsN657TA+3bZqtSSr0+Irzmfq/u3Fer7fb9o543mWb3+n/TL+CLWjevedQ4Pmlv0Is/+BuEc7hGpm3xTpAGqPoMzplsVZFRZqDMZS4AEoovge7OO2Ttujie4vZpwfZ07bfGJTtt0bciVe1nz75LXoOKL518vZVQjaAV4wlnudA5Pn1Z//fWY2cSh/1M3H+zRDgh7R6KBTeAAZbCYw8dr9wHIuT9CbgmD18CGeGvy/WgOus6ZML90b2g6gvq5qZy+UPGWp5sxF+RZILfUIB0WZkPk5YOtV2eLFYA73LjRVAd8ShpnlIy/8fuK4KYv+oVhGFwjOx3ygR/Pkh7Azt9GJEIYPYi7W+sSIdhV6sQZuQyHNlnesg4OFf/CkQdnbpPCb73B8fxLE3cK7OEFQoFL5GSodAMLHUQxEXaREU1iPye4Dj202zscgc4oDO3VpFFAqFCr2LaHbyRskesUSyb/pkH4cvlcw8x+7z7LMLhVvlQtyvNnSyWah7uFhhAIjBpn9foVAofIuk7rrJ6rNVgh32X80sI2+7VK1t4ySJM237jgJzMbIkxJ0RIq8wVj1jybyqVUXho5YsJxCxC/IQ8Xa+CT1dpuEdWqWloELvGGX/Olgye8C4DtqW2KgMSuUyx+v82t0oF0Vx60Wyb/m8blpNFD4S+cOxmQMe2ESP8Ec8w+UQ+ylaGsmDpO66qd2RJZVLcqXy4477+FmOSJXjx+5ks9R3RXHrXfWloVD4AM81ocgT9HJ7BmJ/oBaFWvReIZAkaSgUXljz7KoJrR5GV8WRkphgeU6Nxt+A+WKFKmBY7se1VFToG3+4Htsl64TNErB13dTWBGT3O12k+utsLT2Foi7sVvQctGKf9/hD084IPdFFi0OF3lkbsN9myTy0nrAtlUHZpUKvUDTU+qxxcsGgoUWMovoLsGOEU9iNOX365MKNDpKrjeGZR+ADMcLsM+4UQxvcaBbYsX9EJoo1wKyh1VNN6MvfOEiyNrRC9bXVn9qAVH6aqyWnUCQGXKBmZCPn3CDxLWwfjp0RjrPLh6GJgxD2YcbdmSLPoH+XxXnPahX6JEXNlhZSMS+9xnSqZuaOEQcLM2cOLNaxA0UikOPgnERbVvPFclk+Mqw10t3sX28EPiT2zW3n0d96Y5T3YxoTVegVCkW6YhS4tQHBp7A+mcgbQrzZRXNe+HEIO5faHBsu9mGnvYfr87XYVOgVCoVDTJ9cuEmstRGaHBDweyDsEi72gK51nIJCz2bWNtsfgYqMIGf6cd5UVbOaGnv/3na/ZbhZuJvhkOudsbj4mwX5x3dd7ySdMTHm7SK8UDO16iuSERHEvqvmTIoJfc7CWRT59jZB437I9WaBn5tt5n+ZJ3X7HOtgww56qDla6Gp0HM8xii+UVn+FT8T+PM2V1LPoUxntGxJ5DzGWL5KKfXqgpF8BBzn/6FLyz8M4e90DsVeo0PsSH4H7rWLVM2cLF0ge5MQwj+Gep8s+NzUV+/QBB1ovdyltLrv5uhsJG7Fn9MLbtQhV6P2KdajIE8IPjh+cm+dE6Ou7ttEvgzXphFPir7eJ/Tak9ZgWhyIZgbr5B7Pe823m0E7NFRV6RcMvTa3NXS0k9o8ay17FXpGs9fb3qKP0nR8gPlwMqKRfQQE2BQ5Pfzln4ax5KvSpj7kq9grFfvX2QWwe9OnjnwSOcHjuWrEcNlToU7qJNbB4roq9QhGXBd0Zmx5iOT9sBpfDSi5N5zwJarVIWwuJPvUUe3soWYr9DZo7Ch+KexZ4Pfi+WCES3gU5X+QDsBjHXwPPVqFXpLPYP6dir/CxyPfGZjHI1ujx9ZzCxVAGgrNx7lSwtQq9Ih3Fnq53z6vYK3wo8odhswA8yuElheD/4bpWKvSxZXhPcADYQ6uf78SeIVwvU7FX+EzkKdYzJHIs/Ug40Vj/XoGDyD0c8mk3HiAzAZl9DDbjweNsx9hPdm3Owlkfa3X0j9hD2EOTqS61ib0O0CqSFbeAvWK89jLo1JPQqPluPyTuweigW5syo+ISemRUX2z+C4Y3g04A38bvJ+Of/Ezro+/FfpvXy9IpFI1oD3sjhsWZDGMsuC70g4YW0bPteoen3zt9cuFziX6GeLtuHqxH5ENoI/71e01rsZf9u3H+oDmjSDKw+6VTnGkMpLeOB8/K9XP7OuQP3HiAmIUeGcT4GfmNnHYmzmurddK3Yh/yPW6tuaJIMvwoAWlQm7qlQ2bFY9E7+ZoG3PpCKTwR+2rNCUWSonOC0umUDpkVs9Df16fbIQ6WfK8CN2mdVCgUCcb3CUpnazpkVkyDsVdeN/znG0Smfd6utRyxrcFgcjPSfepxmqM96kq+ZkP8+ahZsB/WJiANGqLr0yGzohZ6vLi/xGYSWwP/7tpRepbuqmpZXVNfOpyG/Futj2kNDi69pdmQUHRIkMj5HaxXu8CWcaQxD4ZoWoQ9jqrrxkygmRy6rqRZ5ttrW7egH/3L5usY+kq+BPZDJq7T+ph2aK5Z4Co6axbs8U2nyE+NM5mJ6ZJfji16iDwD/9tXI5oFDjl1zktcyOICM0uNAxubTCEoYsCUgpFXZdVUH+LlPYe8/uCoBCZXEdqpRfWqrsnWQo0TGcFSCey1o+RLzZG9uBO8EIylknFS53PpklGOhB4i/2epu5zXv8BLnxn3yG7bF7ZMm5TxI698y59779rUxePbjnIjUYr89vK+Wqhxom2LTyQzuFUzYn+rfj0MTMZpejHK3okt4EW4vkaF3hJ4ukc+LNYMMntz52rjfqdQKBRNKfYvQewvxu4z4my+x2rwPFy3Jp3yaa/QDxpa1FOsae/clgSk5hWR+VfJvsWkxYj+CBPxUKHwLTKC1XL1cUVy6A9WyZyV/WXm8nzNFP+K/YsQ+w+xy56HIREM2O3gI+BYnL/DrWeBjv5KrLhfAdvhk6JI4nykkWf7m12hk6ZPLowrlEymebjrjIjvnQ5cK8GRpRWHSXbzL/f8xUyEwP+vVit3UZrRoqI4S/u13UZ+j/fknEPe3rN/zfFT5aMNR8jGHTq3z8divwqbiyH49Eo62xis3Kf331JwLs7Z7cGjzAXHgAfHeP0AwxC4MNDncVv0EPmzpO4qQ3uxu7qTlFVWSKus1bdB5P+m1cl9PHzgmYz4+UNPb/rfaWmXz5nBuj2PmQHtiUwRwedEqqlNdX9Y3l9DU/ON4B8cZ3LU5WFIM+4eFFr0DVrp5ZXdqsFxVqsnNQEr4ABs+u39JH9bfOya1i327Hcu333o/f0KBttOX4fK9KG+Uv7G3DUnyVFdvpTeuWvkzdWnytfbu2im+BxXXjecK00dbQQ2x/RQlIs1i3Y5uAQG6yqfiH3CRD4k9Kc0ck6GWGGH30jhOkKRf3lvs37zVnu0tosMQ+Bg9BX6WvkbFVXN5N7512pG+F/cT8OG/eI0xjo5OJ8zYblYyUSI/vtJKvYJFXmCLkkBB+dlaJVSKBRJJPA/BbnwNwdarhXnwckYrZJehItw/TzwTDfFXqwIv9G0IhIu8iGLnn3CxzdwTm1mcPtSrVoKh9gb2ygY2CWZwR1S68iWiA+BQJVkBLybp1dd20Jqa90PZR6gW0Sg3H6oLM0FvqsRw3Pr+fkT8B1wGbgB5OArQySwX45ry9L6P9R2Pgc930Ca7NP/NSz8LS5Z9qdj912wa1OIfEjo75UGBi+aZ24MtG627AVkxgVuZIQitcA6grpCV7AjgoEKadtChzMSiOXI381pLPJ0HJkC5toOfws+Ck5G3qxzkAa9cS43Vn0oHXbN9sdvhUjjHRfEfr2tG6er1yK/R+iRcBEegkH879jvx+BWadVspZgv4fvIiHOREam7NGCwVlpdvFKCneoaTbWlWVL2Qm+p3ZmpUuMMfIlmSnwBpxR1QbM+1sXadxlr1w1855HIcz7PU7LPR57/0xjwYWiS46YczuWEqdFIjwYuw7rcCjYzAkzr/mKcM8MFsV/ZgNhzNbfhbol8yKLnQ9yJh+CLeaVYAwcsvFfbtlhSAZmbaF7YPDY/kBGXICP+k4pvUqBZjWQevE0kIyy/2++WYNvdUq1C7/RlYt/nsWL1nfb04JbdwWPMPieY7HDxXlwiMxS47SPQi8B9FKfxyNcvYrk4Z+EsdmUc7WNLPjTzNWjrorkQ+bEyjjrKLsY7kHaRWCEU+hidm4Zj57uhcRHEniJ/GX5zNRxDpu0h2If0bj2ZzIGEGebBWMln4NityIj7U02gasszpPSJIyTYobzu8bIsqd7QShU8uheJM+1u9kgIrjBCQEzBva9w8V4TTNOfeAj3mqCl7WrZ0iNukk3kZxqRL0tQPf3U3ONVdt+I5ZJZxGP4LeFjk2FiP8+IvOuTOIIOMoKdrHSvfN92zX3IiKfAZqlWsWo2tZSqLzvUYfU6namqSA9UzczNAZNiUgH0pa2xtkOj3nPAwYkSeZvGoRkv59gM3VbGsm/RwLOdAX4OjjMxwaISe7FcumMSebZwwGXgmIQJvckIjmD/WKyBkBAYB4d9Wh319VAoUkLkOSjJkAHfYn9EEjzSX2Xf4t0Ux1/YI+YmWOz58RgEfm0OsStndAOXDBPLk+daadybpj6x/yYOS34kyMlhdyRU6E1GcMCDQc/utB0+LbtZxQebX+r2LCrGBrAWZCV5APTl8mfN+2+QVhevqMOW56+WQOsqVQJFquM3xnqmhXpLE1vzFNH/CTW0xQqLvs3NeyJ9jk3agzjejOfoHuH0zAj7XiArWv0ORpkRteCf+GUFd0HkZdSAN7rntCzj8oKh5h7DCXAJwffYDPSd0Od/K5mHbq3DrL7Fkpm3XWVAkeqwL2rS1N51XP8iNFFznJuzWMM0jksUPm/+ZNf071OhYIMxZgajYPX/Zd/FZZ2yIzo4sOlzXyJalHYdjvLaUN9ZhdMLyqb0koq5B9Zh+azuUvllB5UBRarjJtMdMFassAJNZc0zjGgo7Egl+CePH2G0aUUQQ/E8rf1esMFYLxw/eMqy47qub2xq4CWw6lvE+YWlG1TIT7ZbFJWF1kBoWvS3jr8qK9tB3LvW4e73OotUB1QGFCmNzIHFpeDd4O3gd034KENs3RNFZozQMxi3zdfMn/TEONf3ZRvHtd0Ctvj1EUCR50BFvBHjPgVPZFoQ8KNQEEscXJNv7k98oa+x/4CyZqvwHAcGyYm2/dNx3csuPtaxtv2zca/GxqJoGc5GnV2mJeoYP7Pt7zTus17j+7DnaSj0MeuBlzOW23kp9CUxZFismGF7me8Cz3dgzY8Ju17hL5FnE4r9pQdEeWl3Qy9wiWFj2Iz/5wCIvdtrlJba9vvgnlm4Z6WHxXa4bT8eF0h7RN1rDZsSpzby+7iUtejRtNtcNTN3sTQcEG0hzitJwHMyIzlVmX61g1GBR6MC39WAQDwg1uQHgs2+SY2kz0r51c6M5u3Lg1n1fi0za6vL21Xt2iTWwsIK9xGQxluMfkGGiHjR98eWL1cRZyuDy9ftwPtQ7qGW2Puy58eR1u4kK7/6BiKLk+C5SqJ5mWIGhJ7R396M8MGgJZEPoU9IkCBU2Bux+Yft0CvgHyH4i83vQVO572bz3XbeRTinyMk9Bg0tYisgku/svOmTC/Pj/B/ysPHjosRfIQ/zmsCq74vNz8VZmGy643X28PHYVHeyxBt9pV9B/n3sUZ5dg834Jq4vnJ18SRz/A7vsLpDonS/cAMcHp+L/WRv2jAyI9muxlitsClBfpz79+D8Xuy70RuwLsHlS6k4aYHD/qyHycxJcibnM1bB6vqwcOOpiLBk77jTuoI7ggdAfZPLGb/gS+XiYNjL8AdQzfhw5qeZQD8WS3VKM+0PXxPtRX3RtRg9QW+ssDlpCmpMQ+yzTVUKx58yyBRD5SpcqMSd1ULwbGpBg98pIVLZJ0aTtttCb5/97FFZqMmCnaTlN1ddKoUhjoW8Ci4VhFzhrbpCxWij6HPRlEKJ/s4UBYYp6hpMJNhRJzNdC6Cdo1VIoFH4T+v8XYADQGRLwpuevNQAAAABJRU5ErkJggg=="
                        alt=""
                    />
                </div>
            </div>


        </div>
    )
}

export default School


// {showOtherFields && (
//     <div>
//         {showMore
//             .filter((field) => field.schoolKey === "333")
//             .map((field) => (

//                 <div>
//                     {field.label}
//                     < input
//                         key={field.id}
//                         name={field.name}
//                         placeholder={field.placeholder}
//                         id={field.id}
//                         className={field.className}
//                         type={field.type}
//                         autoComplete={field.autoComplete}
//                         defaultValue={field.defaultValue}
//                         onChange={handleInputChange} />
//                 </div>

//             )
//             )}
//     </div>
// )}
// </div>
// </div>
// </div>
// );