import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Machine_View() {

    const [view, setView] = useState([]);
    const { id } = useParams();
    console.log("id", id)

    const baseURL = "https://studio5drupaldev.applab.qa/";

    useEffect(() => {
        fetch(`https://studio5drupaldev.applab.qa/machine_details/701`)
            .then((res) => res.json())
            .then((data) => {
                setView(data);
                console.log("Machine data", data)

            })
    })
    return (
        <div>
            <div id="main-container">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div>
                                <div className="share-page en">
                                    <h2>Share this page</h2>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/machine-detail/701&amp;src=sdkpreparse"
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
                                        href="http://twitter.com/share?text=Studio 5   Machines&amp;url=http://51.136.51.121/en/machine-detail/701"
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
                                aria-label="page heading Machines"
                            >
                                Machines
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item">
                                <Link to="/machines">Machines</Link>{" "}
                            </li>
                            <li className="breadcrumb-item">
                                <Link tabIndex={0} aria-current="page" to={`/machine_view/:id}`}>
                                    <span>Ultimaker 3 &amp; Ultimaker 3 Extended</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {view.map((item, index) => (
                    <div id="skipContent" className="container">
                        <h2 className="line">{item.title}</h2>
                        <div className="row machine-detail-holder">
                            <div className="col m12 l3">
                                <figure className="machine-detail-figure">
                                    <img
                                        src={`${baseURL + item.field_machines_image}`}
                                        // src={item.field_machine_cover_image}
                                        // src="https://studio5drupaldev.applab.qa//sites/default/files/2020-03/index_0.jpg"
                                        alt=""
                                    />
                                </figure>
                            </div>
                            <div className="col m12 l9 machine-detail-content">
                                <h4>
                                    {" "}
                                    <span>{item.field_machine_type}</span>
                                </h4>
                                <h5 className="blue-text">{item.title.slice(0, 8)}</h5>
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: item.body }}>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs machine-tab-menu">
                                    <li className="tab">
                                        <a className="active" href="#feature">
                                            Features
                                        </a>
                                    </li>
                                    <li className="tab">
                                        <a className="" href="#materials">
                                            Materials
                                        </a>
                                    </li>
                                    <li className="tab">
                                        <a href="#safety_procedure">Safety procedure</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="feature" className="col s12 machine-tab-content" >
                                <ul dangerouslySetInnerHTML={{ __html: item.field_machine_features }}>

                                </ul>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default Machine_View