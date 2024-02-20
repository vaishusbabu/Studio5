import React from 'react'
import agegroup1 from '../assets/images/agegroup1.png';
import agegroup2 from '../assets/images/agegroup2.png';
import agegroup3 from '../assets/images/agegroup3.png';
import agegroup4 from '../assets/images/agegroup4.png';

function AgeImg() {
    return (
        <div>
            <div className="top-images ng-scope">
                <div className="container">
                    <div className="item "><img src={agegroup1} alt="1"/></div>
                    <div className="item "><img src={agegroup2} alt="2" /></div>
                    <div className="item "><img src={agegroup3} alt="3" /></div>
                    <div className="item "><img src={agegroup4} alt="4" /></div>
                </div>
            </div>
        </div>
    )
}

export default AgeImg