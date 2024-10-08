import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MediaImg() {

    const [img, setImg] = useState([]);
    const { id } = useParams();
    console.log("id", id);

    const baseURL = "https://studio5drupaldev.applab.qa/";

    useEffect(() => {
        fetch(`https://studio5drupaldev.applab.qa/api/media-detail-gallery/${id}?_format=json`)
            .then((res) => res.json())
            .then((data) => {
                console.log("img", data["media-gallery"])
                setImg(data["media-gallery"]);
                // console.log("img2", img)
            })
    }, [])

    console.log("img2", img)
    return (
        <div>

            {img.map((item, index) => (

                <div className="article-news">

                    <div className="slick-slider slider news-slider slick-initialized">
                        <div className="slick-list">
                            <div
                                className="slick-track"
                                style={{
                                    width: 1280,
                                    opacity: 1,
                                    transform: "translate3d(0px, 0px, 0px)"
                                }}
                            >
                                <div
                                    data-index={0}
                                    className="slick-slide slick-active slick-center slick-current"
                                    tabIndex={-1}
                                    aria-hidden="false"
                                    style={{ outline: "none", width: 1280 }}
                                >
                                    <div>
                                        <div
                                            className="item"
                                            tabIndex={-1}
                                            style={{ width: "100%", display: "inline-block" }}
                                        >
                                            <img
                                                src={item.image}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            }

        </div>
    )
}

export default MediaImg