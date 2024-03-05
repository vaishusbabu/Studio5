import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Zone() {

    const [zone, setZone] = useState("");
    useEffect(() => {

        fetch(`https://www.studio5.qa/drupal-app/api/zones?_format=json`)
            .then((res) => res.json())
            .then((data) => {
                setZone(data);
                console.log("Zone", data);
            });
    }, [])

    return (
        <div>

            <div className="zone-wrap">
                <div className="container">
                    <div className="zone-text en">
                        <h3>Zone</h3>
                        <div>
                            Studio 5 has three main zones to provide the kids extraordinary
                            learning experiences.
                        </div>
                    </div>
                    <div className="service-zone en">
                        <div className="same-height" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {zone && zone.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="icon"
                                        style={{
                                            background:
                                                `{item.zoneimage}`
                                        }} >
                                    </div>
                                    <h3>{item.zonenames}</h3>
                                    <div className="desc" dangerouslySetInnerHTML={{ __html: item.zonesdescription }}>
                                    </div>
                                </div>
                            )
                            )
                            }
                        </div>
                        <span className="grey-square" />
                    </div>
                </div>
            </div>

            <div class="activityHome">
                <div class="container">
                    <div class="zone-text en activity-block">
                        <h3 id="activity">Activities</h3>
                        <div>Explore our latest activities and enroll in them</div>
                    </div>
                    <div class="row noFlex">
                        <ul aria-label="Activities">
                            <div class="activities-inner">
                                <p>There are no latest activities at the moment, check out activities page to see what's new
                                </p>
                                <Link to="/activities" className="btnNewYellow btn"
                                    aria-labelledby="activity"
                                    aria-label="Button for view more activity">View More
                                    <i className="material-icons en">
                                    </i></Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Zone
