import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import axios from "axios";

import ReactPaginate from 'react-paginate';
import PageTitle from "./PageTitle";
import BreadCRum from "./BreadCRum";
import Topline from './Topline';

import { useDispatch, useSelector } from "react-redux";
import { fetchActivityData } from "../Redux/SliceFiles/activitySlice";


function Activity() {


    const { data: activity } = useSelector(state => state.activity);
    // const { data: actfilter } = useSelector(state => state.actfilter);


    console.log('activity data : ', activity);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchActivityData());

    }, []);

    // const [activity, setActiviity] = useState('');      //activitylist-api fetch
    const [startDate, setStartDate] = useState();
    const [title, setTitle] = useState('');
    const [select, setSelect] = useState('');
    const [selectedActivity, setSelectedActivity] = useState("All");


    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;

    // useEffect(() => {
    //     fetchData();
    // }, [currentPage, selectedActivity]);

    // const fetchData = async () => {
    //     try {
    //         const tokenResponse = await axios.get('https://studio5drupaldev.applab.qa/session/token');
    //         const token = tokenResponse.data;

    //         const data1 = {
    //             lang: "en",
    //             page: currentPage + 1
    //         };

    //         const response = await axios.post(
    //             "https://studio5drupaldev.applab.qa/api/activicties?_format=json",
    //             data1,
    //             {
    //                 headers: {
    //                     'X-Csrf-Token': token
    //                 }
    //             }
    //         );
    //         // setActiviity(response.data);
    //         setTotalPages(Math.ceil(response.data.pager.count / itemsPerPage));
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage);
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

        dispatch(fetchActivityData({ currentPage, title, startDate, select }));
        // try {
        //     const tokenResponse = await axios.get('https://studio5drupaldev.applab.qa/session/token');
        //     const token = tokenResponse.data;

        //     const data1 = {
        //         lang: "en",
        //         ...(title && { title: title }),
        //         ...(startDate && { field_start_and_end_time_value: startDate }),
        //         ...(select && { field_activity_category_target_id: select }),

        //     };

        //     console.log('data : ', data1);

        //     const response = await axios.post(
        //         "https://studio5drupaldev.applab.qa/api/activicties?_format=json",
        //         data1,
        //         {
        //             headers: {
        //                 'X-Csrf-Token': token
        //             }
        //         }
        //     );
        //     // setActiviity(response.data);
        //     console.log("activitylist", response.data);
        // } catch (error) {
        //     console.error("Error fetching data:", error);
        // }
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
                                            Title
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
                                            Activity type
                                        </label>
                                        <select
                                            className="browser-default"
                                            id="activityType"
                                            tabIndex={0}
                                            onChange={handleSelect}
                                            value={select}
                                        >
                                            <option value="" disabled="">
                                                Select activity type
                                            </option>
                                            <option value="All">All</option>
                                            <option value={77}>Public activity</option>
                                            <option value={78}>School activity</option>
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
                                            Date
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
                                        Search <i className="material-icons en"></i>
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Activity search clear"
                                        className="btn noWidth blue-btn waves-effect waves-light"
                                        onClick={handleClear}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="row">
                            <div className="col s7 result-status" />
                            <div className="col s5 result-type">
                                <div className="input-field col s12 mobileSelect filter-select en">
                                    <label htmlFor="result-type">Select Activity</label>
                                    <select id="result-type" className="browser-default" tabIndex={0} value={selectedActivity} onChange={(e) => {
                                        setSelectedActivity(e.target.value)
                                    }}>
                                        <option value="All">All</option>
                                        <option value="competition">Competitions</option>
                                        <option value="session">Workshops</option>
                                        <option value="event">Events</option>
                                        <option value="challenge">Challenges</option>
                                        <option value="project">Projects</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <ul className="activities-list" aria-label="activities">
                            {
                                activity && activity.results
                                    ?.filter(activity => selectedActivity === "All" || activity.field_event_type === selectedActivity)
                                    .map((item, index) => (
                                        <div listItem={item} key={index} >
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
                                                            <span>{item.field_age_group}Years Old</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottomTextHolderNA">
                                                        <div className="bottomTextLeftNA">
                                                            {item.body}
                                                        </div>
                                                        <div className="bottomTextRightNA">
                                                            <span className="calendarNA">
                                                                <i className="calendar-icons" /> Start date{" "}
                                                                <span className="date">
                                                                    {item.field_start_and_end_time_3.slice(0, 12)} <br />
                                                                    <small>{item.field_start_and_end_time.slice(0, 8)}</small>
                                                                </span>
                                                            </span>
                                                            <span className="calendarNA">
                                                                <i className="calendar-icons" /> End date{" "}
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
                                                    <button className="btn blueColor btn-disabled">Closed</button>
                                                </div>

                                            </li>


                                        </div>
                                    ))
                            }
                        </ul>

                        <ul className="pagination">
                            <li className="">

                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="next >"
                                    onPageChange={({ selected }) => handlePageClick(selected)}
                                    pageRangeDisplayed={5}
                                    pageCount={totalPages}
                                    previousLabel="< previous"
                                    renderOnZeroPageCount={null}
                                />
                            </li>
                        </ul>
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






















