import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function BreadCRum() {
    const { t } = useTranslation();
    return (
        <div>

            <div className="container">
                <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                    <ul>
                        <li className="breadcrumb-item">
                            <Link to="/">{t("home")}</Link>{" "}
                        </li>
                        <li className="breadcrumb-item">
                            <Link tabIndex={0} aria-current="page" to="/activities">
                                <span>{t("activities")}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default BreadCRum