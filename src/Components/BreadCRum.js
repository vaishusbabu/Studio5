import React from 'react'
import { Link } from 'react-router-dom'

function BreadCRum() {
    return (
        <div>

            <div className="container">
                <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                    <ul>
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>{" "}
                        </li>
                        <li className="breadcrumb-item">
                            <Link tabIndex={0} aria-current="page" to="/activities">
                                <span>Activities</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default BreadCRum