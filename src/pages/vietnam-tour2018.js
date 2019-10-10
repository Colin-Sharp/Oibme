import React from "react"

import vietnam from "../images/profile-pic/saigon-night.jpg"
import Video from "../components/video"
import Layout from "../layout/layout"

const VietnamTour18 = () => (
  <Layout>
    <div className="page">
      <h1 className="center">Vietnam Tour 2018</h1>
      <h5 className="center">Jan 23, 2018 | OIB News</h5>

      <img className="imageProfile" src={vietnam} alt="" />

      <p className="text">
        The Vietnam Tour. Saturday, January 27th & Sunday, January 28th 2018.
      </p>

      <p className="text">
        Exhibition Day One is a must go to event. This event is sponsored by
        OIBME. A must go to pool tournament. Watch the commercial below to get
        all the details.
      </p>

      <Video videoSrcURL="" videoTitle="Vietnam Tour 2018" />

      <br />
    </div>
  </Layout>
)

export default VietnamTour18
