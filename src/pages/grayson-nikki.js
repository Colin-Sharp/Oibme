import React from "react"
import nikki from "../images/profile-pic/nikki-profile-pic-1.jpg"
import Layout from "../layout/layout"

const Grayson = () => (
  <Layout>
    <div className="page">
      <h1 className="subTitleWhite center">Nikki Grayson</h1>
      <div className="profile-grid-container">
        <div className="profile-item1">
          <img className="imageProfile" src={nikki} alt="profile" />
          <h3 className="text">Operations Manager</h3>
        </div>
        <div>
          <div className="profile-item2">
            <p className="text">
              Nikki began her career in finance following graduating from her
              home town university in Teesside, North East England, with a BSc
              Hons. Working for one of the Major UK Banks in a variety of
              customer management roles gave Nikki a sound grounding in customer
              account management and financial.
            </p>
            <br />
            <p className="text">
              Following a brief career break and a move to the Middle East Nikki
              returned to her career with OIBME Ltd after gaining her UK Level 4
              DipFA (Diploma in Financial Advisors) in 2014 issued by the
              institute of financial services. Nikki took on the role of head of
              operations at OIBME in 2015. This role encompasses ensuring
              compliance & governance with internal STDs across the full OIBME
              operational territories.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Grayson
