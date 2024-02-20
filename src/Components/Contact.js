import React, { useEffect, useState } from 'react'


function Contact() {
    const [banner, setBanner] = useState("");


    useEffect(() => {

        fetch(`https://studio5drupaldev.applab.qa/api/banner?_format=json`)
            .then((res) => res.json())
            .then((data) => {
                setBanner(data);
                console.log("contact", data);
            });
    }, [])
    return (
        <div>
            {/* <div className="video-box">
                <div className="video-btn">
                    <button className="btn-toggle play" aria-label="Pause the video">
                        Pause
                    </button>
                </div>
                <video muted playsInline loop
                    style={{ backgroundImage: 'url("https://studio5drupaldev.applab.qa/")', width: '100%', height: 'auto' }}
                    >
                    <source src="https://studio5drupaldev.applab.qa//sites/default/files/2023-11/Outro1366.768.mov"/>
                    Your browser does not support the video tag.
                </video>
            </div> */}
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
