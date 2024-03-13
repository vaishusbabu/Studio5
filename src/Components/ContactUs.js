import React, { useEffect, useState, useTransition } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAddressData } from '../Redux/SliceFiles/addressSlice';
import { useTranslation } from 'react-i18next';
import Topline from './Topline'


function ContactUs() {
  const { t } = useTranslation();


  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    agree: ""
  })

  const { data: address } = useSelector(state => state.address);
  console.log('address data: ', address);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAddressData());
  }, [dispatch]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", form)
  }
  return (
    <div>
      <div id="main-container">
        <div className="page-title en">
          <div className="container">
            <div className="head-title">
              <div>
                <div className="share-page en">
                  <h2>{t("share")}</h2>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/sharer/sharer.php?u=http://51.136.51.121/en/contact&amp;src=sdkpreparse"
                    className="fb-xfbml-parse-ignore"
                  >
                    <span>acebook</span>
                    <i aria-label="Facebook" className="fa fa-facebook">
                      &nbsp;
                    </i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://twitter.com/share?text=Studio 5   Contact us&amp;url=http://51.136.51.121/en/contact"
                  >
                    <span>acebook</span>
                    <i aria-label="Twitter" className="fa-brands fa-x-twitter">
                      &nbsp;
                    </i>
                  </a>
                </div>
              </div>
              <h2
                id="pageHeading"
                role="heading"
                tabIndex={0}
                aria-label="page heading Contact us"
              >
                {t("navcontact")}
              </h2>
            </div>
          </div>
        </div>
        <div id="skipContent" className="container contact">
          <h2 tabIndex={0} id="contactUsHeading" aria-label="Contact us page">
            {t("navcontact")}
          </h2>
          <div className="row noFlex">
            <div className="col s12 m12 l12 xl7">
              <p>
                <strong>
                  {t("thanks")}
                </strong>
              </p>
              <p>{t("fill")}</p>
              <div className="row noFlex">
                <div className="col s12 m10 l9">
                  <form onSubmit={handleSubmit}>
                    <div className="row noFlex">
                      <div className="col s12 m6 l6">
                        <div className="input-field item">
                          <input
                            id="name"
                            name="name"
                            autoComplete="no"
                            placeholder="Type name"
                            type="text"
                            defaultValue=""
                            required
                            onChange={handleChange}
                          />
                          <label htmlFor="name" className="active">
                            {t("name")}<span className="asterisk">*</span>
                          </label>
                        </div>
                      </div>
                      <div className="col s12 m6 l6">
                        <div className="input-field item">
                          <input
                            id="email"
                            name="email"
                            autoComplete="no"
                            placeholder={t("pgmail")}
                            type="email"
                            onChange={handleChange}
                            defaultValue=""
                            required
                          />
                          <label htmlFor="email" className="active">
                            {t("email")}
                            <span className="asterisk">*</span>
                          </label>
                        </div>
                      </div>
                      <div className="col s12 m6 l6">
                        <div className="input-field item">
                          <input
                            id="mobile"
                            name="mobile"
                            autoComplete="no"
                            placeholder={t("pgmob")}
                            maxLength={8}
                            onChange={handleChange}
                            type="number"
                            defaultValue=""
                            required
                          />
                          <label htmlFor="mobile" className="active">
                            {t("phone")}
                            <span className="asterisk">*</span>
                          </label>
                        </div>
                      </div>
                      <div className="col s12 m12">
                        <div className="input-field item">
                          <textarea
                            id="message"
                            name="message"
                            onChange={handleChange}
                            placeholder={t("msg1")}
                            rows={8}
                            defaultValue={""}
                            required
                          />
                          <label htmlFor="message" className="active">
                            {t("msg")}<span className="asterisk">*</span>
                          </label>
                        </div>
                      </div>
                      <div className="col s12 m12">
                        <div className="input-check subscribe-items checkboxNew">
                          <br />
                          <input
                            id="iagree"
                            onChange={handleChange}
                            name="iagree"
                            type="checkbox"
                            className="checkbox-holder"
                            required
                          />
                          <label htmlFor="iagree">
                            <span className="en">
                              {t("agree")}
                              {" "}
                              <button
                                type="button"
                                tabIndex={0}
                                aria-label="Read privacy policy"
                                className="modal-trigger underline-text"
                                style={{ border: 0, background: "none" }}
                              >
                                {t("privacy")}
                              </button>
                              .
                            </span>
                          </label>
                        </div>
                        <div className="btn-wrap">
                          <button
                            aria-label="submit"
                            type="submit"
                            className="btn red waves-effect waves-light"
                          >
                            {t("submit")}
                            <i className="material-icons en"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l12 xl5">
              <img
                alt=""
                src="http://51.136.51.121/static/media/contact-right.83d2f5489d795bbacb43.png"
              />
            </div>
          </div>
        </div>

        <div id="modal1" className="modal" role="dialog" tabIndex={0}>
          <div className="modal-content modal-no-close">
            <span className="badge modalClose">
              <button type="button" aria-label="close" tabIndex={0} className="close">
                <i className="material-icons">close</i>
              </button>
            </span>
            <div>
              <h3>Privacy Policy</h3>
            </div>
            <div>
              <p>
                Ministry of Communications and Information Technology&nbsp;(MCIT) is
                committed to protecting your privacy and providing a secure website
                environment. MCIT does not collect personal information about you when
                you visit our website unless you specifically and knowingly choose to
                provide such information to us. Any personal information which you
                volunteer will be treated with the highest standards of security and
                confidentiality.
              </p>
              <p>
                We will not use personal information you provide for commercial use.
                Personal information will not be forwarded to third parties unless
                MCIT is required by law or that entity is relevant to your enquiry.
              </p>
              <p>
                This statement relates to our privacy practices in connection with
                this website. We are not responsible for the content or privacy
                practices o
              </p>
              <div
                className="bootstrapiso"
                data-original-title=""
                id="mttContainer"
                style={{
                  left: 0,
                  top: 0,
                  position: "fixed",
                  zIndex: 100000200,
                  width: 500,
                  marginLeft: "-250px",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  pointerEvents: "none",
                  transform: "translate(358px, 131px)"
                }}
                title=""
              >
                &nbsp;
              </div>
            </div>
          </div>


          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              {t("ok")}
            </a>
          </div>
        </div>


        <div className="bgGrey">
          <div className="container">
            <p>
              <strong>
                {t('inq')}
              </strong>
              <br />
              {t("p1")}
            </p>
            {address.map((e) => (


              <div className="mapHolder">

                <div className="addressBox">
                  <p className="location">
                    <a
                      aria-label="call to +974 3355 6554"
                      href="tel:+974 3355 6554"
                      className="fontEnglish"
                    >
                      <i className="fa fa-phone" />{e.field_contact_number}
                    </a>
                    <br />
                    <a
                      aria-label="email to studio5.info@mcit.gov.qa"
                      href="mailto:studio5.info@mcit.gov.qa"
                    >
                      <i className="fa fa-envelope-o" /> {e.field_google_map_email}
                    </a>
                  </p>
                  <p>
                    <strong> {t("add")}</strong>
                  </p>
                  <div >
                    <div className="item-list" dangerouslySetInnerHTML={{ __html: e.field_address_line }}>
                      {/* <ul className="list-group">
                        <li className="list-group-item">
                          International zone, Innovation center
                        </li>
                        <li className="list-group-item">Expo Doha, Al Bidda park</li>
                        <li className="list-group-item">Doha, Qatar</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000!2d51.5096226!3d25.3066694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1486486434098"
                  width="100%"
                  height={450}
                  frameBorder={0}
                  aria-hidden="false"
                />
              </div>
            ))
            }
          </div>
        </div>

        <Topline />
      </div>



    </div >
  )
}

export default ContactUs