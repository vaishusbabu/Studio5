
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { schoolData } from "./JsonSchool";
import { showMore } from "./JsonSchool";

function School() {
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState({



        SchoolName: "",
        repName: "",
        repNameArabic: "",
        qid: "",
        repPosition: "",
        repMobile: "",
        repEmail: "",
        agree: null,
        schoolNameOther: "",
        schoolPhoneNumber: "",
        schoolEmail: "",
    });

    const [showOtherFields, setShowOtherFields] = useState(false);


    // const handleSchoolNameChange = (e) => {
    //     const selectedValue = e.target.value;
    //     if (selectedValue === "Others") {
    //         setShowOtherFields(true);
    //     } else {
    //         setShowOtherFields(false);
    //     }
    // };
    const handleSchoolNameChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "Others") {
            setShowOtherFields(true);
        } else {
            setShowOtherFields(false);
        }
        setFormData({
            ...formData,
            SchoolName: selectedValue,
        });
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
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
                                <form autoComplete="no" onSubmit={handleSubmit}>
                                    {schoolData.map((item) => {
                                        switch (item.type) {
                                            case "text":
                                            case "email":
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
                                            case "select":
                                                return (
                                                    <div key={item.id}>
                                                        <div className="result-type1">
                                                            <div className="input-field mobileSelect">
                                                                <label htmlFor={item.htmlFor} style={{ left: 0, right: "auto" }}>
                                                                    {item.label} <span className="asterisk">*</span>
                                                                </label>
                                                                <select
                                                                    className="browser-default"
                                                                    name={item.name}
                                                                    id={item.id}
                                                                    tabIndex={0}
                                                                    style={{ textAlign: "left" }}
                                                                    onChange={handleSchoolNameChange}
                                                                    value={formData.SchoolName}
                                                                >
                                                                    <option value="" disabled>
                                                                        {item.defaultSelectText}
                                                                    </option>
                                                                    {item.options.map((option, index) => (
                                                                        <option key={index} value={option.value}>
                                                                            {option.label}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                                {showOtherFields && (
                                                                    <div>
                                                                        {showMore
                                                                            .filter((field) => field.schoolKey === "333")
                                                                            .map((field) => {
                                                                                if (field.type === "text" || field.type === "email") {
                                                                                    return (
                                                                                        <div>
                                                                                            <label>{field.label}</label>
                                                                                            <input
                                                                                                key={field.id}
                                                                                                name={field.name}
                                                                                                placeholder={field.placeholder}
                                                                                                id={field.id}
                                                                                                className={field.className}
                                                                                                type={field.type}
                                                                                                autoComplete={field.autoComplete}
                                                                                                defaultValue={field.defaultValue}
                                                                                                onChange={handleInputChange}
                                                                                            />
                                                                                        </div>
                                                                                    );
                                                                                } else {
                                                                                    return (
                                                                                        <div className="row mobile" key={field.id}>
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
                                                                                                        name={field.name}
                                                                                                        placeholder={field.placeholder}
                                                                                                        id={field.id}
                                                                                                        className={field.className}
                                                                                                        maxLength={field.maxLength}
                                                                                                        type={field.type}
                                                                                                        aria-label={field.ariaLabel}
                                                                                                        autoComplete="no"
                                                                                                        defaultValue={field.defaultValue}
                                                                                                        style={{ textAlign: "left" }}
                                                                                                        onChange={handleInputChange}
                                                                                                    />
                                                                                                    <label htmlFor={field.htmlFor} style={{ left: 0, right: "auto" }}>
                                                                                                        {field.label} <span className="asterisk">  </span>
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
                                                                            })}
                                                                    </div>
                                                                )}

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
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAABnCAYAAAAOn4lhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNkM5MTRFQUVFQjMxMUU5QkFDMkY5NzFEMDY3NUJFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNkM5MTRFQkVFQjMxMUU5QkFDMkY5NzFEMDY3NUJFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2QzkxNEU4RUVCMzExRTlCQUMyRjk3MUQwNjc1QkVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2QzkxNEU5RUVCMzExRTlCQUMyRjk3MUQwNjc1QkVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IuBe3gAAG2xJREFUeNrsXQl4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"
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
// );import React from 'react'


// const [formData, setFormData] = useState({
//     name: "",
//     nameArabic: "",
//     date: "",
//     nationality: "",
//     schoolName: "",
//     qid: "",
//     gender: '',
//     grade: "",
//     email: "",
//     mobile: "",
//     parentQid: "",
//     relation: "",
//     parentMobile: "",
//     parentMobile2: "",
//     parentEmail: "",
//     agree: "",
//     schoolNameOther: ""
// })
// const [showOtherFields, setShowOtherFields] = useState(false);

// const handleSchoolNameChange = (e) => {
//     const selectedValue = e.target.value;
//     if (selectedValue === "Others") {
//         setShowOtherFields(true);
//     } else {
//         setShowOtherFields(false);
//     }
//     setFormData({
//         ...formData,
//         SchoolName: selectedValue,
//     });
// };


// const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//         ...formData,
//         [name]: value,
//     });
// };


// const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
// };

{/* <div key={item.id}>
<div className="result-type1">
    <div className="input-field mobileSelect">
        <label htmlFor={item.htmlFor} style={{ left: 0, right: "auto" }}>
            {item.label} <span className="asterisk">*</span>
        </label>
        <select
            className="browser-default"
            name={item.name}
            id={item.id}
            tabIndex={0}
            style={{ textAlign: "left" }}
            onChange={handleSchoolNameChange}
            value={formData.SchoolName}
        >
            <option value="" disabled>
                {item.defaultSelectText}
            </option>
            {item.options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        {showOtherFields && (
            <div>
                {showMore
                    .filter((field) => field.schoolKey === "333")
                    .map((field) => {


                        <div>
                            <label>{field.label}</label>
                            <input
                                key={field.id}
                                name={field.name}
                                placeholder={field.placeholder}
                                id={field.id}
                                className={field.className}
                                type={field.type}
                                autoComplete={field.autoComplete}
                                defaultValue={field.defaultValue}
                                onChange={handleInputChange}
                            />
                        </div>


                    })}
            </div>
        )}

    </div>
</div>
</div>
); */}




// {`/event_details/${item.nid}`} 

// src={`${baseURL}${item.field_equipment_image}`}
// src={`${baseURL}${item.field_equipment_image}`}

    // const baseURL = "api/get_equipment_used?page=0"
    

    // {item.options.map((optionItem, index) => (
                                                                
    //     <option value={optionItem.value} key={index}>
    //         {optionItem.text}
    //     </option>

    // ))}
function Test() {
    return (
        <div><div id="main-content">
            <div className="app-slider ">
                <div className="video-box">
                    <div className="video-btn">
                        <button className="btn-toggle play" aria-label="Pause the video">
                            Pause
                        </button>
                    </div>
                    <video
                        autoPlay=""
                        playsInline=""
                        loop=""
                        style={{
                            backgroundImage: 'url("https://studio5drupaldev.applab.qa/")'
                        }}
                    >
                        <source src="https://studio5drupaldev.applab.qa//sites/default/files/2023-11/Outro1366.768.mov" />
                    </video>
                </div>
                <div className="banner">
                    <div>
                        <div className="desc en">
                            <div className="banner-contact">
                                <p className="ct-title">
                                    Contact us &nbsp; &nbsp;<i className="fa fa-angle-left">&nbsp;</i>
                                </p>
                                <div className="ph-em">
                                    <p>
                                        <a href="tel:+974 33556554" tabIndex={-1}>
                                            <i className="fa fa-phone">&nbsp;</i>+974 33556554
                                        </a>
                                    </p>
                                    <p>
                                        <a href="mailto: info@studio56.qa" tabIndex={-1}>
                                            <i className="fa fa-envelope-o">&nbsp;</i>info@studio56.qa
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="sharefollow">
                                <ul>
                                    <li>
                                        <a
                                            href="https://twitter.com/Studio56qa"
                                            target="_blank"
                                            title="twitter"
                                        >
                                            <span>twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://instagram.com/studio56qa"
                                            target="_blank"
                                            title="instagram"
                                        >
                                            <span>instagram</span>
                                            <i className="fa fa-instagram">&nbsp;</i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/Studio56qa"
                                            target="_blank"
                                            title="facebook"
                                        >
                                            <span>facebook</span>
                                            <i className="fa fa-facebook">&nbsp;</i>
                                        </a>
                                    </li>
                                    <li className="sl-title">
                                        <b>follow us</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="makeHome" id="skipContent" />
            <div className="about-studio container">
                <div className="item">
                    <div className="row two-col">
                        <lt-highlighter
                            contentEditable="false"
                            style={{ display: "none", zIndex: "1 !important" }}
                        >
                            <lt-div
                                className="lt-highlighter__wrapper"
                                spellCheck="false"
                                style={{
                                    width: "564.5px !important",
                                    height: "308.344px !important",
                                    transform: "none !important",
                                    transformOrigin: "283.25px 155.172px !important",
                                    zoom: "1 !important",
                                    marginTop: "-2px !important",
                                    marginLeft: "-2px !important"
                                }}
                            >
                                <lt-div
                                    className="lt-highlighter__scroll-element"
                                    style={{
                                        top: "0px !important",
                                        left: "0px !important",
                                        width: "564.5px !important",
                                        height: "308px !important"
                                    }}
                                />
                            </lt-div>
                        </lt-highlighter>
                        <div
                            className="col-sm-6 col-md-6 col-1"
                            data-gramm="false"
                            data-lt-tmp-id="lt-276347"
                            spellCheck="false"
                        >
                            <h2 className="line">
                                What is <b className="red-text">STUDIO 5?</b>
                            </h2>
                            <p>
                                In line with the Ministry of Communications and Information
                                Technology's Digital Youth Strategy, STUDIO 5&nbsp;is mainly aimed
                                at nurturing youth as digital learners by sharpening their 21st
                                century learning skills, as they develop in an all-pervasive digital
                                environment.
                            </p>
                            <p>
                                In fact, STUDIO 5&nbsp;is envisaged as a community platform that
                                offers technology and allied equipment support for hands-on learning
                                opportunities. Here youth can develop their problem-solving,
                                critical thinking, creativity and innovation skills. This will also
                                develop young people’s knowledge of technology and help them to
                                become future creators of technology.
                            </p>
                            <p>
                                <a className="btnNewYellow btn btn-signup" href="/about">
                                    View More{" "}
                                </a>
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-2">
                            <p>
                                <img
                                    alt="About image studio56"
                                    src="https://studio56.qa/drupal-app/sites/default/files/2020-07/image-with%20pattern_0.png"
                                    style={{ cursor: "wait" }}
                                />
                            </p>
                        </div>
                    </div>
                    <div
                        className="bootstrapiso"
                        data-original-title=""
                        id="mttContainer"
                        style={{
                            left: 0,
                            top: 0,
                            position: "fixed",
                            zIndex: 100000200,
                            width: 500,
                            marginLeft: "-250px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            pointerEvents: "none",
                            transform: "translate(351px, 212px)"
                        }}
                        title=""
                    >
                        &nbsp;
                    </div>
                    <p>
                        <iframe
                            id="ocrFrame"
                            name="ocrFrame"
                            src="chrome-extension://hmigninkgibhdckiaphhmbgcghochdjc/ocr.html"
                            style={{ display: "none" }}
                        />
                        <lt-toolbar
                            contentEditable="false"
                            data-lt-force-appearance="light"
                            style={{ display: "none" }}
                        >
                            <lt-div
                                className="lt-toolbar__wrapper"
                                style={{
                                    left: 554,
                                    position: "absolute !important",
                                    top: "299px !important",
                                    bottom: "auto !important",
                                    zIndex: "auto"
                                }}
                            >
                                <lt-div className="lt-toolbar__premium-icon" />
                                <lt-div
                                    className="lt-toolbar__status-icon lt-toolbar__status-icon-has-no-errors"
                                    title="LanguageTool - Spelling and Grammar Check"
                                />
                            </lt-div>
                        </lt-toolbar>
                    </p>
                </div>
                <img
                    alt=""
                    src="/static/media/about-home-1.e4133e4dbd1cbcf2b8e7.png"
                    style={{ display: "none" }}
                />
                <span className="orange-circle" />
            </div>
            <div className="top-images ng-scope">
                <div className="container">
                    <div className="item ">
                        <img
                            src="/static/media/AGE-GROUPS-VISUALS-01.e5c41ed79ca0893751f5.png"
                            alt=""
                        />
                    </div>
                    <div className="item ">
                        <img
                            src="/static/media/AGE-GROUPS-VISUALS-02.b0dfe2b32f2ee73fc2b0.png"
                            alt=""
                        />
                    </div>
                    <div className="item ">
                        <img
                            src="/static/media/AGE-GROUPS-VISUALS-03.d2bf85b8fe23da289940.png"
                            alt=""
                        />
                    </div>
                    <div className="item ">
                        <img
                            src="/static/media/AGE-GROUPS-VISUALS-04.0fea3d9b3aba71774b85.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="zone-wrap">
                <div className="container">
                    <div className="zone-text en">
                        <h3>Zone</h3>
                        <div>
                            Studio 5 has three main zones to provide the kids extraordinary
                            learning experiences.
                        </div>
                    </div>
                    <div className="service-zone en">
                        <div className="flex-row same-height col-4 ng-scope">
                            <div className="item">
                                <div
                                    className="icon"
                                    style={{
                                        background:
                                            'url("https://studio5drupaldev.applab.qa//sites/default/files/2023-10/CREATIVITY-Zone-.png") no-repeat'
                                    }}
                                />
                                <h3>Creativity Zone</h3>
                                <div className="desc">
                                    <p>
                                        <strong>Creative Zone</strong> is where brainstorming and idea
                                        of problem solving will come up. In this area different topic
                                        reeled to big data, 10T, Mixed really are the focus of different
                                        workshops
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                    className="icon"
                                    style={{
                                        background:
                                            'url("https://studio5drupaldev.applab.qa//sites/default/files/2023-10/Software-Zone-.png") no-repeat'
                                    }}
                                />
                                <h3>Software Zone</h3>
                                <div className="desc">
                                    <p>
                                        <strong>Software Zone</strong> is designed for improving
                                        students skills in software design, coding and programming and
                                        build creative software projects and games, app and to program
                                        micro-controllers
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                    className="icon"
                                    style={{
                                        background:
                                            'url("https://studio5drupaldev.applab.qa//sites/default/files/2023-10/Technology-Zone-.png") no-repeat'
                                    }}
                                />
                                <h3>Technology Zone</h3>
                                <div className="desc">
                                    <p>
                                        <strong>Technology Zone</strong> is designed for hands on
                                        training on different technologies and digital fabrication
                                        machines. This area allows the students to create prototypes
                                        that has both electrical and mechanical components
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div
                                    className="icon"
                                    style={{
                                        background:
                                            'url("https://studio5drupaldev.applab.qa//sites/default/files/2023-10/INVESTIGATION--Zone-.png") no-repeat'
                                    }}
                                />
                                <h3>Investigation Zone</h3>
                                <div className="desc">
                                    <p>
                                        <strong>Investigation Zone </strong>is designed to empower users
                                        with knowledge and practical experience in the captivating realm
                                        of emerging technologies, with a strong
                                        <br aria-hidden="true" />
                                        focus on the dynamic bioengineering sector. Delve into the
                                        exciting world of new materials, genetics, neuroscience,
                                        biology, nanotechnology, and more as you embark on an
                                        enlightening journey of exploration and study.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <span className="grey-square" />
                    </div>
                </div>
            </div>
            <div className="activityHome">
                <div className="container">
                    <div className="zone-text en activity-block">
                        <h3 id="activity">Activities</h3>
                        <div>Explore our latest activities and enroll in them</div>
                    </div>
                    <div className="row noFlex">
                        <ul aria-label="Activities">
                            <div className="activities-inner">
                                <p>
                                    There are no latest activities at the moment, check out activities
                                    page to see what's new
                                </p>
                                <a
                                    className="btnNewYellow btn"
                                    aria-labelledby="activity"
                                    aria-label="Button for view more activity"
                                    href="/activities"
                                >
                                    Go to activities<i className="material-icons en">arrow_forward</i>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="news-wrap">
                <div className="container">
                    <h2 id="news-media" className="line">
                        News &amp; Media
                        <span className="grey-square-rotate" />
                    </h2>
                    <div className="flex-row col-2">
                        <div className="item news-item">
                            <div className="flex-row col-3">
                                <div className="homeNewsParent">
                                    <a
                                        className="item homeNewsText1"
                                        aria-label='DIY Food Making News Published <time datetime="2023-08-04T13:26:36+00:00" class="datetime">04 August 2023</time>
   
  '
                                        href="/en/news/56624"
                                    >
                                        <h3>DIY Food Making</h3>
                                    </a>
                                    <div className="img-wrap">
                                        <img
                                            src="https://studio5drupaldev.applab.qa//sites/default/files/2023-08/heenat-salama--3D-FOOD-MOLD-1_1.jpg"
                                            alt="news image"
                                        />
                                    </div>
                                    <div className="homeNewsText2">
                                        <div className="category-wrap">News</div>
                                        <div className="desc">
                                            <p>
                                                <span>
                                                    <span />
                                                </span>
                                            </p>
                                        </div>
                                        <p
                                            className="date-wrap"
                                            aria-label='Published <time datetime="2023-08-04T13:26:36+00:00" class="datetime">04 August 2023</time>
   
  '
                                        >
                                            Published{" "}
                                            <time
                                                dateTime="2023-08-04T13:26:36+00:00"
                                                className="datetime"
                                            >
                                                04 August 2023
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item gal-item en">
                            <div className="flex-row col-2">
                                <div className="item">
                                    <div className="">
                                        <div className="videowrapper">
                                            <object
                                                data="https://www.youtube.com/embed/Y4BIAblRktg"
                                                tabIndex={-1}
                                            >
                                                <param
                                                    name="movie"
                                                    value="https://www.youtube.com/embed/Y4BIAblRktg"
                                                />
                                                <param
                                                    name="allowFullScreen"
                                                    mozallowfullscreen="mozallowfullscreen"
                                                    msallowfullscreen="msallowfullscreen"
                                                    oallowfullscreen="oallowfullscreen"
                                                    webkitallowfullscreen="webkitallowfullscreen"
                                                    value="true"
                                                />
                                                <span>Video</span>
                                            </object>
                                        </div>
                                        <div className="category-wrap Video">Video</div>
                                        <a
                                            aria-label='Build a VR Environment Video Published <time datetime="2019-10-24T10:24:19+00:00" class="datetime">24 October 2019</time>
   
  '
                                            href="/en/news/3"
                                        >
                                            <div className="desc">Build a VR Environment</div>
                                        </a>
                                        <p
                                            className="date-wrap"
                                            aria-label='Published <time datetime="2019-10-24T10:24:19+00:00" class="datetime">24 October 2019</time>
   
  '
                                        >
                                            Published{" "}
                                            <time
                                                dateTime="2019-10-24T10:24:19+00:00"
                                                className="datetime"
                                            >
                                                24 October 2019
                                            </time>
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="">
                                        <div className="img-wrap">
                                            <div>
                                                <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                    <div className="field__label visually-hidden">Image</div>
                                                    <div className="field__item">
                                                        {" "}
                                                        <img
                                                            loading="lazy"
                                                            src="/sites/default/files/2019-10/12.%203d%20print%20b.jpg"
                                                            width={4032}
                                                            height={3024}
                                                            alt="3d print"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="category-wrap Gallery">Gallery</div>
                                        <a
                                            aria-label='3D Print a Mini-City Gallery Published <time datetime="2019-10-24T10:26:52+00:00" class="datetime">24 October 2019</time>
   
  '
                                            href="/en/news/4"
                                        >
                                            <div className="desc">3D Print a Mini-City</div>
                                        </a>
                                        <p
                                            className="date-wrap"
                                            aria-label='Published <time datetime="2019-10-24T10:26:52+00:00" class="datetime">24 October 2019</time>
   
  '
                                        >
                                            Published{" "}
                                            <time
                                                dateTime="2019-10-24T10:26:52+00:00"
                                                className="datetime"
                                            >
                                                24 October 2019
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view-more home">
                        <a
                            aria-label="Button for view more news and media"
                            href="/en/media-center"
                        >
                            View More
                            <i className="material-icons en" />
                        </a>
                    </div>
                    <div className="multi-square">
                        <b>
                            <i />
                        </b>
                    </div>
                    <div className="multi-circle">
                        <b>
                            <i />
                        </b>
                    </div>
                </div>
            </div>
            <div id="register-wrap" className="ng-scope en">
                <div className="container home-subscribe en">
                    <span className="multi-square-orange">
                        <b>
                            <i />
                        </b>
                    </span>
                    <div>
                        <img
                            src="/static/media/mail.2c90fa17e8d6b9c3c449e7c4245fb874.svg"
                            className="mail-icon"
                            alt=""
                        />
                    </div>
                    <p>Our latest insights, delivered straight to your inbox</p>
                    <p>
                        <a
                            className="red-btn btn btn-signup"
                            aria-label="subscribe button for newsletter"
                            href="/en/subscribe"
                        >
                            Subscribe <i className="material-icons en" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Test













// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import AGE_GROUPS_VISUALS01 from "../assets/images/AGE-GROUPS-VISUALS-01.png";
// import AGE_GROUPS_VISUALS02 from "../assets/images/AGE-GROUPS-VISUALS-02.png";
// import AGE_GROUPS_VISUALS03 from "../assets/images/AGE-GROUPS-VISUALS-03.png";
// import AGE_GROUPS_VISUALS04 from "../assets/images/AGE-GROUPS-VISUALS-04.png";
// import mail from "../assets/images/mail.svg";
// import print_a_mini_city from "../assets/images/Print-a-Mini-City-Gallary.jpg"
// import arrow_forward_white from "../assets/images/arrow_forward-white.svg";
// import Studio5_outro from "../assets/videos/Studio5_outro.mov";
// import { baseURL, fetchData } from '../ApiFile';



// export default function Homepage() {
//     // const iconBaseURL = "http://51.136.51.121/drupal-app/web/";
//     const endpointURL = {
//         banner: "api/banner?_format=json",
//         homeAbout: "api/about?_format=json",
//         zone: "api/zones?_format=json",
//         featured_activities: "api/featured_activities",
//         newsArticle: "api/featured-news-article?_format=json",
//         newsVideo: "api/featured-news-video?_format=json",
//         newsgallery: "api/featured-news-gallery?_format=json"
//     }

//     const [banner, setBanner] = useState(null);
//     const [homeAbout, setHomeAbout] = useState(null);
//     const [zone, setZone] = useState(null);
//     const [activitiesState, setActivitiesState] = useState(null);
//     const [newsArticleState, setNewsArticleState] = useState(null);
//     const [newsVideoState, setNewsVideoState] = useState(null);
//     const [newsGalleryState, setNewsGalleryState] = useState(null);

//     const [enrollBtn, setEnrollBtn] = useState(false);
//     const handleEnrollBtn = () => {
//         setEnrollBtn(true);
//     }
//     const handleClosewindow = () => {
//         setEnrollBtn(false);
//     }

//     useEffect(() => {
//         (async () => {
//             const bannerData = await fetchData(endpointURL.banner);
//             setBanner(bannerData);
//             console.log("bannerData:", bannerData);
//             const homeAboutData = await fetchData(endpointURL.homeAbout);
//             setHomeAbout(homeAboutData);
//             console.log("about:", homeAboutData);
//             const zoneData = await fetchData(endpointURL.zone);
//             setZone(zoneData);
//             console.log("zone:", zoneData);
//             const activitiesData = await fetchData(endpointURL.featured_activities);
//             setActivitiesState(activitiesData);
//             console.log("activities state:", activitiesState);
//             const newsArticleData = await fetchData(endpointURL.newsArticle);
//             setNewsArticleState(newsArticleData);
//             console.log("news article:", newsArticleState);
//             const newsVideoData = await fetchData(endpointURL.newsVideo);
//             setNewsVideoState(newsVideoData);
//             console.log(newsVideoState);
//             const newsGalleryData = await fetchData(endpointURL.newsgallery);
//             setNewsGalleryState(newsGalleryData);
//             console.log("news gallery state:", newsGalleryState);
//         })();
//     }, []);
//     return (
//         <>
//             <div id="main-content">
//                 <div className="app-slider ">
//                     <div className="video-box">
//                         <div className="video-btn">
//                             <button className="btn-toggle play" aria-label="Pause the video">
//                                 Pause
//                             </button>
//                         </div>
//                         <video
//                             autoPlay
//                             playsInline
//                             loop
                       
//                         >
//                             <source src={banner ? baseURL + banner[0].video.replace('Video file<br />', '').trim() : null}
//                             // type='video/mov'
//                             />
//                         </video>
//                     </div>
//                     <div className="banner">
//                         <div>
//                             <div className="desc en">
//                                 {banner ? (
//                                     <div dangerouslySetInnerHTML={{ __html: banner[0].body }}></div>
//                                 ) : (
//                                     <p>Loading...</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="makeHome" id="skipContent" />
//                 <div className="about-studio container">
//                     <div className="item">
//                         {homeAbout ? (
//                             <div dangerouslySetInnerHTML={{ __html: homeAbout[0].body }}></div>
//                         ) :
//                             (
//                                 <p>Loading...</p>
//                             )}
//                     </div>
//                     <img
//                         alt=""
//                         src="/static/media/about-home-1.38402d57.png"
//                         style={{ display: "none" }}
//                     />
//                     <span className="orange-circle" />
//                 </div>
//                 <div className="top-images ng-scope">
//                     <div className="container">
//                         <div className="item ">
//                             <img src={AGE_GROUPS_VISUALS01} alt="" />
//                         </div>
//                         <div className="item ">
//                             <img src={AGE_GROUPS_VISUALS02} alt="" />
//                         </div>
//                         <div className="item ">
//                             <img src={AGE_GROUPS_VISUALS03} alt="" />
//                         </div>
//                         <div className="item ">
//                             <img src={AGE_GROUPS_VISUALS04} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="zone-wrap">
//                     <div className="container">
//                         <div className="zone-text en">
//                             <h3>Zone</h3>
//                             <div>
//                                 Studio 5 has three main zones to provide the kids extraordinary
//                                 learning experiences.
//                             </div>
//                         </div>
//                         <div className="service-zone en">
//                             <div className="flex-row same-height col-4 ng-scope">
//                                 {zone && zone.map((item, index) => (
//                                     <div className="item" key={index}>
//                                         <div className="icon"
//                                             style={{
//                                                 background:
//                                                     `url(${baseURL}${item.zoneimage}) no-repeat`
//                                             }} >
//                                         </div>
//                                         <h3>{item.zonenames}</h3>
//                                         <div className="desc" dangerouslySetInnerHTML={{ __html: item.zonesdescription }}>
//                                         </div>
//                                     </div>
//                                 )
//                                 )
//                                 }
//                             </div>
//                             <span className="grey-square" />
//                         </div>
//                     </div>
//                 </div>
//                 {(activitiesState?.results.length > 0) ? (
//                     <div className="activityHome">
//                         <div className="container">
//                             <div className="zone-text en ">
//                                 <h3 id="activity">Activities</h3>
//                                 <div>
//                                     Explore our latest activities and enroll in them
//                                     <Link to="/activities" className="btnNewYellow btn"
//                                         aria-labelledby="activity"
//                                         aria-label="Button for view more activity">View More
//                                         <i className="material-icons en">arrow_forward
//                                         </i></Link>
//                                 </div>
//                             </div>
//                             <div className="row noFlex">
//                                 <ul aria-label="Activities">
//                                     <li className="col s12 m4 l4">
//                                         <div className="newactivities">
//                                             <div
//                                                 className="textHolderNA Investigation-Zone"
//                                             >
//                                                 <div className="topTextHolderNA">
//                                                     <Link to="/projectDetailsPage" aria-label="Layan School Activity test Mixed 10-20 Years Old Start date 05 Nov, 2024 09:39 am End date 06 Dec, 2024 10:39 am">
//                                                         <h4>
//                                                             <i className="topHeadNA" />
//                                                             {activitiesState.results[0].title}
//                                                         </h4>
//                                                     </Link>

//                                                     <div className="topTextInsideNA">
//                                                         <span className="blackText">
//                                                             <i className="topBoyIconNA" />
//                                                             {activitiesState.results[0].field_gender}
//                                                         </span>
//                                                         <span>{activitiesState.results[0].field_age_group}</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="bottomTextHolderNA">
//                                                     <div className="bottomTextRightNA">
//                                                         <span className="calendarNA">
//                                                             <i className="calendar-icons" /> Start date{" "}
//                                                             <span className="date">
//                                                                 {activitiesState.results[0].field_start_and_end_time_3}<br />
//                                                                 <small>
//                                                                     {activitiesState.results[0].field_start_and_end_time}
//                                                                 </small>
//                                                             </span>
//                                                         </span>
//                                                         <span className="calendarNA">
//                                                             <i className="calendar-icons" /> End date
//                                                             <span className="date">
//                                                                 {activitiesState.results[0].field_start_and_end_time_4}
//                                                                 <br />
//                                                                 <small>{activitiesState.results[0].field_start_and_end_time_1}</small>
//                                                             </span>
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="btnHolderNA">
//                                                 <button
//                                                     aria-label="Layan School Activity test Enroll"
//                                                     className="btn blueColor "
//                                                     onClick={handleEnrollBtn}
//                                                 >
//                                                     Enroll
//                                                 </button>
//                                                 <button
//                                                     className="btn"
//                                                     aria-label="volunteer now for Layan School Activity test"
//                                                     onClick={handleEnrollBtn}
//                                                 >
//                                                     Volunteer Now
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </li>
//                                     <li className="col s12 m4 l4">
//                                         <div className="newactivities">
//                                             <div
//                                                 className="textHolderNA Software-Zone"
//                                             >
//                                                 <div className="topTextHolderNA">
//                                                     <Link aria-label="Recipe with AI  Mixed 15-18 Years Old Start date 14 Nov, 2023 02:00 pm End date 22 Jan, 2024 03:00 pm" to="/workshopDetails">
//                                                         <h4>
//                                                             <i className="topHeadNA" />
//                                                             {activitiesState.results[1].title}{" "}
//                                                         </h4>
//                                                     </Link>
//                                                     <div className="topTextInsideNA">
//                                                         <span className="blackText">
//                                                             <i className="topBoyIconNA" /> {activitiesState.results[1].field_gender}
//                                                         </span>
//                                                         <span>{activitiesState.results[1].field_age_group}</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="bottomTextHolderNA">
//                                                     <div className="bottomTextRightNA">
//                                                         <span className="calendarNA">
//                                                             <i className="calendar-icons" /> Start date{" "}
//                                                             <span className="date">
//                                                                 {activitiesState.results[1].field_start_and_end_time_3} <br />
//                                                                 <small>{activitiesState.results[1].field_start_and_end_time}</small>
//                                                             </span>
//                                                         </span>
//                                                         <span className="calendarNA">
//                                                             <i className="calendar-icons" /> End date
//                                                             <span className="date">
//                                                                 {activitiesState.results[1].field_start_and_end_time_4}
//                                                                 <br />
//                                                                 <small>{activitiesState.results[1].field_start_and_end_time_1}</small>
//                                                             </span>
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="btnHolderNA" />
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="activityHome">
//                         <div className="container">
//                             <div className="zone-text en activity-block">
//                                 <h3 id="activity">Activities</h3>
//                                 <div>Explore our latest activities and enroll in them</div>
//                             </div>
//                             <div className="row noFlex">
//                                 <ul aria-label="Activities">
//                                     <div className="activities-inner">
//                                         <p>
//                                             There are no latest activities at the moment, check out activities
//                                             page to see what's new
//                                         </p>
//                                         <Link to="/activities" className="btnNewYellow btn"
//                                             aria-labelledby="activity"
//                                             aria-label="Button for view more activity"> Go to activities<i className="material-icons en">arrow_forward</i></Link>
//                                     </div>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 <div className="news-wrap">
//                     <div className="container">
//                         <h2 id="news-media" className="line">
//                             News &amp; Media
//                             <span className="grey-square-rotate" />
//                         </h2>
//                         <div className="flex-row col-2">
//                             <div className="item news-item">
//                                 <div className="flex-row col-3">
//                                     {newsArticleState && (
//                                         <div className="homeNewsParent">
//                                             <Link className="item homeNewsText1"
//                                                 aria-label='Test news 2023 News Published <time datetime="2023-12-19T13:13:52+00:00" class="datetime">19 December 2023</time>' to='/news'><h3>{newsArticleState[0].title}</h3></Link>

//                                             <div className="img-wrap">
//                                                 <img
//                                                     src="undefined/sites/default/files/2023-12/4.jpg, /sites/default/files/2023-12/4_0.jpg"
//                                                     alt="news image"
//                                                 />
//                                             </div>
//                                             <div className="homeNewsText2">
//                                                 <div className="category-wrap">
//                                                     {newsArticleState[0].category}
//                                                 </div>
//                                                 <div className="desc">
//                                                     <p dangerouslySetInnerHTML={{ __html: newsArticleState[0].description }}></p>
//                                                 </div>
//                                                 <p
//                                                     className="date-wrap"
//                                                     aria-label='Published <time datetime="2023-12-19T13:13:52+00:00" class="datetime">19 December 2023</time>'
//                                                     dangerouslySetInnerHTML={{ __html: newsArticleState[0].date }}
//                                                 >
//                                                 </p>
//                                             </div>
//                                         </div>)}
//                                 </div>
//                             </div>
//                             <div className="item gal-item en">
//                                 <div className="flex-row col-2">
//                                     {newsVideoState && (<div className="item">
//                                         <div className="">
//                                             <div className="videowrapper">
//                                                 <object
//                                                     data={newsVideoState[0].video}
//                                                     tabIndex={-1}
//                                                 >
//                                                     <param
//                                                         name="movie"
//                                                         value={newsVideoState[0].video}
//                                                     />
//                                                     <param
//                                                         name="allowFullScreen"
//                                                         mozallowfullscreen="mozallowfullscreen"
//                                                         msallowfullscreen="msallowfullscreen"
//                                                         oallowfullscreen="oallowfullscreen"
//                                                         webkitallowfullscreen="webkitallowfullscreen"
//                                                         value="true"
//                                                     />
//                                                     <span>Video</span>
//                                                 </object>
//                                             </div>
//                                             <div className="category-wrap Video">{newsVideoState[0].category}</div>
//                                             <Link to="/testVideo"> <div className="desc">{newsVideoState[0].title}</div></Link>
//                                             <p
//                                                 className="date-wrap"
//                                                 aria-label='Published <time datetime="2023-12-17T08:56:58+00:00" class="datetime">17 December 2023</time>'
//                                                 dangerouslySetInnerHTML={{ __html: newsVideoState[0].date }}
//                                             >
//                                             </p>
//                                         </div>
//                                     </div>)}
//                                     {newsGalleryState && (<div className="item">
//                                         <div className="">
//                                             <div className="img-wrap">
//                                                 <div dangerouslySetInnerHTML={{ __html: newsGalleryState[0].image }}>
//                                                 </div>
//                                             </div>
//                                             <div className="category-wrap Gallery">{newsGalleryState[0].category}</div>
//                                             <Link to="/gallery" aria-label='3D Print a Mini-City Gallery Published <time datetime="2019-10-24T10:26:52+00:00" class="datetime">24 October 2019</time>'><div className="desc">{newsGalleryState[0].title}</div></Link>
//                                             <p
//                                                 className="date-wrap"
//                                                 aria-label='Published <time datetime="2019-10-24T10:26:52+00:00" class="datetime">24 October 2019</time>'
//                                                 dangerouslySetInnerHTML={{ __html: newsGalleryState[0].date }}
//                                             >
//                                             </p>
//                                         </div>
//                                     </div>)}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="view-more home">
//                             {/* <a
//                                 aria-label="Button for view more news and media"
//                                 href="/en/media-center"
//                             >
//                                 View More
//                                 <img className="material-icons en" src={arrow_forward} />
//                             </a> */}
//                             <Link to="/media-center" aria-label="Button for view more news and media">
//                                 View More
//                                 <i className="material-icons en" />
//                             </Link>
//                         </div>
//                         <div className="multi-square">
//                             <b>
//                                 <i />
//                             </b>
//                         </div>
//                         <div className="multi-circle">
//                             <b>
//                                 <i />
//                             </b>
//                         </div>
//                     </div>
//                 </div>
//                 <div id="register-wrap" className="ng-scope en">
//                     <div className="container home-subscribe en">
//                         <span className="multi-square-orange">
//                             <b>
//                                 <i />
//                             </b>
//                         </span>
//                         <div>
//                             <img
//                                 src={mail}
//                                 className="mail-icon"
//                                 alt=""
//                             />
//                         </div>
//                         <p>Our latest insights, delivered straight to your inbox</p>
//                         <p>
//                             {/* <a
//                                 className="red-btn btn btn-signup"
//                                 aria-label="subscribe button for newsletter"
//                                 href="/en/subscribe"
//                             >
//                                 Subscribe <i className="material-icons en" ><img src={arrow_forward_white} /></i>
//                             </a> */}
//                             <Link to="/subscribe" className="red-btn btn btn-signup"
//                                 aria-label="subscribe button for newsletter">Subscribe <i className="material-icons en" ><img src={arrow_forward_white} /></i></Link>
//                         </p>
//                     </div>
//                 </div>
//             </div >
//             {
//                 enrollBtn && (
//                     <div
//                         className="ReactModal__Overlay ReactModal__Overlay--after-open"
//                         style={{
//                             position: "fixed",
//                             inset: 0,
//                             backgroundColor: "rgba(255, 255, 255, 0.75)"
//                         }}
//                     >
//                         <div
//                             id="popupmodal"
//                             className="ReactModal__Content ReactModal__Content--after-open"
//                             tabIndex={-1}
//                             role="dialog"
//                             aria-label="Modal"
//                             aria-modal="true"
//                             style={{
//                                 position: "absolute",
//                                 inset: "50% auto auto 50%",
//                                 border: "1px solid rgb(204, 204, 204)",
//                                 background: "rgb(255, 255, 255)",
//                                 overflow: "auto",
//                                 borderRadius: 4,
//                                 outline: "none",
//                                 padding: 0,
//                                 transform: "translate(-50%, -50%)"
//                             }}
//                         >
//                             <button
//                                 data-dismiss="modal"
//                                 type="button"
//                                 aria-label="modal close"
//                                 className="badge modalClose"
//                                 onClick={handleClosewindow}
//                             >
//                                 <i className="material-icons">close</i>
//                             </button>
//                             <div className="popupAlert failed ">
//                                 <div className="pulsating-circle">
//                                     <span>
//                                         <img
//                                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAzCAYAAAA+VOAXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACHpJREFUeNrMWmtsHFcVPvcx69216zhYjYudKA2QtFViERqqIleoiChUVShIBbVNKHEefjQSCIl//UGQEEL8gIKQKsePNvgRoBDUSEWokKZy2ipNeRSiqlWTksRpHRLHTuxmva+Zuffy3ZlZe/sQRd5BmbVmZz07u/c8v3O+c5cZYyiuh+nuwjMnNjTA8ULQnj0eMU1a4MBfZSWpcY9x8AHcxlhwMkYTHxhc0rqSYn0oHJpo155A6lBwQwqGssbiEDi4i0EJXOf2XquZtuelGzNWJRjzIZAKv3Z4lIuqdR7A03dDkelzobbM2/kNJbj1iiFWw7qxKmFta2Bt8emRVEmNrPM4fQo2bvSIUpBa30BUsHafJ2qwEQQl38H/b3o9uyYlLV0RGW8wMfJh/x8Xjq7x3t38cN1y+hpM3whhU/BRA265au+rX/zI60WiX2bprqd9fiInlrguj1MJgRiXukwnXD6DsM/hUoGFi7h1UMC+ZhTGlAlDKg8v5Ur6WI4Zb8nr8nhzwpD89a9Sh38+klOGvEhmK20WnshWpX8WYZaCInweeqaeGBMs0CkBSgRR/tA2l+ZapS5Z6LEAGxwGInIIXbY6aIuyUMI6r5jH864dymiZjMQObQL8p82Ml8MrELYOwmuz8C/5eA2fhUoUZvIOw0tbJ5LhCULQ/GAE3/mGyzwqWaHhG3tGuJCI1hOwXB4HQIo834fPuEtcJCSctA2aMeuKbyvuBzmho2QWtHgwPPk22W0AFuYL8IKHepcQTzAD+57pLAexfjNN41y0guJqDkeRheGLJoS4CpE2p9vkJWISoCASkhO2rTChMDodhFGAmyyEU3+xKJI0oVcQTbPK3sEYS0pOWAl1VDMCwT8q0NW75VRZWd1r6J3iDafFxsGikffflIi8o67Ozala15XxeyKwqAkSWwYhpSpFr8pyblS4vZyb82wk1RBNMYdTkBOmoostav5HBImavDAZS3WKE57gAkPF3Tt0ep5cHkKsWiQaHywsp2ZVPlTaJCexF4RhC0KzD7bsC+uaKzMztcVS7MUOBYujFbcylWapFCW3iTQx7+OAaGypPMFYmaGeG5aYxGYLdjdugFCmyvrvsbcJ7/RCVDY10VMetw6hHoyceVJ+xKA/DF5ZiFDlfDqtgj6XEpUTdjigCdzIU6Fotvnj7/dXtSd0jROX+NHJMm0I1XQNfNosoJKuKnyLEmvymqiJUvvHBE9MnagOK+REFE/yw4cKWJsHxTBZdaLSdgTRcdFSOFVpQcyi8cPXQaKD/c3XN6pgTEIsgZ7opWtGMC/yRGVGUIFai6i+m6bCJ9KXUu4jnV4wBkyGJ6KMBWN43f4nTSlKYhnR0QpBsuhUvKrHV64vn1/m+E7IRZKghLFNBggp1w6t7/mmK0hU+IRh701sWzN0HW97+/jHtk7Tk4OCdFJyAkowH6LjYIOjglQgcF1kfVblMIGF1XJae/aNw2O5YLrw5KCTjJwQgozjkI9wehAWTwm6AolnabG4uRHUlrHwFZxLcqjfoqtH3UsfPMU8xiTae3F/dnDgfEkJXxeokJaUFREVXYAom9S417cXV9Ox1MYtTWlD++cY9SWDFH28lbS373uaPzHmUP/ob2Dxt1jY7FVPAqwCl3F+80z3QEmOHyTalZAG0Fr6vk3E5auBvDzV0/na0a7hy0fHT+u16fp0XcZ3pqamqNCWLo+3T84/d8fWPO5kX+8+qKm/T/wPnPz/r4TQPm36a1eBnKC8ebxX05Y7afp2Wif+jPfbt5C42pBxJu7m+jX3Z+q3KHIP9G5XT6kul/XCZ/0D198TwdgFnML4Hp17ilI3a1VSOzo1H9mNGnE30REkcOejpeIBl7JyjOftUNloxezgrAaIYXHu2fl7d5DTN5ryu7e7YuhH/PcHGlY1rrq0Uba4G29qaV4muBCeh/ZWp09e/Pe100///dZXfvHqTi/TfwhK5sHHlzaQjTcnYJCOf9m6AEp00+r0/fdTm9vY/FmYqQMB3xz1USkYfdX61taX7r2Npvx/Om+tOJ13LtstmNYAgq+vEhIAdPwolb7S0d72w+9Mfmld48ovZ4nW290i23rwRYK0DMeGYj1teK6r548TPykdSgsA2NIQNu5NFuTECLHNd97u3LZhZWuGaA0uN9mtLvQfN0Q0rzLmb0wT3XrvpjsyUkrQQD8hXazlD8dJbbvlngbh0iao1GqFd0nV+3Y6CwWwoB3iN5UUteD9VVCqw/EPZLmXFHoagoRuQeskUyGrQy4ULPsxAWmtWi8c6ZiUBeMbifNUXVLoqf264boXzsxSnnJ2E2UOV/IZYtOOFr5rqAVUboXd6kJ2gzaBc6By/+MISaUTQ4qsIGvVC3952Z3Jz0xZJSJE0g6nWckor3WwX20bQDvivPy2Xzx3eIKCXxgkg084jNQj/d6+7VvPXnlxTR+K2fMq3Pq1O0MlhNZclrN30HNfhDcuQYs/nXo2c+Tk+EnEnV8DKsb48IpFEnWS9Ld6vU9uOzj3/UMtJzbf9Zl0W7p5DRS50W79RhPxCzNUPvnSM+eeffwP4+r5L2RKtYw7Yq3Y1NOJwAEeMWnbP6IBhaflmWs/fUx6X6VbZAPgVtFcc9vfToGdutQzkvP9EgmmkU74zMBwMlrxYCQpWTgy6+QuDT/GRy6QPLbvd2cnps/T5zvanUefucddcV9DQbOH0PLCc54LPpUUT/Tuhif8gDn4dusdcCSAWEEyO5JcvJcZGOOlru1aSAfW1yT7RrnZ/bAOWPfQyPVPbDtncm0jCy2Yz4gz0FUIi74vdLuQ5O3diZ4V74Fl259zqN5OrZAPmiUEneRge2rvF5tXKzBq4YngZ0O+9QzU4jhLPzyyQweFePyAkMAs5trPCUcMyiXvAf9HgAEA7vieMZt8oxUAAAAASUVORK5CYII="
//                                             alt=""
//                                         />
//                                     </span>
//                                 </div>
//                                 <h4 aria-label="Title " />
//                                 <div className="popupMessage">
//                                     <p aria-label="Message [object Object]">
//                                         <Link to="/loginPage"><b>Login</b></Link>
//                                         {" "}
//                                         is required for enrollment
//                                     </p>
//                                 </div>
//                                 <button aria-label="Ok Button" className="btn blue-border">
//                                     Ok
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//         </>
//     )
// }
