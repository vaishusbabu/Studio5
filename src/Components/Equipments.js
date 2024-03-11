import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEquipmentData } from '../Redux/SliceFiles/equipmentSlice';
import { useTranslation } from 'react-i18next';


function Equipments() {
    const { t } = useTranslation();
    const { data: equipment } = useSelector(state => state.equipment);
    console.log('equipment data: ', equipment);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEquipmentData());
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
                                        href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/equipment-used&amp;src=sdkpreparse"
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
                                        href="http://twitter.com/share?text=Studio 5   Equipment&amp;url=http://51.136.51.121/en/equipment-used"
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
                                aria-label="page heading Equipment"
                            >
                                {t("navequi")}
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
                                <Link tabIndex={0} aria-current="page" to="/equipment">
                                    <span>{t("eqused")}</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="container">
                    <h2 className="line">   {t("navequi")}</h2>
                    <div className="row machine-item-small-holder">
                        <div className="col m12 l6">
                            {equipment && equipment.results && equipment.results.map((item, index) => (


                                <div className="machine-item small">
                                    <figure className="machine-item-figure small">
                                        <img
                                            src="https://www.studio5.qa/drupal-app//sites/default/files/2020-03/announcements-img1.dabf8003_4.jpg"
                                            alt="Coding 101 image"
                                        />
                                    </figure>
                                    <aside className="machine-item-content">
                                        <h5>{item.title}</h5>
                                    </aside>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                    <nav className="pagination-wrapper" aria-label="pagination">
                        <ul className="pagination">
                            <li className="active">
                                <a className="undefined" href="#" aria-label="Go to page number 1">
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

export default Equipments