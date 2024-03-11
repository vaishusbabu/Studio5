import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchZoneData } from '../Redux/SliceFiles/zoneSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


function Zone() {
    const { t } = useTranslation();
    const { data: zone } = useSelector(state => state.zone);
    console.log('zone data: ', zone);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchZoneData());
    }, [dispatch]);

    return (
        <div>

            <div className="zone-wrap">
                <div className="container">
                    <div className="zone-text en">
                        <h3>{t("zone")}</h3>
                        <div>
                            {t("3zone")}
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
                        <h3 id="activity">{t("activities")}</h3>
                        <div>{t("explore")}</div>
                    </div>
                    <div class="row noFlex">
                        <ul aria-label="Activities">
                            <div class="activities-inner">
                                <p>
                                    {t("latest")}
                                </p>
                                <Link to="/activities" className="btnNewYellow btn"
                                    aria-labelledby="activity"
                                    aria-label="Button for view more activity">{t("view")}
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
