import React from "react"
import adrian from "../images/logo-head.png"
import Layout from "../layout/layout"

const FosterAdrian = () => (
  <Layout>
    <div className="page">
      <h1 className="subTitleWhite text">Adrian Foster</h1>
      <div className="profile-grid-container">
        <img className="imageProfile" src={adrian} alt="" />
        <h3 className="text">Financial Advisor</h3>
      </div>

      <p className="text">
        Financial Consultant with 26 years’ experience in financial planning in
        South Africa, the Middle East and Europe.
        <br />
        <br />
        After having worked for 10 years with Old Mutual South Africa, I then
        branched out into Banking and Corporate Financial planning both in South
        Africa and Internationally.
        <br />
        <br />
        The past 7 years I have been a financial planner servicing the needs of
        expatriates in Muscat the capital of the Sultanate of Oman with Offshore
        investment Brokers International.
      </p>

      <p className="text">
        My background is in all forms of financial planning from retirement
        planning to Estate planning and Trusts, from education planning to risk
        insurance.
        <br />
        <br />
        My speciality is in Risk and Business assurance where the continuity of
        business and family financial interests become paramount.
        <br />
        <br />I have recently moved to Rabat the capital of Morocco where I am
        busy opening a new office in Financial planning under Offshore
        investments International. I am excited to be offering my services to
        the international community of Morocco.
      </p>
    </div>
  </Layout>
)

export default FosterAdrian
