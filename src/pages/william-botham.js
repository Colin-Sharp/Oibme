import React from "react"

import Layout from "../layout/layout"

import william from "../images/profile-pic/wb.jpg"

const Botham = () => (
  <Layout>
    <div className="page ">
      <h1 className="subTitleWhite center">William Botham</h1>

      <img className="imageProfile" src={william} alt="" />
      <h3 className="text ">Senior Associate</h3>

      <p className="text">
        I entered the Financial Services arena in 1991 with Legal & General UK,
        and have been actively involved in the industry ever since. As a member
        of the Chartered Insurance Institute, I’ve been assisting ex-pats with
        their Financial and Estate Planning since 1996, with postings in the
        America’s, Africa, Europe, Middle East, Asia and South East Asia.
        Currently, my customer base is spread across the UAE, Qatar, Oman,
        India, Vietnam, Thailand, Malaysia, Singapore, Brunei, Indonesia,
        Philippines and Australia
      </p>

      <p className="text">
        Proud of my straight forward, no nonsense approach to life, family,
        friends, colleagues and work ethics. An avid reader, with a strong
        passion for ruby union, fishing and cold beer. I’m happily married and
        try to spend as much time as possible with my family, on our farm in
        north central Thailand
      </p>
    </div>
  </Layout>
)

export default Botham
