import React, { useEffect } from 'react'
import Topline from './Topline';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAboutData } from '../Redux/SliceFiles/aboutSlice';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    console.log("t: ",t);
    const { data: about } = useSelector(state => state.about);
    console.log('about data:', about);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAboutData());
    }, [dispatch]);

    return (
        <div>
            <div id="main-container">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div>
                                <div className="share-page en">
                                    <h2>Share this page</h2>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/about&amp;src=sdkpreparse"
                                        className="fb-xfbml-parse-ignore"
                                    >
                                        <span>acebook</span>
                                        <i aria-label="Facebook" className="fa fa-facebook">
                                            &nbsp;
                                        </i>
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://twitter.com/share?text=Studio 5   About us&amp;url=http://51.136.51.121/en/about"
                                    >
                                        <span>acebook</span>
                                        <i aria-label="Twitter" className="fa-brands fa-x-twitter">
                                            &nbsp;
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <h2
                                id="pageHeading"

                                tabIndex={0}
                                aria-label="page heading About us"
                            >
                                {t('about')}
                            </h2>
                        </div>
                    </div>
                </div>


                <div id="skipContent">
                    <div dangerouslySetInnerHTML={{ __html: about?.[0]?.body }} />
                </div>
            </div>
            <Topline />
        </div>
    )
}

export default About