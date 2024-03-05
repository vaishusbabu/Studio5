import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setBanner } from '../Redux/banner/bannerSlice';
import { urlEndPoints } from '../urlEndPoints';


function Contact() {
    const { banner } = useSelector(state => state.banner)
    console.log('banner: ', banner);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(urlEndPoints.banner);
                dispatch(setBanner(response.data));
                console.log("contact ", response.data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>

            <div className="video-box">
                <div className="video-btn">
                    <button className="btn-toggle play" aria-label="Pause the video">
                        Pause
                    </button>
                </div>
                <video
                    autoPlay
                    playsInline
                    loop
                >
                    <source src="https://studio5drupaldev.applab.qa//sites/default/files/2023-11/Outro1366.768.mov" />

                </video>
            </div>
            <div className="banner" >
                <div>
                    <div className="desc en">

                        <div dangerouslySetInnerHTML={{ __html: banner?.[0]?.body }}></div>
                        {/* <div>{banner?.video}</div> */}


                    </div>
                </div>
            </div >
        </div>
    )
}

export default Contact
