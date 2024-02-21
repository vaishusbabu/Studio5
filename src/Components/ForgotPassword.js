import React from 'react'

function ForgotPassword() {
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
                                Forgot password
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav className="breadcrumb" id="breadcrumb-wrap" aria-label="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item">
                                <a href="/en/">Home</a>{" "}
                            </li>
                            <li className="breadcrumb-item">
                                <a tabIndex={0} aria-current="page" href="/en/forgot-password">
                                    <span>Forgot password</span>
                                </a>
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
                                            placeholder="Type your email"
                                            className="fontEnglish"
                                            id="username"
                                            type="text"
                                            defaultValue=""
                                        />
                                        <label htmlFor="username" style={{ left: 0, right: "auto" }}>
                                            Email
                                        </label>
                                        <span className="helper-text" data-error="Required field." />
                                    </div>
                                    <div className="btn-wrap reset-button-container">
                                        <button className="btn blue login">
                                            Reset password{" "}
                                            <i className="material-icons en">arrow_forward</i>
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