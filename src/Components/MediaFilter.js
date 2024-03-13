// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Topline from "./Topline";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMediaFiltersData } from "../Redux/SliceFiles/mediafilterSlice";
// import { fetchFilterData } from "../Redux/SliceFiles/FilterSlice";

// function MediaFilter() {
//   const { t } = useTranslation();
//   const [filter, setFilter] = useState([]);
//   const [news, setNews] = useState([]);
//   const { id } = useParams();
//   const baseURL = "https://studio5drupaldev.applab.qa/";

//   const { data: mediafilter } = useSelector((state) => state.mediafilter);
//   console.log("mediafilter data:", mediafilter);

//   const { data: mfilter } = useSelector((state) => state.mfilter);
//   console.log("mfilter data: ", mfilter);
//   const dispatch = useDispatch();
//   const handleFilterChange = (tid) => {
//     dispatch(fetchFilterData(tid));
//   };

//   useEffect(() => {
//     fetch(
//       `https://studio5drupaldev.applab.qa/api/filtermedia-centre/${id}?_format=json`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setNews(data);
//         console.log("news in media center", data);
//       });
//   }, []);
//   return (
//     <div>
//       <div id="main-content" className="media-center-page">
//         <div className="page-title en">
//           <div className="container">
//             <div className="head-title">
//               <div>
//                 <div className="share-page en">
//                   <h2>{t("share")}</h2>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/media-center&amp;src=sdkpreparse"
//                     className="fb-xfbml-parse-ignore"
//                   >
//                     <span>acebook</span>
//                     <i aria-label="Facebook" className="fa fa-facebook">
//                       &nbsp;
//                     </i>
//                   </a>
//                   <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href="http://twitter.com/share?text=Studio 5   Media Center&amp;url=http://51.136.51.121/en/media-center"
//                   >
//                     <span>acebook</span>
//                     <i aria-label="Twitter" className="fa-brands fa-x-twitter">
//                       &nbsp;
//                     </i>
//                   </a>
//                 </div>
//               </div>
//               <h2
//                 id="pageHeading"
//                 role="heading"
//                 tabIndex={0}
//                 aria-label="page heading Media Center"
//               >
//                 Media Center
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <nav
//             className="breadcrumb"
//             id="breadcrumb-wrap"
//             aria-label="breadcrumb"
//           >
//             <ul>
//               <li className="breadcrumb-item">
//                 <Link to="/home"> {t("home")}</Link>
//               </li>
//               <li className="breadcrumb-item">
//                 <a tabIndex={0} aria-current="page" href="/en/media-center">
//                   <span> {t("navmedia")}</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <div id="skipContent">
//           <div className="container">
//             <div className="row">
//               <div className="col s3 left-side">
//                 <div className="item">
//                   <div className="filter-wrap">
//                     <h3 id="filter-title">{t("filer")}</h3>
//                     {Array.isArray(filter) &&
//                       filter.map((item, index) => (
//                         <ul aria-label="aside navigation" key={index}>
//                           <li className="media-item en">
//                             <button
//                               onClick={() => handleFilterChange(item.tid)}
//                             >
//                               {item.filter}
//                               <span>{item.count}</span>
//                             </button>
//                           </li>
//                         </ul>
//                       ))}
//                     <span className="grey-square-rotate" />
//                     <span className="multi-square">
//                       <b>
//                         <i />
//                       </b>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="col s9 media-content">
//                 <span className="orange-circle" />
//                 <div className="flex-row col-3">
//                   {news &&
//                     news.results &&
//                     news.results.map((item, index) => (
//                       <ul aria-label="media center" key={index}>
//                         <li className="media-item">
//                           <div className="category-wrap ">{item.category}</div>
//                           <h3>
//                             <Link
//                               aria-label='Articles
//  IMPORTANCE OF THE MAKER MOVEMENT FOR SOCIETIES​ Published <time datetime="2023-09-26T11:47:09+00:00" class="datetime">26 September 2023</time>
 
// '
//                               to={`/media_view/${item.nid}`}
//                             >
//                               {item.title}
//                             </Link>
//                           </h3>
//                           <div className="mediaList">
//                             <div className="medialistImg">
//                               <div className="img-wrap imageFixedSize">
//                                 <img
//                                   // src={item.field_newsimage}
//                                   src={`${baseURL + item.field_newsimage}`}
//                                 />
//                               </div>
//                             </div>
//                             <div className="medialistText">
//                               <div
//                                 className="desc"
//                                 dangerouslySetInnerHTML={{
//                                   __html: item.description,
//                                 }}
//                               />
//                               <div
//                                 className="date-wrap"
//                                 dangerouslySetInnerHTML={{ __html: item.date }}
//                               />
//                             </div>
//                           </div>
//                         </li>
//                       </ul>
//                     ))}
//                 </div>

//                 <nav className="pagination-wrapper" aria-label="pagination">
//                   <ul className="pagination">
//                     <li className="active">
//                       <a
//                         className="undefined"
//                         href="#"
//                         aria-label="Go to page number 1"
//                       >
//                         1
//                       </a>
//                     </li>
//                     <li className="">
//                       <a className="" href="#" aria-label="Go to page number 2">
//                         2
//                       </a>
//                     </li>
//                     <li className="">
//                       <a className="" href="#" aria-label="Go to page number 3">
//                         3
//                       </a>
//                     </li>
//                     <li className="">
//                       <a className="" href="#" aria-label="Go to page number 4">
//                         4
//                       </a>
//                     </li>
//                     <li className="">
//                       <a className="" href="#" aria-label="Go to page number 5">
//                         5
//                       </a>
//                     </li>
//                     <li className="">
//                       <a
//                         className="linkClassNext"
//                         href="#"
//                         aria-label="Go to next page"
//                       >
//                         Next &gt;
//                       </a>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Topline />
//       <div id="register-wrap" className="ng-scope">
//         <div className="container">
//           <div>
//             <img
//               src="/static/media/mail.2c90fa17e8d6b9c3c449e7c4245fb874.svg"
//               className="mail-icon"
//               alt=""
//             />
//           </div>
//           <p>Our latest insights, delivered straight to your inbox</p>
//           <p>
//             <Link className="red-btn btn" to="/subscribe">
//               Subscribe <i className="material-icons en">arrow_forward</i>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MediaFilter;
