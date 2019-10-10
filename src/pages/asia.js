import React from "react"
import asia from "../images/asia.jpg"
import Layout from "../layout/layout"

const LandInAsia = () => (
  <Layout>
    <div className="page ">
      <h1 className="center">
        Offshore Investment Brokers have landed in ASIA
      </h1>
      <h3 className="center">Apr 29, 2015 | OIB News</h3>

      <img className="imageProfile" src={asia} alt="" />

      <p className="text">
        Offshore Investment Brokers have now started operations in Veitnam, we
        have hit the ground and we are enjoying the lifestyle in Nam. We are
        still looking to expand into other areas of Asia.
      </p>

      <p className="text">
        If you are an expat living and working in Asia please use our contact
        page to arrange a financial review and make sure your money is working
        hard to pay for your future.
      </p>

      <p className="text">
        If you are a financial adviser and looking for a change and Asia seems
        appealing please send us your CV.
      </p>
    </div>
  </Layout>
)

export default LandInAsia
