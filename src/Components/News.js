import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function News() {
  const [food, setFood] = useState("");
  const [video, setVideo] = useState("");
  const [gallery, setGallery] = useState("");

  useEffect(() => {
    fetch(
      `https://studio5drupaldev.applab.qa/api/featured-news-article?_format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
        console.log("food", data);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://studio5drupaldev.applab.qa/api/featured-news-gallery?_format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        console.log("gallery", data);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://studio5drupaldev.applab.qa/api/featured-news-video?_format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideo(data);
        console.log("video", data);
      });
  }, []);
  return (
    <div>
      <div className="news-wrap">
        <div className="container">
          <h2 id="news-media" className="line">
            News &amp; Media
            <span className="grey-square-rotate" />
          </h2>
          <div className="flex-row col-2">
            <div className="item news-item">
              <div className="flex-row col-3">
                {food && (
                  <div className="homeNewsParent">
                    <Link
                      className="item homeNewsText1"
                      aria-label='Test news 2023 News Published <time datetime="2023-12-19T13:13:52+00:00" class="datetime">19 December 2023</time>'
                      to="/news"
                    >
                      <h3>{food[0].title}</h3>
                    </Link>

                    <div className="img-wrap">
                      <img
                        src="https://studio5drupaldev.applab.qa//sites/default/files/2023-08/heenat-salama--3D-FOOD-MOLD-1_1.jpg"
                        alt="news image"
                      />
                    </div>
                    <div className="homeNewsText2">
                      <div className="category-wrap">{food[0].category}</div>
                      <div className="desc"></div>
                      <p
                        className="date-wrap"
                        aria-label='Published <time datetime="2023-12-19T13:13:52+00:00" class="datetime">19 December 2023</time>'
                        dangerouslySetInnerHTML={{ __html: food[0].date }}
                      ></p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="item gal-item en">
              <div className="flex-row col-2">
                  {video && (
                    <div className="item">
                      <div className="">
                        <div className="videowrapper ">
                          <object data={video[0].video} tabIndex={-1}>
                            <param name="movie" value={video[0].video} />
                            <param
                              name="allowFullScreen"
                              mozallowfullscreen="mozallowfullscreen"
                              msallowfullscreen="msallowfullscreen"
                              oallowfullscreen="oallowfullscreen"
                              webkitallowfullscreen="webkitallowfullscreen"
                              value="true"
                            />
                            <span>Video</span>
                          </object>
                        </div>
                        <div className="category-wrap Video">
                          {video[0].category}
                        </div>
                        <Link to="/testVideo">
                          {" "}
                          <div className="desc">{video[0].title}</div>
                        </Link>
                        <p
                          className="date-wrap"
                          aria-label='Published <time datetime="2023-12-17T08:56:58+00:00" class="datetime">17 December 2023</time>'
                          dangerouslySetInnerHTML={{ __html: video[0].date }}
                        ></p>
                      </div>
                    </div>
                  )}
         

                  {gallery && (
                    <div className="item">
                      <div className="">
                        <div className="img-wrap">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: gallery[0].image,
                            }}
                          ></div>
                        </div>
                        <div className="category-wrap Gallery">
                          {gallery[0].category}
                        </div>
                        <Link
                          to="/gallery"
                          aria-label='3D Print a Mini-City Gallery Published <time datetime="2019-10-24T10:26:52+00:00" class="datetime">24 October 2019</time>'
                        >
                          <div className="desc">{gallery[0].title}</div>
                        </Link>
                        <p
                          className="date-wrap"
                          aria-label='Published <time datetime="2019-10-24T10:26:52+00:00" class="datetime">24 October 2019</time>'
                          dangerouslySetInnerHTML={{ __html: gallery[0].date }}
                        ></p>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>

          <div className="view-more home">
            <a
              aria-label="Button for view more news and media"
              href="/en/media-center"
            >
              View More
              <i className="material-icons en" />
            </a>
          </div>
          <div className="multi-square">
            <b>
              <i />
            </b>
          </div>
          <div className="multi-circle">
            <b>
              <i />
            </b>
          </div>
        </div>
      </div>

      <div id="register-wrap" className="ng-scope en">
        <div className="container home-subscribe en">
          <span className="multi-square-orange">
            <b>
              <i></i>
            </b>
          </span>
          <div>
            <img
              src="/static/media/mail.2c90fa17e8d6b9c3c449e7c4245fb874.svg"
              className="mail-icon"
              alt=""
            />
          </div>
          <p>Our latest insights, delivered straight to your inbox</p>
          <p>
            <a
              className="red-btn btn btn-signup"
              aria-label="subscribe button for newsletter"
              href="/en/subscribe"
            >
              Subscribe
              <i className="material-icons en"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
