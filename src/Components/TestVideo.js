import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Topline from './Topline';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchomeVideoData } from '../Redux/SliceFiles/homevideoSlice';

function TestVideo() {
    const { t } = useTranslation();
    const { data: videos } = useSelector(state => state.videos);
    console.log('about data:', videos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchomeVideoData());
    }, []);
    return (
        <div><div className="video">
            <div className="page-title en">
                <div className="container">
                    <div className="head-title">
                        <div>
                            <div className="share-page en">
                                <h2>
                                    {t("share")}
                                </h2>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/news/3&amp;src=sdkpreparse"
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
                                    href="http://twitter.com/share?text=Studio 5   Build a VR Environment&amp;url=http://51.136.51.121/en/news/3"
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
                            aria-label="page heading VIDEO"
                        >
                            {t("vide")}
                        </h2>
                    </div>
                </div>
            </div>
            <div id="skipContent">
                <div id="main-container" className="single-news">
                    <div>
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
                                        <a href="/home">
                                            {t("home")}
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="/media_center">
                                            {t("navmedia")}
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a tabIndex={0} aria-current="page" href="/en/news/3">
                                            <span>
                                                {t("build")}
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            {videos.map((item, index) => (
                                <div>
                                    <h2
                                        id="gallery-title"
                                        tabIndex={0}
                                        aria-label='Build a VR Environment Published <time datetime="2019-10-24T10:24:19+00:00" class="datetime">24 October 2019</time>
    '
                                    >
                                        {item.title}
                                    </h2>
                                    <div className="date-wrap" dangerouslySetInnerHTML={{ __html: videos?.[0]?.date }} >
                                    </div>
                                    <div className="content" dangerouslySetInnerHTML={{ __html: videos?.[0]?.description }}>

                                    </div>

                                </div>
                            ))
                            }
                        </div>

                        <div className="container">
                            <div className="view-more video">
                                <Link to="/media_center">
                                    <i className="material-icons ar"></i>
                                    {t("back")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Topline />
        </div>
        </div>
    )
}

export default TestVideo
