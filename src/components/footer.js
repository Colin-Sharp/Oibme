import React from "react"

import Link from "gatsby-link"

const Footer = props => (
  <div id="footer">
    <div className="gridFooter-container">
      <div className="f-item1">
        <div>
          <ul id="navFooter">
            <Link to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/team">
              <li>Team</li>
            </Link>
            <Link to="/careers">
              <li>Careers</li>
            </Link>
            <Link to="/contact-us">
              <li>Contact Us</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="f-item2">
        <div id="socalLinks" className="ui horizontal list">
          <div className="item">
            <a href="https://www.facebook.com/Offshore-Investment-Brokers-411787868920582/">
              <i className="facebook f icon"></i>
            </a>
          </div>
          <div className="item">
            <a href="https://twitter.com/search?q=OIBIntl">
              <i className="twitter icon"></i>
            </a>
          </div>
          <div className="item">
            <a href="https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F112663522219501163309%2Fposts&followup=https%3A%2F%2Fplus.google.com%2F112663522219501163309%2Fposts&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
              <i className="google plus g icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="f-item3">
        <div className="author">
          <p>Designed by Colin-Sharp | Powered by Gatsby.js</p>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
