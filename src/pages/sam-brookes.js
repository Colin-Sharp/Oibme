import React from "react"
import sam from "../images/profile-pic/sam-brooks-pic.jpg"
import Layout from "../layout/layout"

const Brookes = () => (
  <Layout>
    <div className="page ">
      <h1 className="subTitleWhite center">Sam Brookes</h1>

      <img className="imageProfile" src={sam} alt="" />
      <h3 className="text">Financial Advisor</h3>

      <p className="text">
        I am a Qualified Independent Financial Adviser with over 15 years
        industry experience in the UK and overseas. I have moved to Muscat, Oman
        and have been here for the past 4 + years, while enjoying the expat
        lifestyle, and looking after the Expat community with their savings and
        investment planning.
      </p>
      <p className="text">I specialise in the following areas:</p>

      <ul className="text key-features">
        <li>Investment Planning</li>
        <li>Pension Planning (QROPS)</li>
        <li>Savings Plans</li>
        <li>Family Protection Plans</li>
        <li>International Medical Plans</li>
        <li>Life & Critical Illness Cover</li>
      </ul>
      <p className="text">
        My objective is to help you realise your goals, by effective planning,
        by making your pension, savings and investment assets work hard and by
        ensuring you have the right level and quality of life assurance and
        protection at the best price – in short, my approach helps grow your
        wealth, remove hassle and complexity whilst saving you time and
        providing you with peace of mind.
      </p>
    </div>
  </Layout>
)

export default Brookes
