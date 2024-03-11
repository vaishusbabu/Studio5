import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMachineData } from '../Redux/SliceFiles/machineSlice.js';
import { useTranslation } from 'react-i18next';

function Machines() {
    const { t } = useTranslation();
    const baseURL = "https://www.studio5.qa/drupal-app/";
    const { data: machine } = useSelector(state => state.machine);
    console.log('machine datas ulti: ', machine);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMachineData());
    }, [dispatch]);

    return (
        <div>
            <div id="main-container">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div>
                                <div className="share-page en">
                                    <h2>{t("share")}</h2>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/machines&amp;src=sdkpreparse"
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
                                        href="http://twitter.com/share?text=Studio 5   Machines&amp;url=http://51.136.51.121/en/machines"
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
                                {t("navmachine")}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item">
                                <Link to="/">{t("home")}</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link tabIndex={0} aria-current="page" to="/machines">
                                    <span>{t("navmachine")}</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="skipContent" className="container">
                    <h2 className="line">{t("navmachine")}</h2>

                    {machine && machine.results && machine.results.map((item, index) => (



                        <div className="machine-item-holder" key={index}>
                            <div className="machine-item">
                                <figure className="machine-item-figure">
                                    <img
                                        src={`${baseURL + item.field_machines_image_1}`}

                                        // src="https://studio5drupaldev.applab.qa//sites/default/files/2020-03/index_0.jpg"
                                        alt="machine img"
                                    />
                                </figure>
                                <aside className="machine-item-content">
                                    <Link to={`/machine_view/${item.nid}`}>
                                        <h4>{item.title}</h4>
                                    </Link>
                                    <h5>{item.field_machine_brand}</h5>
                                    <div >

                                        <div dangerouslySetInnerHTML={{ __html: machine.results?.[0]?.field_machines_brief }} >

                                        </div>


                                    </div>
                                    <Link
                                        aria-label="view more Ultimaker 3 & Ultimaker 3 Extended"
                                        className="machine-btn"
                                        to={`/machine_view/${item.nid}`}
                                    >
                                        {t("viewmore")}
                                    </Link>
                                </aside>
                            </div>
                        </div>
                    ))
                    }


                    <nav className="pagination-wrapper" aria-label="pagination">
                        <ul className="pagination">
                            <li className="active">
                                <a className="undefined" href="#" aria-label="Go to page number 1" >
                                    1
                                </a>
                            </li>
                        </ul>
                    </nav>



                </div>
            </div>
        </div>
    )
}

export default Machines