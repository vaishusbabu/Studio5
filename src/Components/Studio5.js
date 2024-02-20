import React, { useEffect, useState } from 'react'

function WhtStd5() {
    const [studio, setStudio] = useState("");


    useEffect(() => {

        fetch(`https://studio5drupaldev.applab.qa/api/about?_format=json`)
            .then((res) => res.json())
            .then((data) => {
                setStudio(data);
                console.log("contact", data);
            });
    }, [])
    return (
        <div> <div className="makeHome"
            id="skipContent"></div>
            <div className="about-studio container">
                <div className="item">

                    <div dangerouslySetInnerHTML={{ __html: studio?.[0]?.body }}></div>
                    {/* <div className="row two-col">
                        <lt-highlighter contenteditable="false"
                            style={{ display: 'none', zIndex: 1 }} >
                            <lt-div className="lt-highlighter__wrapper"
                                spellcheck="false"
                                style={{
                                    width: '564.5px',
                                    height: '308.344px',
                                    transform: 'none',
                                    transformOrigin: '283.25px 155.172px',
                                    zoom: '1',
                                    marginTop: '-2px',
                                    marginLeft: '-2px',
                                    // width: 564.5px !important; height: 308.344px !important; transform: none !important; transform-origin: 283.25px 155.172px !important; zoom: 1 !important; margin-top: -2px !important; margin-left: -2px !important
                                }}>
                                <lt-div
                                    className="lt-highlighter__scroll-element"
                                    style={{ top: '0px', left: '0px', width: '564.5px', height: '308px ' }}>
                                </lt-div></lt-div></lt-highlighter>
                        <div className="col-sm-6 col-md-6 col-1" data-gramm="false" data-lt-tmp-id="lt-276347"
                            spellcheck="false">
                            <h2 classNamess="line">
                                What is <b className="red-text">STUDIO 5?
                                </b></h2>

                            <p>In line with the Ministry of Communications and Information Technology's Digital Youth
                                Strategy, STUDIO 5&nbsp;is mainly aimed at nurturing youth as digital learners by sharpening
                                their 21st century learning skills, as they develop in an all-pervasive digital environment.
                            </p>

                            <p>In fact, STUDIO 5&nbsp;is envisaged as a community platform that offers technology and allied
                                equipment support for hands-on learning opportunities. Here youth can develop their
                                problem-solving, critical thinking, creativity and innovation skills. This will also develop
                                young people’s knowledge of technology and help them to become future creators of
                                technology.</p>

                            <p>
                                <a className="btnNewYellow btn btn-signup"
                                    href="/about">
                                    View More
                                </a>
                            </p>
                        </div>

                        <div className="col-sm-6 col-md-6 col-2">
                            <p>
                                <img alt="About image studio56"
                                    src="https://studio56.qa/drupal-app/sites/default/files/2020-07/image-with%20pattern_0.png"
                                    style={{ cursor: "wait" }} />

                            </p>
                        </div>
                    </div> */}

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