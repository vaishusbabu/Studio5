import React from 'react'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const { t } = useTranslation();
    const currentLanguage = i18n.language
    return (
        <div>
            <div id="main-content">
                <div className="page-title en">
                    <div className="container">
                        <div className="head-title">
                            <div />
                            <h2
                                id="pageHeading"
                                role="heading"
                                tabIndex={0}
                                aria-label="page heading Forgot password"
                            >
                                {t("forgt")}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item">
                                <Link to="/home">{t("home")}</Link>{" "}
                            </li>
                            <li className="breadcrumb-item">
                                <Link tabIndex={0} aria-current="page" to="/forgot_password">
                                    <span>
                                        {t("forgt")}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="skipContent">
                    <div id="main-container">
                        <div className="container">
                            <div className="row col-8">
                                <form name="login" className="login-form">
                                    <div className="input-field item">
                                        <input
                                            name="username"
                                            placeholder={t("pgmail")}
                                            className="fontEnglish"
                                            id="username"
                                            type="text"
                                            defaultValue=""
                                        />
                                        <label htmlFor="username" style={{ textAlign: currentLanguage === 'en' ? 'left' : 'right', left: currentLanguage === 'en' ? 0 : 'auto', right: currentLanguage === 'en' ? 'auto' : 0 }}>
                                            {t("email")}
                                        </label>
                                        <span className="helper-text" data-error="Required field." />
                                    </div>
                                    <div className="btn-wrap reset-button-container">
                                        <button className="btn blue login">
                                            {t("reset")}
                                            {" "}
                                            <i className="material-icons en"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword