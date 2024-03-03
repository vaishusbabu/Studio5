


import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

function EventDetails() {
    const { id } = useParams();
    console.log("id", id)

    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`https://studio5drupaldev.applab.qa/api/activity-details/${id}?_format=json`)
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                console.log('events', data)
            })

    }, [])
    return (
        <div>
            <div id="main-content" className="activity-details">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div>
                                <div className="share-page en">
                                    <h2>Share this page</h2>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/activity/57640&amp;src=sdkpreparse"
                                        className="fb-xfbml-parse-ignore"
                                    >
                                        <span>acebook</span>
                                        <i aria-label="Facebook" className="fa fa-facebook">
                                            &nbsp;
                                        </i>
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://twitter.com/share?text=Studio 5   Hackathon- Passive Cooking&amp;url=http://51.136.51.121/en/activity/57640"
                                    >
                                        <span>acebook</span>
                                        <i aria-label="Twitter" className="fa-brands fa-x-twitter">
                                            &nbsp;
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <h2
                                id="pageHeading"
                                role="heading"
                                tabIndex={0}
                                aria-label="page heading Event Details"
                            >
                                Event Details
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/activities">Activities</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <span>Event Details</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="skipContent">
                    <div id="main-container">
                        <div className="container1">
                            <div>
                                {events.map((item, index) => (
                                    <div className="event-details event-detail">
                                        <div className="container">
                                            <div className="flex-row">
                                                <h2>{item.eventname}</h2>
                                                <button className="btn blueColor btn-disabled">Closed</button>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="article-news">
                                                <div className="slick-slider slider news-slider slick-initialized">
                                                    <div className="slick-list">
                                                        <div
                                                            className="slick-track"
                                                            style={{
                                                                width: 2540,
                                                                opacity: 1,
                                                                transform: "translate3d(0px, 0px, 0px)"
                                                            }}
                                                        >
                                                            <div
                                                                data-index={0}
                                                                className="slick-slide slick-active slick-current"
                                                                tabIndex={-1}
                                                                aria-hidden="false"
                                                                style={{ outline: "none", width: 2540 }}
                                                            >
                                                                <div>
                                                                    <div
                                                                        className="item"
                                                                        tabIndex={-1}
                                                                        style={{ width: "100%", display: "inline-block" }}
                                                                    >
                                                                        <div className="sliderHeightNew1">
                                                                            <img
                                                                                src="/sites/default/files/2024-01/Image_20240111_094103_366.png"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container">

                                                <div className="description" dangerouslySetInnerHTML={{ __html: item.details }} >

                                                </div>

                                                <br />
                                                <h3 style={{ color: "rgb(79, 89, 168)", fontSize: 16 }}>
                                                    Learning Objective
                                                </h3>
                                                <div className="description" dangerouslySetInnerHTML={{ __html: item.field_activity_objective }}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="row  details-wrap noFlex">
                                                <h3>Details</h3>
                                                <div className="col s6 main-details">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th>Date</th>
                                                                <td className="activityDetailDateRow p0">
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th>Start date</th>
                                                                                <th>End date</th>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>{item.field_start_and_end_time_3.slice(0, 12)} - {item.field_start_and_end_time.slice(0, 8)}</td>
                                                                                <td>{item.field_start_and_end_time_4.slice(0, 12)} - {item.field_start_and_end_time_1.slice(0, 8)}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>{item.field_start_and_end_time_3.slice(13, 25)}  {item.field_start_and_end_time.slice(9, 18)}</td>
                                                                                <td>{item.field_start_and_end_time_3.slice(13, 25)}  {item.field_start_and_end_time.slice(9, 18)}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>Address</th>
                                                                <td>
                                                                    <p dangerouslySetInnerHTML={{ __html: item.field_activity_address }}>

                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col s6 main-details">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th>Age group</th>
                                                                <td>{item.age_group}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Gender</th>
                                                                <td>{item.gender}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>No of Attendee</th>
                                                                <td>{item.field_number_of_attendees}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col s12 main-details">
                                                    <br />
                                                    <h3>Location</h3>
                                                    <div className="google-map">
                                                        <iframe
                                                            title="map"
                                                            className="map"
                                                            frameBorder={0}
                                                            allowFullScreen=""
                                                        />
                                                        <br />
                                                        <button className="btn profileBtn blue-border">
                                                            View Location In Google Map
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
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
                <div className="sparkles">
                    <span className="orange-circle" />
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
                    <span className="grey-square-rotate red-sq one" />
                    <span className="grey-square-rotate red-sq two" />
                </div>
            </div>

        </div >
    )
}

export default EventDetails