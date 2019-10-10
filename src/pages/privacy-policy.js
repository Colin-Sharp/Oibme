import React from "react"

import Link from "gatsby-link"
import Layout from "../layout/layout"

import privacy from "../images/privacy.jpg"

const Privacy = () => (
  <Layout>
    <div>
      <div className="introPrivacy">
        <h1 className="introPicText">Your Privacy Is Important To Us.</h1>
        <h5 className="introPicText">May 3, 2018 | OIB News</h5>
      </div>
      <div>
        <div className="page">
          <h3 className="center">OIB Privacy Policy Update.</h3>

          <img className="imageProfile" src={privacy} alt="" />

          <p className="text">
            There are many dimensions to our digital worlds. We buy everything
            online. We entertain ourselves with endless piles of digital
            content. We communicate and socialize with friends and colleagues.
            We’re all digital, all the time. But what we do, what we buy, who we
            visit and what we think is now on sale.
          </p>
          <br />
          <p className="text">
            Respecting privacy is an issue that has been in the news quite a bit
            of late. Offshore Investment Brokers has updated its privacy policy
            to protect our clients better.
          </p>
          <Link to="/privacy-policy-update">
            <p className="linkText text">
              Please check out our new <span>privacy policy.</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default Privacy
