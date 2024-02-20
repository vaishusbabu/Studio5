import React from 'react'
import NavLink from 'react-bootstrap/esm/NavLink';
import logoMCIT from '../assets/images/logoMCIT.png';
import logoSTUDIO5 from '../assets/images/logoSTUDIO5.svg';


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
                                    <li><a className="active" href="/en/" aria-current="page">HomeNavbar</a></li>
                                    <li><a className="" href="/en/activities">Activities</a></li>
                                    <li><a className="" href="/en/media-center">Media Center</a></li>
                                    <li><a className="" href="/en/contact">Contact us</a></li>
                                    <li><a className="" href="/en/subscribe">Subscribe</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="menuStyle2">
                                    <li><a className="" href="/en/about">About us</a></li>
                                    <li><a className="" href="/en/machines">Machines</a></li>
                                    <li><a className="" href="/en/registration">Registration</a></li>
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
                        <NavLink aria-label="HomeNavbar" className="sidenav-close active"

                            to="/">Home</NavLink>
                        {/* <a aria-label="Home" activeclassname="active" classNamelass="sidenav-close active" href="/en/"
                    aria-current="page">
                    Home
                </a> */}
                    </li>
                    <li>
                        <NavLink aria-label="About us"
                            activeclassname="active"
                            className="sidenav-close"
                            to="/about">
                            About us</NavLink>
                        {/* <a aria-label="About us" activeclassname="active" className="sidenav-close" href="/en/about">
                    About us
                </a> */}
                    </li>
                    <li>
                        <NavLink
                            aria-label="Activities"
                            activeclassname="active"
                            className="sidenav-close"
                            to="/activities">
                            Activities</NavLink>
                        {/* <a aria-label="Activities" activeclassname="active" className="sidenav-close"
                    href="/en/activities">
                    Activities
                </a> */}
                    </li>
                    <li>
                        <NavLink aria-label="Media Center"
                            activeclassname="active"
                            className="sidenav-close"
                            to="/media_center">
                            Media Centers</NavLink>
                        {/* <a aria-label="Media Center" activeclassname="active" className="sidenav-close"
                    href="/en/media-center">
                    Media Center
                </a> */}
                    </li>
                    <li>
                        <NavLink aria-label=" Machines"
                            activeclassname="active"
                            className="sidenav-close"
                            to="/machines">
                            Machines</NavLink>
                        {/* <a aria-label="Machines" activeclassname="active" className="sidenav-close"
                    href="/en/machines">
                    Machines
                </a> */}
                    </li>
                    <li>
                        <NavLink aria-label="Equipment"
                            activeclassname="active"
                            className="sidenav-close"
                            to="/equipment">
                            Equipment</NavLink>

                        {/* <a aria-label="Equipment" activeclassname="active" className="sidenav-close"
                    href="/en/equipment-used">
                    Equipment
                </a> */}
                    </li>
                    <li className="contactPopover">
                        <NavLink aria-label="E  Contact us"
                            activeclassname="active"
                            className="sidenav-close"
                            to="/contact_us">
                            Contact us</NavLink>
                        {/* <a aria-label="Contact us" activeclassname="active" className="sidenav-close"
                    href="/en/contact">
                    Contact us
                </a> */}
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
                        <a activeclassname=""
                            aria-label="language button to arabic"
                            className="sidenav-close nav-lang active"
                            href="/english"
                            style={{ fontFamily: "politicaextrabold" }}
                            aria-current="page">
                            ع
                        </a>
                    </li>
                </ul>
                <a href="#"
                    data-target="main-nav"
                    className="sidenav-trigger sasi">
                    <i className="material-icons">
                        menu
                    </i></a>
            </div>
        </header ></div>
    )
}

export default Header