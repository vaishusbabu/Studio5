import React, { useEffect, useState } from 'react'
import Topline from './Topline';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchomeGallData } from '../Redux/SliceFiles/homegallerySlice';

function Gallery() {

    const { t } = useTranslation();
    // const { data: gall } = useSelector(state => state.gall);
    // console.log('gall data:', gall);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchomeGallData());
    // }, []);

    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch(`https://studio5drupaldev.applab.qa/api/media-details/4?_format=json`)
            .then((res) => res.json())
            .then((data) => {
                setGallery(data);
                console.log("gallery", data);
            })
    }, [])


    const [img, setImg] = useState([]);
    useEffect(() => {
        fetch(`https://studio5drupaldev.applab.qa/api/media-detail-gallery/4?_format=json`)
            .then((res) => res.json())
            .then((data) => {
                setImg(data);
                console.log("setImg", data);
            })
    }, [])

    return (
        <div>

            <div className="gallery">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div>
                                <div className="share-page en">
                                    <h2>{t("share")}</h2>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/news/4&amp;src=sdkpreparse"
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
                                        href="http://twitter.com/share?text=Studio 5   3D Print a Mini-City&amp;url=http://51.136.51.121/en/news/4"
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
                                aria-label="page heading GALLERY"
                            >
                                {t("gal")}
                            </h2>
                        </div>
                    </div>
                </div>
                <div id="skipContent">
                    <div id="main-container" className="single-news">
                        <div>
                            {gallery.map((item, index) => (


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
                                                <Link to="/media_center">
                                                    {t("navmedia")}
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link tabIndex={0} aria-current="page" to="/news/4">
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <h2
                                        id="gallery-title"
                                        tabIndex={0}
                                        aria-label='3D Print a Mini-City Published <time datetime="2019-10-24T10:26:52+00:00" class="datetime">24 October 2019</time>

'
                                    >
                                        {item.title}
                                    </h2>
                                    <div className="date-wrap" dangerouslySetInnerHTML={{ __html: item.date }}>

                                    </div>
                                    <div className="content">
                                        <p dangerouslySetInnerHTML={{ __html: item.description }}>

                                        </p>
                                    </div>
                                </div>
                            ))
                            }

                            <div className="gallery-news">
                                <div className="container">
                                    <div className="img-wrap">
                                        <div className="item-list">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <div>
                                                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                            <div className="field__label visually-hidden">
                                                                {t("img")}
                                                            </div>
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
                                                </li>
                                                <li className="list-group-item">
                                                    <div>
                                                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                            <div className="field__label visually-hidden">
                                                                {t("img")}
                                                            </div>
                                                            <div className="field__item">
                                                                {" "}
                                                                <img
                                                                    loading="lazy"
                                                                    src="/sites/default/files/2019-10/12.%203d%20print%20a.jpg"
                                                                    width={4032}
                                                                    height={3024}
                                                                    alt="3d print"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div>
                                                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                            <div className="field__label visually-hidden">
                                                                {t("img")}
                                                            </div>
                                                            <div className="field__item">
                                                                {" "}
                                                                <img
                                                                    loading="lazy"
                                                                    src="/sites/default/files/2019-10/12.%203d%20print%20c.jpg"
                                                                    width={4032}
                                                                    height={3024}
                                                                    alt="3d print"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div>
                                                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                                                            <div className="field__label visually-hidden">
                                                                {t("img")}
                                                            </div>
                                                            <div className="field__item">
                                                                {" "}
                                                                <img
                                                                    loading="lazy"
                                                                    src="/sites/default/files/2019-10/12.%203d%20print%20d.jpg"
                                                                    width={4032}
                                                                    height={3024}
                                                                    alt="3d print"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h3
                                    id="slideCount"
                                    className="gallery-slider-count"
                                    aria-label="3D Print a Mini-City Photo 1 of 4"
                                    tabIndex={0}
                                >
                                    <small>{t("pic")} </small>
                                    <strong>1 / 4</strong>
                                </h3>
                                <div className="slick-slider slider slick-initialized" dir="ltr">
                                    <button
                                        data-role="none"
                                        className="slick-prev slick-arrow slick-disabled"
                                        type="button"
                                        id="slide-prev"
                                        aria-labelledby="slideCount slide-prev"
                                        style={{ display: "block" }}
                                    >
                                        {t("pre")}
                                    </button>
                                    <div className="slick-list" style={{ padding: 0 }}>

                                        <div
                                            className="slick-track"
                                            style={{
                                                width: 17920,
                                                opacity: 1,
                                                transform: "translate3d(-3584px, 0px, 0px)"
                                            }}
                                        >
                                            <div
                                                data-index={-2}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20c.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20c.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={-1}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20d.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20d.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={0}
                                                className="slick-slide slick-active slick-center slick-current"
                                                tabIndex={-1}
                                                aria-hidden="false"
                                                style={{ outline: "none", width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20b.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20b.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={1}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20a.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20a.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={2}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20c.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20c.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={3}
                                                className="slick-slide"
                                                tabIndex={-1}
                                                aria-hidden="true"
                                                style={{ outline: "none", width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20d.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20d.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={4}
                                                tabIndex={-1}
                                                className="slick-slide slick-center slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20b.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20b.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={5}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20a.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20a.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={6}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20c.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20c.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-index={7}
                                                tabIndex={-1}
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: 1792 }}
                                            >
                                                <div>
                                                    <div
                                                        className="item"
                                                        tabIndex={-1}
                                                        style={{ width: "100%", display: "inline-block" }}
                                                    >
                                                        <div
                                                            className="sliderHeight"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20d.jpg")'
                                                            }}
                                                        >
                                                            <img
                                                                src="http://studio5drupaldev.applab.qa/sites/default/files/2019-10/12.%203d%20print%20d.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button
                                        data-role="none"
                                        className="slick-next slick-arrow"
                                        id="slide-next"
                                        type="button"
                                        aria-labelledby="slideCount slide-next"
                                        style={{ display: "block" }}
                                    >
                                        Next gallery image
                                    </button>
                                    <ul className="slick-dots" style={{ display: "block" }}>
                                        <li className="slick-active">
                                            <button>1</button>
                                        </li>
                                        <li className="">
                                            <button>2</button>
                                        </li>
                                        <li className="">
                                            <button>3</button>
                                        </li>
                                        <li className="">
                                            <button>4</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="container">
                                <div className="view-more gallery">
                                    <a href="/media_center">
                                        <i className="material-icons ar">arrow_backward</i>{t("back")}
                                    </a>
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

export default Gallery