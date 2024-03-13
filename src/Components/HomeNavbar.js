import React from 'react'
import Contact from './Contact';
import Studio5 from './Studio5';
import Zone from './Zone';
import AgeImg from './AgeImg';
import News from './News';
import Subscribe from './Subscribe';

function HomeNavbar() {
    return (
        <div>
            <div className="clearfix"></div>
            <div id="main-content">
                <div className="app-slider stickySocial">

                    <Contact />
                    <Studio5 />
                    <AgeImg />
                    <Zone />
                    <News />

                </div>
            </div>
        </div >
    )
}
export default HomeNavbar


