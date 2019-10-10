import React from "react"

import Layout from "../layout/layout"
import ContactForm from "../components/form"

const GetInTouch = () => (
  <Layout>
    <div className="contactUs">
      <div className="intro contactUsIntro">
        <h1 className="introPicText">Get In Touch</h1>
      </div>
      <div className="page">
        <p className="text center">
          It’s never too late to start planning your future today. If you are
          looking for more information about our products and services please
          feel free to contact us…
        </p>
      </div>
      <div className="staticBackground">
        <h1 className="title titleText">CONTACT US</h1>
      </div>

      <div className="page">
        <div className="gridContactUs-container">
          <div className="cu-item1">
            <h2>Get In touch</h2>
            <h3>Contact OIBME to get your questions answered</h3>
            <ContactForm />
          </div>
          <br />
          <div className="cu-item2 gridText">
            <h3 className="text">Head Office</h3>
            <div className="p-grid-container">
              <div className="p-item1">
                <i className="location arrow icon" />
              </div>
              <div className="p-item2">
                <p>
                  Villa 477, Way 4837
                  <br />
                  18th November Way
                  <br />
                  Azaiba, Muscat
                  <br />
                  Oman
                  <br />
                  PO Box 3179
                  <br />
                  Postal Code 111 Seeb
                </p>
              </div>
            </div>

            <div className="p-grid-container">
              <div className="p-item1">
                <i className="envelope outline icon" />
              </div>
              <div className="p-item2">
                <p>admin@oibme.com</p>
              </div>
            </div>

            <div className="p-grid-container">
              <div className="p-item1">
                <i className="mobile alternate icon" />
              </div>
              <div className="p-item2">
                <p>Tel: +96824492599</p>
              </div>
            </div>

            <div className="p-grid-container">
              <div className="p-item1">
                <i className=" clock outline icon" />
              </div>
              <div className="p-item2">
                <p>
                  Sunday – Thursday: <strong>9:00 am – 5:00 pm</strong>
                  <br />
                  Friday – Saturday: <strong>Closed</strong>
                </p>
              </div>
            </div>

            <div className="p-grid-container">
              <div className="p-item1">
                <i className="print icon" />
              </div>
              <div className="p-item2">
                <p>Fax: +9682446788</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default GetInTouch
