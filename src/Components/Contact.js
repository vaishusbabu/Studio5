import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchBannerData } from '../Redux/SliceFiles/bannerSlice.js'

function Contact() {
    const { data: banner } = useSelector(state => state.banner);
    console.log('fetchBannerData: ', banner);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBannerData());
    }, [dispatch]);

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
                        <div>{banner?.video}</div>


                    </div>
                </div>
            </div >
        </div>
    )
}

export default Contact
