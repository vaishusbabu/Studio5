import React from 'react'
import Topline from './Topline'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n';
import { Link } from 'react-router-dom';


function RegisterHome() {
    const { t } = useTranslation();
    const currentLanguage = i18n.language
    return (
        <div><div id="main-content" className="registration-page">
            <div className="page-title en">
                <div className="container">
                    <div className="head-title">
                        <div />
                        <h2
                            id="pageHeading"
                            role="heading"
                            tabIndex={0}
                            aria-label="page heading Register"
                        >
                            {t("reg")}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                    <ul>
                        <li className="breadcrumb-item">
                            <Link tabIndex={0} aria-current="page" to="/register_home">
                                <span>    {t("reg")}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="registration-color-container">
                <span className="grey-square-rotate red-sq one" />
                <span className="grey-square-rotate red-sq two" />
                <span className="orange-circle one" />
                <span className="orange-circle two" />
                <span className="multi-square one">
                    <b>
                        <i />
                    </b>
                </span>
                <span className="multi-square two">
                    <b>
                        <i />
                    </b>
                </span>
            </div>
            <div className="container registration-options">
                <div className="registration-container">
                    <h2
                        id="registration-title"
                        className="primary-heading"
                        style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right' }}
                    >
                        {t("are")}
                    </h2>
                    <div className="btn-wrap type-selection" id="skipContent">
                        <button aria-label="Are you Guardian" role="button" className="btn">
                            <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/guardian">
                                {" "}
                                {t("gua")}
                                {" "}
                            </Link>

                        </button>
                        <button aria-label="Are you Student" className="btn">
                            <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/student">
                                {" "}
                                {t("std")}
                                {" "}
                            </Link>
                        </button>
                        <button aria-label="Are you School" className="btn">
                            <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/school">

                                {t("scl")}
                            </Link>
                        </button>
                        <button aria-label="Are you Volunteer" className="btn">
                            <Link aria-label="About us" activeclassname="active" className="sidenav-close" to="/volunteer">
                                {t("vol")}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <Topline />
        </div>
        </div>
    )
}

export default RegisterHome