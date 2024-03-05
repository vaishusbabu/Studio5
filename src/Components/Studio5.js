import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { urlEndPoints } from '../urlEndPoints';
import { setStudio } from '../Redux/banner/studioSlice';

function WhtStd5() {
    const { studio } = useSelector(state => state.studio)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(urlEndPoints.studio);
    //             dispatch(setStudio(response.data));
    //             console.log("studio ", response.data);
    //         } catch (error) {
    //             console.error('There was a problem with the fetch operation:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <div> <div className="makeHome"
            id="skipContent"></div>
            <div className="about-studio container">
                <div className="item">

                    <div dangerouslySetInnerHTML={{ __html: studio?.[0]?.body }}></div>


                    <div className="bootstrapiso" data-original-title="" id="mttContainer"
                        style={{
                            left: '0px',
                            top: '0px',
                            position: 'fixed',
                            zIndex: 100000200,
                            width: '500px',
                            marginLeft: '-250px',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            pointerEvents: 'none',
                            transform: 'translate(351px, 212px)',
                        }}
                        title="">&nbsp;
                    </div>

                    <p>
                        <iframe id="ocrFrame" name="ocrFrame"
                            src="chrome-extension://hmigninkgibhdckiaphhmbgcghochdjc/ocr.html"
                            style={{ display: 'none' }}>
                        </iframe><lt-toolbar contenteditable="false"
                            data-lt-force-appearance="light" style={{ display: "none" }}><lt-div className="lt-toolbar__wrapper"
                                style={{ left: '554px', position: 'absolute', top: '299px', bottom: 'auto', zIndex: 'auto' }}><lt-div
                                    className="lt-toolbar__premium-icon"></lt-div><lt-div
                                        className="lt-toolbar__status-icon lt-toolbar__status-icon-has-no-errors"
                                        title="LanguageTool - Spelling and Grammar Check"></lt-div></lt-div></lt-toolbar></p>
                </div><img alt="" src="/static/media/about-home-1.e4133e4dbd1cbcf2b8e7.png" style={{ display: "none" }} /><span
                    className="orange-circle"></span>
            </div></div>
    )
}

export default WhtStd5