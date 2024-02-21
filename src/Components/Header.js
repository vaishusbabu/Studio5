import React from 'react'
// import NavLink from 'react-bootstrap/esm/NavLink';
import logoMCIT from '../assets/images/logoMCIT.png';
import logoSTUDIO5 from '../assets/images/logoSTUDIO5.svg';

import { NavLink } from 'react-router-dom';


function Header() {
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
                style={{ direction: "ltr" }}>
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
                    style={{ direction: "ltr" }}>
                    <li>
                        <NavLink aria-label="Home" activeclassname="active" classNamelass="sidenav-close active" to="/"
                            aria-current="page">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink aria-label="About us" activeclassname="active" className="sidenav-close" to="/about">
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink aria-label="Activities" activeclassname="active" className="sidenav-close"
                            to="/activities">
                            Activities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink aria-label="Media Center" activeclassname="active" className="sidenav-close"
                            to="/media_center">
                            Media Center
                        </NavLink>
                    </li>
                    <li>

                        <NavLink aria-label="Machines" activeclassname="active" className="sidenav-close"
                            to="/machines">
                            Machines
                        </NavLink>
                    </li>
                    <li>
                        <NavLink aria-label="Equipment" activeclassname="active" className="sidenav-close"
                            to="/equipment">
                            Equipment
                        </NavLink>
                    </li>
                    <li className="contactPopover">
                        {/* <NavLink aria-label="E  Contact us"
                            activeclassname="active"
                            className="sidenav-close"
                            to="/contact_us">
                            Contact us</NavLink> */}
                        <NavLink aria-label="Contact us" activeclassname="active" className="sidenav-close"
                            to="/contact_us">
                            Contact us
                        </NavLink>
                    </li>
                    <li className="dropdown">
                        <NavLink to="/login"
                            aria-label="Login button"
                            activeclassname="active"
                            className="sidenav-close get-started"
                            style={{ direction: "ltr" }}
                        >
                            Login
                            <i
                                class="material-icons en"></i>
                        </NavLink>
                    </li>
                    <li className="lang languageFocus">
                        <NavLink activeclassname=""
                            aria-label="language button to arabic"
                            className="sidenav-close nav-lang active"
                            to="/english"
                            style={{ fontFamily: "politicaextrabold" }}
                            aria-current="page">
                            ع
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