import React from 'react'
import { useTranslation } from 'react-i18next'

function PageTitle() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="page-title en">
                <div className="container">
                    <div className="head-title">
                        <div>
                            <div className="share-page en">
                                <h2>{t("share")}</h2>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/activities&amp;src=sdkpreparse"
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
                                    href="http://twitter.com/share?text=Studio 5   Activities&amp;url=http://51.136.51.121/en/activities"
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
                            role="heading"
                            tabIndex={0}
                            aria-label="page heading Activities"
                        >
                            {t("activities")}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle