import React from "react"

import Link from "gatsby-link"
import Layout from "../layout/layout"

const InsuranceExpats = () => (
  <Layout>
    <div>
      <div className="intro expatInsurances">
        <h1 className="introPicText">Be Financially Protected</h1>
      </div>

      <div className="page">
        <h4 className="text center">
          Giving You The Peace Of Mind That You Are Protected
        </h4>
      </div>
      <div className="staticBackground">
        <h1 className="title titleText">EXPAT INSURANCE</h1>
      </div>
      <div className="page">
        <p className="text">
          Wealth Protection is the general term used to describe the process of
          taking steps to protect yourself, your family and/or your business
          against financial hardship in the event of death, disability or
          illness.
          <br />
          <br />
          Using a broad panel of life insurance companies that specialise in
          providing international insurance to expatriates we will ensure you
          are financially protected.
          <br />
          <br />
          Our advisors will identify, compare and recommend the most cost
          efficient insurance quotations that match your personal requirements.
        </p>

        <i className="globe icon"></i>

        <h4 className="text">Key Forms Of Wealth Protection</h4>
        <p className="text">
          Here are the key forms of wealth protection for Expatriates and
          Corporations operating offshore…
        </p>
        <ul className="text key-features">
          <li>Corporate & Group Insurance Schemes</li>
          <li>Travel Insurance</li>
          <li>Income Protection</li>
          <li>Life Insurance for Expatriates</li>
          <li>Critical Illness</li>
          <li> Key Person & Sole Proprietor Business Protection</li>
          <li>Medical Insurance For Individuals and Families</li>
        </ul>

        <i className="user icon"></i>

        <h4 className="text">Talk To An OIB Advisor</h4>
        <p className="text">
          Seek advise from one of our experienced advisors.
          <br />
          <br />
          Determining the type and level of insurance cover you need and then
          finding products that match your needs is sadly not that
          straightforward. Often what looks like a good deal isn’t because it
          may come with too many conditions.
          <br />
          <br />
          We recommend you talk to one of our experienced advisors. They will
          take time to understand your situation and give you good advice on the
          type and level of cover you actually need, rather than the cover an
          individual insurance provider may want you to take.
        </p>

        <i className="calculator icon"></i>

        <h4 className="text">Life Happens - Nonprofit Organisations</h4>
        <p className="text">
          One of respected partners is Life Happens, a nonprofit organisation
          set up to help people take financial responsibility. It also seeks to
          highlight the important role insurance professionals perform in
          helping families, businesses and individuals to find the insurance
          products that best fit their needs.
          <br />
          <br />
          Life Happens offers an unbiased view of what insurance people need.
        </p>

        <a href="https://lifehappens.org/insurance-overview/life-insurance/calculate-your-needs/">
          <p className="linkText text">
            To assess your requirements use the life insurance calculator on
            Life Happens web site.
          </p>
        </a>

        <br />
        <br />
        <Link to="/contact-us" style={{ textDecoration: "none" }}>
          <p className="linkText text">
            Then speak to us.We will help you match the right products with your
            needs.
          </p>
        </Link>
      </div>
    </div>
  </Layout>
)

export default InsuranceExpats
