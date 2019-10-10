import React from "react"

import Link from "gatsby-link"
import Layout from "../layout/layout"

const TheServices = () => (
  <Layout>
    <div>
      <div className="intro serviceIntro">
        <h2 className="introPicText">
          OIB has a wide range of services for your financial opportunities.
        </h2>
      </div>

      <div className="page">
        <p className="text center">
          Working and living overseas introduces financial opportunities. Our
          comprehensive range of financial services will enable you to take full
          advantage of the tax breaks and investment vehicles unique to your
          circumstances.
        </p>
      </div>
      <div className="static-background">
        <div className="staticBackground">
          <h1 className="titleText">SERVICES</h1>
        </div>
      </div>
      <div className="page center">
        <div className="services">
          <div className="service-grid-container">
            <div className="s-item1 servicesItem">
              <h3 className="subTitleWhite">Retirement Planning</h3>
              <Link to="/retirement-planning">
                <i className="fas fa-clock"></i>

                <br />
                <br />
                <p className="serviceIconP serviceText">
                  You deserve a good retirement. We can help you secure your
                  retirement today.
                </p>
              </Link>
            </div>
            <br />
            <br />
            <div className="s-item2 servicesItem">
              <h3 className="subTitleWhite">Pension Transfer</h3>
              <Link to="/pension-transfer">
                <i id="iconsSev2" className="fas fa-balance-scale"></i>

                <br />
                <br />
                <p className="serviceText serviceIconP">
                  We have the experience and knowledge to save you up to 55 of
                  unnecessary taxes.
                </p>
              </Link>
            </div>
            <br />
            <br />
            <div className="s-item3 servicesItem">
              <h3 className="subTitleWhite">Capital Protection</h3>
              <Link to="/capital-protection">
                <i id="iconsSev3" className="fas fa-shield-alt"></i>

                <br />
                <br />
                <p className="serviceText serviceIconP">
                  Let us explain how we can help you protect your investments in
                  volatile markests.
                </p>
              </Link>
            </div>
            <br />
            <br />
            <div className="s-item4 servicesItem">
              <h3 className="subTitleWhite">School Fee Planning</h3>
              <Link to="/school-fee-planning">
                <i id="iconsSev4" className="fas fa-graduation-cap"></i>

                <br />
                <br />
                <p className="serviceText serviceIconP">
                  We can help you prepare for the costs of a good education.
                </p>
              </Link>
            </div>
            <br />
            <br />
            <div className="s-item5 servicesItem">
              <h3 className="subTitleWhite">Investment Accounts</h3>
              <Link to="/investment-accounts">
                <i id="iconsSev5" className="fas fa-piggy-bank"></i>

                <br />
                <br />
                <p className="serviceText serviceIconP">
                  We can introduce you to internationally recognised investment
                  solutions.
                </p>
              </Link>
            </div>
            <br />
            <br />
            <div className="s-item6 servicesItem">
              <h3 className="subTitleWhite">Expat Mortgages</h3>
              <i id="iconsSev6" className="fas fa-building"></i>
              <br />
              <br />
              <p className="serviceText serviceIconP">
                Use us to gain access to exclusive products from leading
                worldwide mortgage lenders.
              </p>
            </div>
            <br />
            <br />
            <div className="s-item7 servicesItem">
              <Link to="/expat-insurance">
                <h3 className="subTitleWhite">Expat Insurance</h3>
                <i id="iconsSev7" className="fas fa-user-shield"></i>

                <br />
                <br />
                <p className="serviceText serviceIconP">
                  We will give you reassurance by helping you insure against
                  financial loss and uncertainty.
                </p>
              </Link>
            </div>
            <br />
            <br />
            <div className="s-item8 servicesItem">
              <Link to="/financial-review">
                <h3 className="subTitleWhite">Financial Review</h3>
                <i id="iconsSev8" className="fas fa-search-dollar"></i>

                <br />
                <br />
                <p className="serviceText serviceIconP">
                  As you go through life your needs change so periodically
                  reviewing your financial circumstances is a good idea. Use our
                  experienced fully qualified advisors to help you get a clear
                  idea of your current financial health.
                </p>
              </Link>
            </div>
            <br />
            <br />
            <div className="s-item9 servicesItem">
              <h3 className="subTitleWhite">Marine</h3>
              <i id="iconsSev8" className="fas fa-ship"></i>
              <br />
              <br />
              <p className="serviceText serviceIconP">
                If you’re a superyacht captain or crew your lifestyle isn’t 9 to
                5. We help client’s just like you access financial solutions
                that are designed for your chosen career.
              </p>
            </div>
            <br />
            <br />
            <div className="s-item10 servicesItem">
              <h3 className="subTitleWhite">Pension Planning QROPS</h3>
              <Link to="/qrops">
                <i id="iconsSev2" className="fas fa-balance-scale"></i>

                <br />
                <br />
                <p className="serviceText serviceIconP">
                  Retirement Plan? Check out the OIBME QROPS.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default TheServices
