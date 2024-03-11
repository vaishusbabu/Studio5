import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
    const { t } = useTranslation();
    return (
        <div>
            <div id="footer" className="ng-scope">
                <div className="container">
                    <div className="clearfix"></div>
                    <div className="copy-text">
                        {t("footer")}
                    </div>
                    <a href="https://mada.org.qa/" ><img src="https://monitor.mada.org.qa/acc/en/N1EuEczqIXmhWhrWDdYIXALNseSGpmAc5vGQejSV4WhaNJ9gOpNDTU0hqGbI" alt="Mada National Web Accreditation, Access Certified" /></a>
                </div>
                <button className="scroll-top scroll-top-en">{t("top")}</button>
            </div>
        </div>
    )
}

export default Footer