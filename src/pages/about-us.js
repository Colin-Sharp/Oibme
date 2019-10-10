// eslint-disable-next-line
import React from "react"
import Link from "gatsby-link"

import Layout from "../layout/layout"

const LearnAboutUs = () => (
  <Layout>
    <div>
      <div className="intro aboutUsIntro">
        <h1 className="introPicText">Learn A Bit More About Us</h1>
      </div>

      <div className="page">
        <div className="center">
          <i id="quoteLeft" className="quote left icon"></i>
          <p className="text">
            Our team is our strength. We have grown and we are growing quickly
            and the only way we can do this is by attracting talented
            experienced people who are recognised experts in their respective
            areas.
          </p>
          <i id="quoteRight" className="quote right icon"></i>
          <h4 className="text">Will Broadie</h4>
          <h5 className="text">Managing Director</h5>
        </div>
      </div>
      <div className="staticBackground">
        <h1 className="title titleText">ABOUT US</h1>
      </div>
      <div className="page">
        <div>
          <h3 className="text">Background</h3>
          <p className="text">
            OIB (Offshore Investment Brokers) was established as an innovative
            offshore brokerage with the goal of providing Expat clients with an
            exceptional service and the opportunity for Tax-Free Savings and
            Investments.
            <br />
            <br />
            Our investment advisors specialise in investments solutions,
            financial advice, protection and securities using our international
            experience to meet the needs of our clients globally.
            <br />
            <br />
            Collectively we have many years of experience in the overseas
            markets enabling us to offer a highly personalised and confidential
            service to the most demanding of clientele.
          </p>
        </div>
        <hr className="line" />

        <div className="text">
          <div className="center">
            <Link to="/team">
              <i className="fas fa-user-friends"></i>
            </Link>
          </div>
          <h4 className="text">The Team</h4>
          <p className="text">
            Our growing team of experienced investment brokers operate and serve
            clients across the Middle East, Asia and Africa. Our team provide a
            personal service that is geared to finding the right solutions for
            each client.
          </p>
        </div>

        <div className="text">
          <div className="center">
            <i className=" fas fa-link"></i>
          </div>
          <h4 className="text">Our Partners</h4>
          <p className="text">
            Offshore investment brokers have partnered with some of the leading
            asset management firms to give you the best wealth management advice
            to fit your personal situation. We continue to research and meet
            with firms to make sure we are still offering the best products and
            services at all times.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default LearnAboutUs
