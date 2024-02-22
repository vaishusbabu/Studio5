
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Student() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div><div id="main-container">
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
                            <a href="/register_home">Register</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a tabIndex={0} aria-current="page" href="/student">
                                <span>Student</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="student-color-container">
                <span className="grey-square-rotate red-sq one" />
                <span className="grey-square-rotate red-sq two" />
                <span className="grey-square-rotate red-sq three" />
                <span className="grey-square-rotate red-sq four" />
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
                <span className="multi-square four">
                    <b>
                        <i />
                    </b>
                </span>
            </div>
            <div
                id="skipContent"
                className="container registration-form student-registration-container"
            >
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
                            <a aria-label="About us" activeclassname="active" className="sidenav-close" href="/guardian">
                                {" "}
                                Guardian{" "}
                            </a>

                        </button>
                        <button aria-label="Are you Student" className="btn">
                            <a aria-label="About us" activeclassname="active" className="sidenav-close" href="/student">
                                {" "}
                                Student{" "}
                            </a>
                        </button>
                        <button aria-label="Are you School" className="btn">
                            <a aria-label="About us" activeclassname="active" className="sidenav-close" href="/school">

                                School
                            </a>
                        </button>
                        <button aria-label="Are you Volunteer" className="btn">
                            <a aria-label="About us" activeclassname="active" className="sidenav-close" href="/volunteer">
                                Volunteer
                            </a>
                        </button>
                    </div>
                </div>
                <h2
                    tabIndex={0}
                    aria-label="For Student form"
                    className="primary-heading"
                    style={{ textAlign: "left" }}
                >
                    For Student
                </h2>
                <div className="row">
                    <div className="col s6 form-container">
                        <p style={{ textAlign: "left" }}>
                            Required fields are followed by <span className="asterisk">*</span>
                        </p>
                        <form autoComplete="no">
                            <div className="input-field item">
                                <input
                                    name="name"
                                    placeholder="Type student name in English"
                                    id="name"
                                    className=""
                                    data-date=""
                                    data-date-format="DD MMMM YYYY"
                                    type="text"
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />
                                <label htmlFor="name" style={{ left: 0, right: "auto" }}>
                                    Student name in English <span className="asterisk">*</span>
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Required field."
                                    style={{ textAlign: "left" }}
                                />
                            </div>
                            <div className="input-field item">
                                <input
                                    name="nameArabic"
                                    placeholder="Type student name in Arabic"
                                    id="nameArabic"
                                    className=""
                                    data-date=""
                                    data-date-format="DD MMMM YYYY"
                                    type="text"
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />
                                <label htmlFor="nameArabic" style={{ left: 0, right: "auto" }}>
                                    Student name in Arabic{" "}
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Required field."
                                    style={{ textAlign: "left" }}
                                />
                            </div>
                            <div className=" date-popup">
                                <div className="input-field item">
                                    <div className="react-datepicker-wrapper">
                                        <div className="react-datepicker__input-container">
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                            <button
                                                aria-label="choose date of birth button"
                                                type="button"
                                                className="example-custom-input"
                                            >
                                                <span aria-hidden="true" className="material-icons">
                                                    date_range
                                                </span>
                                            </button>
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
                            <div className="result-type1">
                                <div className="input-field mobileSelect">
                                    <label htmlFor="nationality" style={{ left: 0, right: "auto" }}>
                                        Nationality <span className="asterisk">*</span>
                                    </label>
                                    <select
                                        className="browser-default"
                                        name="nationality"
                                        id="nationality"
                                        tabIndex={0}
                                        style={{ textAlign: "left" }}
                                    >
                                        <option value="" disabled="">
                                            {" "}
                                            Select your nationality{" "}
                                        </option>
                                        <option value={1}>Afghanistan</option>
                                        <option value={2}>Albania</option>
                                        <option value={4}>Algeria</option>
                                        <option value={5}>American Samoa</option>
                                        <option value={6}>Andorra</option>
                                        <option value={7}>Angola</option>
                                        
                                        <option value={189}>Anguilla</option>
                                        <option value={3}>Antarctica</option>
                                        <option value={8}>Antigua and Barbuda</option>
                                        <option value={10}>Argentina</option>
                                        <option value={16}>Armenia</option>
                                        <option value={152}>Aruba</option>
                                        <option value={11}>Australia</option>
                                        <option value={12}>Austria</option>
                                        <option value={9}>Azerbaijan</option>
                                        <option value={13}>Bahamas</option>
                                        <option value={14}>Bahrain</option>
                                        <option value={15}>Bangladesh</option>
                                        <option value={17}>Barbados</option>
                                        <option value={34}>Belarus</option>
                                        <option value={18}>Belgium</option>
                                        <option value={26}>Belize</option>
                                        <option value={59}>Benin</option>
                                        <option value={19}>Bermuda</option>
                                        <option value={20}>Bhutan</option>
                                        <option value={21}>Bolivia, Plurinational State of</option>
                                        <option value={22}>Bosnia and Herzegovina</option>
                                        <option value={23}>Botswana</option>
                                        <option value={25}>Brazil</option>
                                        <option value={30}>Brunei Darussalam</option>
                                        <option value={31}>Bulgaria</option>
                                        <option value={241}>Burkina Faso</option>
                                        <option value={33}>Burundi</option>
                                        <option value={35}>Cambodia</option>
                                        <option value={36}>Cameroon</option>
                                        <option value={37}>Canada</option>
                                        <option value={38}>Cape Verde</option>
                                        <option value={40}>Central African Republic</option>
                                        <option value={42}>Chad</option>
                                        <option value={43}>Chile</option>
                                        <option value={44}>China</option>
                                        <option value={48}>Colombia</option>
                                        <option value={49}>Comoros</option>
                                        <option value={51}>Congo</option>
                                        <option value={52}>
                                            Congo, the Democratic Republic of the
                                        </option>
                                        <option value={53}>Cook Islands</option>
                                        <option value={54}>Costa Rica</option>
                                        <option value={55}>Croatia</option>
                                        <option value={56}>Cuba</option>
                                        <option value={57}>Cyprus</option>
                                        <option value={58}>Czech Republic</option>
                                        <option value={109}>Côte d'Ivoire</option>
                                        <option value={60}>Denmark</option>
                                        <option value={79}>Djibouti</option>
                                        <option value={61}>Dominica</option>
                                        <option value={62}>Dominican Republic</option>
                                        <option value={63}>Ecuador</option>
                                        <option value={233}>Egypt</option>
                                        <option value={64}>El Salvador</option>
                                        <option value={65}>Equatorial Guinea</option>
                                        <option value={67}>Eritrea</option>
                                        <option value={68}>Estonia</option>
                                        <option value={66}>Ethiopia</option>
                                        <option value={69}>Faroe Islands</option>
                                        <option value={72}>Fiji</option>
                                        <option value={73}>Finland</option>
                                        <option value={75}>France</option>
                                        <option value={76}>French Guiana</option>
                                        <option value={77}>French Polynesia</option>
                                        <option value={80}>Gabon</option>
                                        <option value={82}>Gambia</option>
                                        <option value={81}>Georgia</option>
                                        <option value={84}>Germany</option>
                                        <option value={85}>Ghana</option>
                                        <option value={86}>Gibraltar</option>
                                        <option value={88}>Greece</option>
                                        <option value={89}>Greenland</option>
                                        <option value={90}>Grenada</option>
                                        <option value={91}>Guadeloupe</option>
                                        <option value={92}>Guam</option>
                                        <option value={93}>Guatemala</option>
                                        <option value={94}>Guinea</option>
                                        <option value={178}>Guinea-Bissau</option>
                                        <option value={95}>Guyana</option>
                                        <option value={96}>Haiti</option>
                                        <option value={98}>Holy See (Vatican City State)</option>
                                        <option value={99}>Honduras</option>
                                        <option value={100}>Hong Kong</option>
                                        <option value={101}>Hungary</option>
                                        <option value={102}>Iceland</option>
                                        <option value={103}>India</option>
                                        <option value={104}>Indonesia</option>
                                        <option value={105}>Iran, Islamic Republic of</option>
                                        <option value={106}>Iraq</option>
                                        <option value={107}>Ireland</option>
                                        <option value={108}>Italy</option>
                                        <option value={110}>Jamaica</option>
                                        <option value={111}>Japan</option>
                                        <option value={113}>Jordan</option>
                                        <option value={112}>Kazakhstan</option>
                                        <option value={114}>Kenya</option>
                                        <option value={87}>Kiribati</option>
                                        <option value={115}>
                                            Korea, Democratic People's Republic of
                                        </option>
                                        <option value={116}>Korea, Republic of</option>
                                        <option value={117}>Kuwait</option>
                                        <option value={118}>Kyrgyzstan</option>
                                        <option value={119}>Lao People's Democratic Republic</option>
                                        <option value={122}>Latvia</option>
                                        <option value={120}>Lebanon</option>
                                        <option value={121}>Lesotho</option>
                                        <option value={123}>Liberia</option>
                                        <option value={124}>Libya</option>
                                        <option value={125}>Liechtenstein</option>
                                        <option value={126}>Lithuania</option>
                                        <option value={127}>Luxembourg</option>
                                        <option value={128}>Macao</option>
                                        <option value={129}>Madagascar</option>
                                        <option value={130}>Malawi</option>
                                        <option value={131}>Malaysia</option>
                                        <option value={132}>Maldives</option>
                                        <option value={133}>Mali</option>
                                        <option value={134}>Malta</option>
                                        <option value={167}>Marshall Islands</option>
                                        <option value={135}>Martinique</option>
                                        <option value={136}>Mauritania</option>
                                        <option value={137}>Mauritius</option>
                                        <option value={138}>Mexico</option>
                                        <option value={141}>Moldova, Republic of</option>
                                        <option value={139}>Monaco</option>
                                        <option value={140}>Mongolia</option>
                                        <option value={142}>Montenegro</option>
                                        <option value={143}>Montserrat</option>
                                        <option value={144}>Morocco</option>
                                        <option value={145}>Mozambique</option>
                                        <option value={32}>Myanmar</option>
                                        <option value={147}>Namibia</option>
                                        <option value={148}>Nauru</option>
                                        <option value={149}>Nepal</option>
                                        <option value={150}>Netherlands</option>
                                        <option value={155}>New Caledonia</option>
                                        <option value={157}>New Zealand</option>
                                        <option value={158}>Nicaragua</option>
                                        <option value={159}>Niger</option>
                                        <option value={160}>Nigeria</option>
                                        <option value={161}>Niue</option>
                                        <option value={164}>Northern Mariana Islands</option>
                                        <option value={163}>Norway</option>
                                        <option value={146}>Oman</option>
                                        <option value={169}>Pakistan</option>
                                        <option value={168}>Palau</option>
                                        <option value={83}>Palestine</option>
                                        <option value={170}>Panama</option>
                                        <option value={171}>Papua New Guinea</option>
                                        <option value={172}>Paraguay</option>
                                        <option value={173}>Peru</option>
                                        <option value={174}>Philippines</option>
                                        <option value={176}>Poland</option>
                                        <option value={177}>Portugal</option>
                                        <option value={180}>Puerto Rico</option>
                                        <option value={181}>Qatar</option>
                                        <option value={183}>Romania</option>
                                        <option value={184}>Russian Federation</option>
                                        <option value={185}>Rwanda</option>
                                        <option value={182}>Réunion</option>
                                        <option value={188}>Saint Kitts and Nevis</option>
                                        <option value={190}>Saint Lucia</option>
                                        <option value={193}>Saint Vincent and the Grenadines</option>
                                        <option value={246}>Samoa</option>
                                        <option value={194}>San Marino</option>
                                        <option value={195}>Sao Tome and Principe</option>
                                        <option value={196}>Saudi Arabia</option>
                                        <option value={197}>Senegal</option>
                                        <option value={198}>Serbia</option>
                                        <option value={199}>Seychelles</option>
                                        <option value={200}>Sierra Leone</option>
                                        <option value={201}>Singapore</option>
                                        <option value={202}>Slovakia</option>
                                        <option value={204}>Slovenia</option>
                                        <option value={28}>Solomon Islands</option>
                                        <option value={205}>Somalia</option>
                                        <option value={206}>South Africa</option>
                                        <option value={208}>Spain</option>
                                        <option value={41}>Sri Lanka</option>
                                        <option value={210}>Sudan</option>
                                        <option value={212}>Suriname</option>
                                        <option value={214}>Swaziland</option>
                                        <option value={215}>Sweden</option>
                                        <option value={216}>Switzerland</option>
                                        <option value={217}>Syria</option>
                                        <option value={45}>Taiwan, Province of China</option>
                                        <option value={218}>Tajikistan</option>
                                        <option value={238}>Tanzania, United Republic of</option>
                                        <option value={219}>Thailand</option>
                                        <option value={179}>Timor-Leste</option>
                                        <option value={220}>Togo</option>
                                        <option value={222}>Tonga</option>
                                        <option value={223}>Trinidad and Tobago</option>
                                        <option value={225}>Tunisia</option>
                                        <option value={226}>Turkey</option>
                                        <option value={227}>Turkmenistan</option>
                                        <option value={229}>Tuvalu</option>
                                        <option value={230}>Uganda</option>
                                        <option value={231}>Ukraine</option>
                                        <option value={224}>United Arab Emirates</option>
                                        <option value={234}>United Kingdom</option>
                                        <option value={239}>United States</option>
                                        <option value={242}>Uruguay</option>
                                        <option value={243}>Uzbekistan</option>
                                        <option value={156}>Vanuatu</option>
                                        <option value={244}>Venezuela, Bolivarian Republic of</option>
                                        <option value={203}>Viet Nam</option>
                                        <option value={29}>Virgin Islands, British</option>
                                        <option value={240}>Virgin Islands, U.S.</option>
                                        <option value={245}>Wallis and Futuna</option>
                                        <option value={211}>Western Sahara</option>
                                        <option value={247}>Yemen</option>
                                        <option value={248}>Zambia</option>
                                        <option value={207}>Zimbabwe</option>
                                    </select>
                                    <span
                                        className="helper-text"
                                        data-error="Required field."
                                        style={{ textAlign: "left" }}
                                    />
                                </div>
                            </div>
                            <div className="result-type1">
                                <div className="input-field mobileSelect">
                                    <label htmlFor="schoolName" style={{ left: 0, right: "auto" }}>
                                        School Name <span className="asterisk">*</span>
                                    </label>
                                    <select
                                        className="browser-default"
                                        name="schoolName"
                                        id="schoolName"
                                        style={{ textAlign: "left" }}
                                    >
                                        <option value="" disabled="">
                                            {" "}
                                            Select school name{" "}
                                        </option>
                                        <option value={0}>Other</option>
                                    </select>
                                    <span
                                        className="helper-text"
                                        data-error="Required field."
                                        style={{ textAlign: "left" }}
                                    />
                                </div>
                            </div>
                            <div className="input-field item">
                                <input
                                    name="qid"
                                    placeholder="Type your QID"
                                    id="qid"
                                    className=""
                                    data-date=""
                                    data-date-format="DD MMMM YYYY"
                                    maxLength={11}
                                    type="text"
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />
                                <label htmlFor="qid" style={{ left: 0, right: "auto" }}>
                                    QID <span className="asterisk">*</span>
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Required field."
                                    style={{ textAlign: "left" }}
                                />
                            </div>
                            <div className="input-field item">
                                <div
                                    className="input-radio valign-wrapper"
                                    role="radiogroup"
                                    aria-labelledby="gender"
                                >
                                    <div className="Male">
                                        <input
                                            aria-checked="false"
                                            name="gender"
                                            id="Male"
                                            aria-labelledby="gender Male"
                                            type="radio"
                                            readOnly=""
                                            className="radio-btn"
                                        />
                                        <label id="_Male" htmlFor="Male" className="custom-radio-style">
                                            <span className="custom-radio-style">Male</span>
                                        </label>
                                    </div>
                                    <div className="Female">
                                        <input
                                            aria-checked="false"
                                            name="gender"
                                            id="Female"
                                            aria-labelledby="gender Female"
                                            type="radio"
                                            readOnly=""
                                            className="radio-btn"
                                        />
                                        <label
                                            id="_Female"
                                            htmlFor="Female"
                                            className="custom-radio-style"
                                        >
                                            <span className="custom-radio-style">Female</span>
                                        </label>
                                    </div>
                                </div>
                                <label
                                    htmlFor="gender"
                                    id="gender"
                                    style={{ left: 0, right: "auto" }}
                                >
                                    Gender <span className="asterisk">*</span>
                                </label>
                                <span className="helper-text" data-error="Required field." />
                            </div>
                            <div className="result-type1">
                                <div className="input-field mobileSelect">
                                    <label htmlFor="grade" style={{ left: 0, right: "auto" }}>
                                        Grade <span className="asterisk">*</span>
                                    </label>
                                    <select
                                        className="browser-default"
                                        name="grade"
                                        id="grade"
                                        tabIndex={0}
                                        style={{ textAlign: "left" }}
                                    >
                                        <option value="" disabled="">
                                            {" "}
                                            Select your grade{" "}
                                        </option>
                                        <option>Grade 1</option>
                                        <option>Grade 2</option>
                                        <option>Grade 3</option>
                                        <option>Grade 4</option>
                                        <option>Grade 5</option>
                                        <option>Grade 6</option>
                                        <option>Grade 7</option>
                                        <option>Grade 8</option>
                                        <option>Grade 9</option>
                                        <option>Grade 10</option>
                                        <option>Grade 11</option>
                                        <option>Grade 12</option>
                                    </select>
                                    <span
                                        className="helper-text"
                                        data-error="Required field."
                                        style={{ textAlign: "left" }}
                                    />
                                </div>
                            </div>
                            <div className="input-field item">
                                <input
                                    name="email"
                                    placeholder="Type your email"
                                    id="email"
                                    className="fontEnglish"
                                    data-date=""
                                    data-date-format="DD MMMM YYYY"
                                    type="email"
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />
                                <label htmlFor="email" style={{ left: 0, right: "auto" }}>
                                    Email <span className="asterisk">*</span>
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Required field."
                                    style={{ textAlign: "left" }}
                                />
                            </div>
                            <div className="row mobile">
                                <div className="col s4">
                                    <div className="input-field item">
                                        <input
                                            name="mobile_country_code"
                                            className=""
                                            placeholder="+974"
                                            id="mobile_country_code"
                                            type="text"
                                            minLength={3}
                                            maxLength={3}
                                            disabled=""
                                            // defaultValue={+974}
                                            style={{ textAlign: "left" }}
                                        />
                                        <label
                                            htmlFor="mobile_country_code"
                                            style={{ left: 0, right: "auto" }}
                                        >
                                            Country Code
                                        </label>
                                        <span
                                            className="helper-text"
                                            data-error="Enter a valid code."
                                        />
                                    </div>
                                </div>
                                <div className="col s8">
                                    <div className="input-field item">
                                        <input
                                            name="mobile"
                                            className=""
                                            placeholder="Type your mobile number"
                                            aria-label="Mobile number starting with country code +974"
                                            id="mobile"
                                            maxLength={8}
                                            type="text"
                                            autoComplete="no"
                                            // defaultValue=""
                                            style={{ textAlign: "left" }}
                                        />
                                        <label htmlFor="mobile" style={{ left: 0, right: "auto" }}>
                                            Mobile Number <span className="asterisk">*</span>
                                        </label>
                                        <span
                                            className="helper-text"
                                            data-error="Required field."
                                            style={{ textAlign: "left" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p>
                                <br />
                                Guardian Information{" "}
                            </p>
                            <div className="input-field item">
                                <input
                                    name="parentQid"
                                    placeholder="Type guardian QID"
                                    id="parentQid"
                                    className=""
                                    data-date=""
                                    data-date-format="DD MMMM YYYY"
                                    maxLength={11}
                                    type="text"
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />
                                <label htmlFor="parentQid" style={{ left: 0, right: "auto" }}>
                                    Guardian QID <span className="asterisk">*</span>
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Required field."
                                    style={{ textAlign: "left" }}
                                />
                            </div>
                            <div className="input-field item">
                                <input
                                    name="parentName"
                                    placeholder="Type your guardian name"
                                    id="parentName"
                                    className=""
                                    data-date=""
                                    data-date-format="DD MMMM YYYY"
                                    type="text"
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />
                                <label htmlFor="parentName" style={{ left: 0, right: "auto" }}>
                                    Guardian Name <span className="asterisk">*</span>
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Required field."
                                    style={{ textAlign: "left" }}
                                />
                            </div>
                            <div className="result-type1">
                                <div className="input-field mobileSelect">
                                    <label htmlFor="relation" style={{ left: 0, right: "auto" }}>
                                        Relation <span className="asterisk">*</span>
                                    </label>
                                    <select
                                        className="browser-default"
                                        name="relation"
                                        id="relation"
                                        tabIndex={0}
                                        style={{ textAlign: "left" }}
                                    >
                                        <option value="" disabled="">
                                            {" "}
                                            Select relation{" "}
                                        </option>
                                        <option>Father</option>
                                        <option>Mother</option>
                                        <option>Sister</option>
                                        <option>Brother</option>
                                        <option>Grandmother</option>
                                        <option>Grandfather</option>
                                        <option>Guardian</option>
                                    </select>
                                    <span
                                        className="helper-text"
                                        data-error="Required field."
                                        style={{ textAlign: "left" }}
                                    />
                                </div>
                            </div>
                            <div className="row mobile">
                                <div className="col s4">
                                    <div className="input-field item">
                                        <input
                                            name="parentMobile_country_code"
                                            className=""
                                            placeholder="Country Code"
                                            id="parentMobile_country_code"
                                            type="text"
                                            minLength={3}
                                            maxLength={3}
                                            disabled=""
                                            defaultValue={+974}
                                            style={{ textAlign: "left" }}
                                        />
                                        <label
                                            htmlFor="parentMobile_country_code"
                                            style={{ left: 0, right: "auto" }}
                                        >
                                            Country Code
                                        </label>
                                        <span
                                            className="helper-text"
                                            data-error="Enter a valid code."
                                        />
                                    </div>
                                </div>
                                <div className="col s8">
                                    <div className="input-field item">
                                        <input
                                            name="parentMobile"
                                            className=""
                                            placeholder="Type guardian mobile number"
                                            aria-label="Mobile number starting with country code +974"
                                            id="parentMobile"
                                            maxLength={8}
                                            type="text"
                                            autoComplete="no"
                                            defaultValue=""
                                            style={{ textAlign: "left" }}
                                        />
                                        <label
                                            htmlFor="parentMobile"
                                            style={{ left: 0, right: "auto" }}
                                        >
                                            Guardian Mobile 1 <span className="asterisk">*</span>
                                        </label>
                                        <span
                                            className="helper-text"
                                            data-error="Required field."
                                            style={{ textAlign: "left" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mobile">
                                <div className="col s4">
                                    <div className="input-field item">
                                        <input
                                            name="parentMobile2_country_code"
                                            className=""
                                            placeholder="Country Code"
                                            id="parentMobile2_country_code"
                                            type="text"
                                            minLength={3}
                                            maxLength={3}
                                            disabled=""
                                            // defaultValue={+974}
                                            style={{ textAlign: "left" }}
                                        />
                                        <label
                                            htmlFor="parentMobile2_country_code"
                                            style={{ left: 0, right: "auto" }}
                                        >
                                            Country Code
                                        </label>
                                        <span
                                            className="helper-text"
                                            data-error="Enter a valid code."
                                        />
                                    </div>
                                </div>
                                <div className="col s8">
                                    <div className="input-field item">
                                        <input
                                            name="parentMobile2"
                                            className=""
                                            placeholder="Type guardian mobile number 2"
                                            aria-label="Mobile number starting with country code +974"
                                            id="parentMobile2"
                                            maxLength={8}
                                            type="text"
                                            autoComplete="no"
                                            defaultValue=""
                                            style={{ textAlign: "left" }}
                                        />
                                        <label
                                            htmlFor="parentMobile2"
                                            style={{ left: 0, right: "auto" }}
                                        >
                                            Guardian Mobile 2 <span className="asterisk">*</span>
                                        </label>
                                        <span
                                            className="helper-text"
                                            data-error="Required field."
                                            style={{ textAlign: "left" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="input-field item">
                                <input
                                    name="parentEmail"
                                    placeholder="Type guardian email address"
                                    id="parentEmail"
                                    className="fontEnglish"
                                    data-date=""
                                    data-date-format="DD MMMM YYYY"
                                    type="email"
                                    autoComplete="no"
                                    defaultValue=""
                                    style={{ textAlign: "left" }}
                                />
                                <label htmlFor="parentEmail" style={{ left: 0, right: "auto" }}>
                                    Guardian Email Address <span className="asterisk">*</span>
                                </label>
                                <span
                                    className="helper-text"
                                    data-error="Required field."
                                    style={{ textAlign: "left" }}
                                />
                            </div>
                            <div className="item subscribe-items">
                                <p>
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        id="agree"
                                        tabIndex={0}
                                        style={{ textAlign: "left" }}
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
                            <div className="btn-wrap">
                                <button className="btn blue">Register</button>
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

export default Student