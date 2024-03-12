import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import PageTitle from "./PageTitle";
import BreadCRum from "./BreadCRum";
import Topline from './Topline';
import { useDispatch, useSelector } from "react-redux";
import { fetchActivityData } from "../Redux/SliceFiles/activitySlice";
import { useTranslation } from "react-i18next";


function Activity() {

    const { t } = useTranslation();
    const { data: activity, totalPages } = useSelector(state => state.activity);
    console.log('activity data : ', activity);
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState();
    const [title, setTitle] = useState('');
    const [select, setSelect] = useState('');
    const [selectedActivity, setSelectedActivity] = useState("All");
    const [currentPage, setCurrentPage] = useState(0);


    useEffect(() => {
        dispatch(fetchActivityData({ currentPage, title, startDate, select }));
    }, [currentPage, title, startDate, select]);


    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage);
        dispatch(fetchActivityData({ currentPage: selectedPage, title, startDate, select }));
    };

    const titleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSelect = (e) => {
        setSelect(e.target.value);
    }

    const handleClear = () => {
        setTitle('');
        setStartDate('');
        setSelect('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCurrentPage(0);
        dispatch(fetchActivityData({ currentPage, title, startDate, select }));
    };
    const handleActivitySelect = (activityType) => {
        setSelectedActivity(activityType);
        setCurrentPage(0);
        setSelect(activityType);
    };

    return (
        <div id="main-content" className="activiti-list">
            <PageTitle />
            <BreadCRum />
            <span className="multi-square one">
                <b>
                    <i />
                </b>
            </span>

            <div id="skipContent">
                <div id="main-container">
                    <div className="container">
                        <form method="post" name="search" className="search"
                            onSubmit={handleSubmit}>
                            <div className="row topFormHolder">
                                <div className="col s12 m6 l3">
                                    <div className="input-field item">
                                        <input
                                            name="Title"
                                            placeholder="Title"
                                            id="title"
                                            type="text"
                                            aria-label="Activity search title"
                                            defaultValue=""
                                            value={title}
                                            onChange={titleChange}
                                        />
                                        <label htmlFor="title" style={{ left: 0, right: "auto" }}>
                                            {t("title")}
                                        </label>
                                        <span className="helper-text" />
                                    </div>
                                </div>
                                <div className="col s12 m6 l3 date-popup">
                                    <div className="input-field mobileSelect item en">
                                        <label
                                            htmlFor="activityType"
                                            className="active"
                                            style={{ left: 0, right: "auto" }}
                                        >
                                            {t("activitytype")}
                                        </label>
                                        <select
                                            className="browser-default"
                                            id="activityType"
                                            tabIndex={0}
                                            onChange={handleSelect}
                                            value={select}
                                        >
                                            <option value="" disabled="">
                                                {t("selectact")}
                                            </option>
                                            <option value="All">{t("all")}</option>
                                            <option value={77}>{t("public")}</option>
                                            <option value={78}>{t("school")}</option>
                                        </select>
                                        <span className="helper-text" />
                                    </div>
                                </div>
                                <div className="col s12 m6 l3 date-popup">
                                    <div className="input-field item">

                                        <div className="react-datepicker-wrapper">
                                            <div className="react-datepicker__input-container">
                                                <DatePicker name="date"
                                                    autoComplete="off"
                                                    id="date"
                                                    placeholder="Date"
                                                    type="date"
                                                    className="hiddenDob customDateField "
                                                    defaultValue="" selected={startDate} onChange={(date) => setStartDate((moment(date).format('YYYY-MM-DD')))} />

                                                <button
                                                    aria-label="choose date button"
                                                    type="button"
                                                    className="example-custom-input"
                                                >
                                                    <span aria-hidden="true" className="material-icons">
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <label htmlFor="date" style={{ left: 0, right: "auto" }}>
                                            {t("date")}
                                        </label>
                                        <span className="helper-text" />
                                    </div>
                                </div>
                                <div className="col s12 m6 l3 valign-wrapper center-align search-btn-holder">
                                    <button
                                        type="submit"
                                        className="btn noWidth profileBtn yellow waves-effect waves-light"
                                        aria-label="Activity search"

                                    >
                                        {t("search")} <i className="material-icons en"></i>
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Activity search clear"
                                        className="btn noWidth blue-btn waves-effect waves-light"
                                        onClick={handleClear}
                                    >
                                        {t("clear")}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="row">
                            <div className="col s7 result-status" />
                            <div className="col s5 result-type">
                                <div className="input-field col s12 mobileSelect filter-select en">
                                    <label htmlFor="result-type">{t("selectActivity")}</label>
                                    <select id="result-type" className="browser-default" tabIndex={0} value={selectedActivity} onChange={(e) => {
                                        setSelectedActivity(e.target.value)
                                    }}>
                                        <option value="All">{t("all")}</option>
                                        <option value="competition">{t("competition")}</option>
                                        <option value="session">{t("workshop")}</option>
                                        <option value="event">{t("Events")}</option>
                                        <option value="challenge">{t("challenge")}</option>
                                        <option value="project">{t("project")}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <ul className="activities-list" aria-label="activities">
                            {
                                activity && activity.results
                                    ?.filter(activity => selectedActivity === "All" || activity.field_event_type === selectedActivity)
                                    .map((item, index) => (
                                        <li key={index}>
                                            <li className="newactivities test3">
                                                <div className="figHolderNA">
                                                    <img
                                                        src={item.field_activity_thumbnail}
                                                        alt="images of icon"
                                                    />
                                                </div>
                                                <div className="textHolderNA">
                                                    <div className="topTextHolderNA Creativity Zone">
                                                        <Link
                                                            aria-label="Hackathon- Passive Cooking Activity mixed 19-24 Years Old Start date 26 Jan, 2024 03:00 pm and End date 27 Jan, 2024 07:00 pm"
                                                            to={`/event_details/${item.nid}`}
                                                        >
                                                            <h4>
                                                                <i className="topHeadNA" />
                                                                {item.title}
                                                            </h4>
                                                        </Link>
                                                        <div className="topTextInsideNA">
                                                            <span className="blackText">
                                                                <i className="topBoyIconNA" /> {item.field_gender}
                                                            </span>
                                                            <span>{item.field_age_group}{t("old")}</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottomTextHolderNA">
                                                        <div className="bottomTextLeftNA">
                                                            {item.body}
                                                        </div>
                                                        <div className="bottomTextRightNA">
                                                            <span className="calendarNA">
                                                                <i className="calendar-icons" /> {t("startdate")}{" "}
                                                                <span className="date">
                                                                    {item.field_start_and_end_time_3.slice(0, 12)} <br />
                                                                    <small>{item.field_start_and_end_time.slice(0, 8)}</small>
                                                                </span>
                                                            </span>
                                                            <span className="calendarNA">
                                                                <i className="calendar-icons" />{t("enddate")}{" "}
                                                                <span className="date">
                                                                    {item.field_start_and_end_time_4.slice(-12)}
                                                                    <br />
                                                                    <small>{item.field_start_and_end_time_1.slice(0, 8)}</small>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="btnHolderNA">
                                                    <button className="btn blueColor btn-disabled">{t("closed")}</button>
                                                </div>

                                            </li>


                                        </li>
                                    ))
                            }
                        </ul>
                        <nav className="pagination-wrapper" aria-label="pagination">
                            <ul className="pagination">
                                <li >
                                    <ReactPaginate
                                        previousLabel="Pre"
                                        nextLabel="Next"
                                        breakLabel="..."
                                        breakClassName="break-me"
                                        pageCount={totalPages}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName="pagination"
                                        activeClassName="active"
                                    />
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="sparkles">
                        <span className="orange-circle" />
                        <span className="multi-square two">
                            <b>
                                <i />
                            </b>
                        </span>
                        <span className="grey-square-rotate red-sq one" />
                        <span className="grey-square-rotate red-sq two" />
                    </div>
                </div>
                <Topline />
            </div >
        </div >
    )


}

export default Activity