import React, { useEffect } from 'react';
import logoMCIT from '../assets/images/logoMCIT.png';
import logoSTUDIO5 from '../assets/images/logoSTUDIO5.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

function Header() {
    const { t } = useTranslation();

    const handleLanguage = () => {
        const currentLanguage = localStorage.getItem('language') || 'en';


        if (currentLanguage === 'en') {
            localStorage.setItem('language', 'ar');
        } else {
            localStorage.setItem('language', 'en');
        }

        const newLanguage = localStorage.getItem('language');
        i18n.changeLanguage(newLanguage);


        window.location.pathname = window.location.pathname.replace('/' + currentLanguage + '/', '/' + newLanguage + '/');

    }
    const currentLanguage = i18n.language;


    return (
        <div> <header id="main-header" className="navbar en">
            <div id="menuPopup" className="modal menuHolder" tabindex={0}>
                <div className="menu-icon-container">
                    <span className="grey-square-rotate red-sq one">

                    </span>
                    <span className="grey-square-rotate red-sq two">
                    </span>
                    <span className="orange-circle one"></span>
                    <span
                        className="orange-circle two"></span>
                </div>
                <div className="modalContentInner">
                    <div className="modal-content"><span class="badge modalClose"><a>
                        <i
                            className="material-icons">close</i></a></span>
                        <h3>Main Menu</h3>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <li><a className="active" href="/" aria-current="page">HomeNavbar</a></li>
                                    <li><a className="" href="/activities">Activities</a></li>
                                    <li><a className="" href="/media_center">Media Center</a></li>
                                    <li><a className="" href="/contact_us">Contact us</a></li>
                                    <li><a className="" href="/en/subscribe">Subscribe</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="menuStyle2">
                                    <li><a className="" href="/about">About us</a></li>
                                    <li><a className="" href="/machines">Machines</a></li>
                                    <li><a className="" href="/register_home">Registration</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="menuStyle2">
                                    <li><a className="" href="/en/privacy-policies">Privacy Policy</a></li>
                                    <li><a className="" href="/en/faq">FAQ</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container flex-row"
                style={{ direction: currentLanguage === 'en' ? 'ltr' : 'rtl' }}>
                <nav className="navbar top-menu">
                    <div className="nav-wrapper">
                        <span className="brand-logo">
                            <a href="https://www.mcit.gov.qa/en"
                                target="blank">
                                <img src={logoMCIT}
                                    alt="Ministry Of Transport and Communication, homepage" />
                            </a>
                            <a id="headerLogo"
                                className="hideMenuPopover active" href="/en/" aria-current="page">
                                <h1>
                                    <img src={logoSTUDIO5}
                                        alt="Studio 5, homepage" />
                                </h1>
                            </a>
                        </span>
                    </div>
                </nav>
                <ul id="main-nav" className="sidenav sidenav-fixed align-center"
                    style={{ direction: currentLanguage === 'en' ? 'ltr' : 'rtl' }}>
                    <li>
                        <NavLink aria-label="Home" activeclassname="active" classNamelass="sidenav-close active" to="/"
                            aria-current="page">
                            {t("home")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink aria-label="About us" activeclassname="active" className="sidenav-close" to="/about">
                            {t("about")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink aria-label="Activities" activeclassname="active" className="sidenav-close"
                            to="/activities">
                            {t("activities")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink aria-label="Media Center" activeclassname="active" className="sidenav-close"
                            to="/media_center">
                            {t("navmedia")}
                        </NavLink>
                    </li>
                    <li>

                        <NavLink aria-label="Machines" activeclassname="active" className="sidenav-close"
                            to="/machines">
                            {t("navmachine")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink aria-label="Equipment" activeclassname="active" className="sidenav-close"
                            to="/equipment">
                            {t("navequi")}
                        </NavLink>
                    </li>
                    <li className="contactPopover">

                        <NavLink aria-label="Contact us" activeclassname="active" className="sidenav-close"
                            to="/contact_us">
                            {t("navcontact")}
                        </NavLink>
                    </li>
                    <li className="dropdown">
                        <NavLink to="/login"
                            aria-label="Login button"
                            activeclassname="active"
                            className="sidenav-close get-started"
                            style={{ direction: "ltr" }}
                        >
                            {t("navlogin")}
                            <i
                                class="material-icons en"></i>
                        </NavLink>
                    </li>
                    <li className="lang languageFocus">
                        <NavLink activeclassname=""
                            aria-label="language button to arabic"
                            className="sidenav-close nav-lang active"
                            to="/home"
                            onClick={handleLanguage}
                            style={{ fontFamily: "politicaextrabold" }}
                            aria-current="page">
                            {localStorage.getItem('language') === 'en' ? 'ع' : 'En'}
                        </NavLink>
                    </li>
                </ul>
                <NavLink to="#"
                    data-target="main-nav"
                    className="sidenav-trigger sasi">
                    <i className="material-icons">
                        menu
                    </i></NavLink>
            </div>
        </header ></div>
    )
}

export default Header