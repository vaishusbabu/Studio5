import React from 'react'

function Login() {
    return (
        <div><div id="main-content">
            <div className="page-title en">
                <div className="container">
                    <div className="head-title">
                        <div />
                        <h2
                            id="pageHeading"
                            role="heading"
                            tabIndex={0}
                            aria-label="page heading Login"
                        >
                            Login
                        </h2>
                    </div>
                </div>
            </div>
            <div id="skipContent">
                <div id="main-container">
                    <div className="student-color-container">
                        <span className="grey-square-rotate red-sq one" />
                        <span className="grey-square-rotate red-sq four" />
                        <span className="orange-circle one" />
                        <span className="orange-circle three" />
                        <span className="multi-square one">
                            <b>
                                <i />
                            </b>
                        </span>
                        <span className="multi-square three">
                            <b>
                                <i />
                            </b>
                        </span>
                    </div>
                    <div className="container">
                        <br />
                        <br />
                        <div className="center" />
                        <div className="row col-8">
                            <form name="login" className="login-form loginForm" autoComplete="on">
                                <h2>Login</h2>
                                <div className="input-field item">
                                    <input
                                        name="username"
                                        placeholder="Type your email"
                                        autoComplete="no"
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
                                <div className="input-field item">
                                    <input
                                        name="password"
                                        autoComplete="no"
                                        placeholder="Type your password"
                                        id="password"
                                        className="fontEnglish"
                                        type="password"
                                        defaultValue=""
                                    />
                                    <button
                                        type="button"
                                        aria-label="show password"
                                        className="showEyes"
                                    >
                                        <i className="fa fa-eye" aria-hidden="true" />
                                        <span>show password</span>
                                    </button>
                                    <label htmlFor="password" style={{ left: 0, right: "auto" }}>
                                        Password
                                    </label>
                                    <span className="helper-text" data-error="Required field." />
                                </div>
                                <div className="left-align">
                                    <a className="underline-text" href="/forgot_password">
                                        <b>Forget Password?</b>
                                    </a>
                                </div>
                                <div className="left-align btn-wrap">
                                    <button aria-label="login" className="btn blue login">
                                        Login <i className="material-icons en">arrow_forward</i>
                                    </button>
                                </div>
                                <div className="left-align">
                                    Don’t have an account?{" "}
                                    <a className="underline-text" href="/register_home">
                                        <b>Sign up</b>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Login