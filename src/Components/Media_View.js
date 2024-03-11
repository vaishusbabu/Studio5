import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import MediaImg from './MediaImg';
import Topline from './Topline.js'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMediaViewData } from '../Redux/SliceFiles/mediaviewSlice.js';
import { useTranslation } from 'react-i18next';

function Media_View() {
    const { t } = useTranslation();
    const { id } = useParams();
    console.log("id", id);

    const { data: media } = useSelector(state => state.media);
    console.log('media data: ', media);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMediaViewData(id));
    }, []);

    return (
        <div>
            <div className="news">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div>
                                <div className="share-page en">
                                    <h2>{t("share")}</h2>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/news/56624&amp;src=sdkpreparse"
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
                                        href="http://twitter.com/share?text=Studio 5 DIY Food Making&amp;url=http://51.136.51.121/en/news/56624"
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
                                aria-label="page heading NEWS"
                            >
                                {t("NEWS")}
                            </h2>
                        </div>
                    </div>
                </div>
                <div id="skipContent">
                    <div id="main-container" className="single-news">
                        <div>
                            {media.map((item, index) => (

                                <div className="container">

                                    <span className="multi-square">
                                        <b>
                                            <i />
                                        </b>
                                    </span>
                                    <span className="grey-square-rotate" />
                                    <span className="grey-square-rotate bottom" />
                                    <span className="orange-circle" />
                                    <nav
                                        className="breadcrumb"
                                        id="breadcrumb-wrap"
                                        aria-label="breadcrumb"
                                    >
                                        <ul>
                                            <li className="breadcrumb-item">
                                                <a href="/en/">{t("home")}</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="/en/media-center">{t("navmedia")}</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a tabIndex={0} aria-current="page" href="/en/news/56624">
                                                    <span>{item.title}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2
                                        id="gallery-title"
                                        tabIndex={0}
                                        aria-label='DIY Food Making Published <time datetime="2023-08-04T13:26:36+00:00" class="datetime">04 August 2023</time>
'
                                    >
                                        {item.title}
                                    </h2>
                                    <div className="date-wrap" dangerouslySetInnerHTML={{ __html: item.date }}>

                                    </div>

                                    <MediaImg />

                                    <div className="content" >
                                        <p dangerouslySetInnerHTML={{ __html: item.description }}>

                                        </p>

                                    </div>

                                </div>

                            ))
                            }



                            <div className="container">
                                <div className="view-more news">
                                    <Link to="/media_center">
                                        <i className="material-icons ar"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Topline />

            </div>

        </div >
    )
}

export default Media_View