import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Topline from './Topline';
import { fetchFilterData } from '../Redux/SliceFiles/FilterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMediaNewsData } from '../Redux/SliceFiles/mediaNewsSlice';
import { useTranslation } from 'react-i18next';

function Media_Center() {
    const { t } = useTranslation();
    const baseURL = "https://www.studio5.qa/drupal-app/";
    const [filterData, setFilterData] = useState([]);
    const { data: medianews } = useSelector(state => state.medianews);
    const { data: filter } = useSelector(state => state.filter);
    console.log('medianews data: ', medianews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMediaNewsData());
        dispatch(fetchFilterData());
    }, []);

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;
    const handleFilterChange = (tid) => {
        dispatch(fetchMediaNewsData(tid));
      };
    
      useEffect(() => {
        fetch(
          `https://studio5drupaldev.applab.qa/api/filter/en?_format=json`
        )
          .then((res) => res.json())
          .then((data) => {
            setFilterData(data);
            console.log("news in media center", data);
          });
      }, []);
    // useEffect(() => {
    //     fetchData();
    // }, [currentPage, medianews]);

    // const fetchData = async () => {
    //     try {
    //         const data1 = {
    //             lang: "en",
    //             page: currentPage

    //         };

    //         const response = await axios.post(
    //             "https://studio5drupaldev.applab.qa/api/media-centre?_format=json",
    //             data1,
    //             {
    //             }
    //         );

    //         medianews(response.data);
    //         setTotalPages(Math.ceil(response.data.pager.count / itemsPerPage));
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    return (
        <div>
            <div id="main-content" className="media-center-page">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div>
                                <div className="share-page en">
                                    <h2>{t("share")}</h2>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/media-center&amp;src=sdkpreparse"
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
                                        href="http://twitter.com/share?text=Studio 5  
                                         Media Center&amp;url=http://51.136.51.121/en/media-center"
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
                                aria-label="page heading Media Center"
                            >
                                {t("navmedia")}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item">
                                <Link to="/">  {t("home")}</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link tabIndex={0} aria-current="page" href="/media-center">
                                    <span> {t("navmedia")}</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div id="skipContent">
                    <div className="container">
                        <div className="row">

                            <div className="col s3 left-side">

                                <div className="item">

                                    <div className="filter-wrap">

                                        <h3 id="filter-title">
                                            {t("filer")}
                                        </h3>
                                        {filterData && filterData.map((item, index) => (

                                            <ul aria-label="aside navigation">
                                                <li className="media-item en">
                                                <button
                            onClick={() => handleFilterChange(item.tid)}
                            >
                              {item.filter}
                              <span>{item.count}</span>
                            </button>
                                                </li>
                                            </ul>
                                        )
                                        )
                                        }
                                        <span className="grey-square-rotate" />
                                        <span className="multi-square">
                                            <b>
                                                <i />
                                            </b>
                                        </span>
                                    </div>

                                </div>

                            </div>

                            <div className="col s9 media-content">
                                <span className="orange-circle" />
                                <div className="flex-row col-3">

                                    {medianews && medianews.results && medianews.results.map((item, index) => (
                                        <ul aria-label="media center" key={index}>
                                            <li className="media-item">
                                                <div className="category-wrap ">{item.category}</div>
                                                <h3>
                                                    <Link
                                                        aria-label='Articles
 IMPORTANCE OF THE MAKER MOVEMENT FOR SOCIETIES​ Published <time datetime="2023-09-26T11:47:09+00:00" class="datetime">26 September 2023</time>
'
                                                        to={`/media_view/${item.nid}`}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </h3>
                                                <div className="mediaList">
                                                    <div className="medialistImg">
                                                        <div className="img-wrap imageFixedSize">
                                                            <img

                                                                // src={item.field_newsimage}
                                                                src={`${baseURL + item.field_newsimage}`}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="medialistText">

                                                        <div className="desc" dangerouslySetInnerHTML={{ __html: item.description }} />
                                                        <div className="date-wrap" dangerouslySetInnerHTML={{ __html: item.date }} />

                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    ))}
                                </div>

                                <nav className="pagination-wrapper" aria-label="pagination">
                                    <ul className="pagination">
                                        <li className="active">
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
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Topline />
            <div id="register-wrap" className="ng-scope">
                <div className="container">
                    <div>
                        <img
                            src="/static/media/mail.2c90fa17e8d6b9c3c449e7c4245fb874.svg"
                            className="mail-icon"
                            alt=""
                        />
                    </div>
                    <p>
                        {t("sublatest")}
                    </p>
                    <p>
                        <Link className="red-btn btn" to="/subscribe">
                            {t("subscribe")} <i className="material-icons en"></i>
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    )
}
export default Media_Center