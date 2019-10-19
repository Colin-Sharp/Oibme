import React from "react"
import Link from "gatsby-link"

const Carousel = () => (
  // <!--Carousel Wrapper-->
  <div
    id="carousel-example-1"
    className="carousel slide carousel-fade"
    data-ride="carousel"
    data-interval="false"
  >
    {/* <!--Indicators--> */}
    <ol className="carousel-indicators">
      <li
        data-target="#carousel-example-1"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#carousel-example-1" data-slide-to="1"></li>
      <li data-target="#carousel-example-1" data-slide-to="2"></li>
    </ol>
    {/* <!--/.Indicators--> */}

    {/* <!--Slides--> */}
    <div className="carousel-inner" role="listbox">
      {/* <!--First slide--> */}
      <div className="carousel-item active">
        {/* <!--Mask--> */}
        <div className="view">
          <div className="full-bg-img flex-center mask rgba-indigo-light white-text">
            <ul className="animated fadeInUp col-md-12 list-unstyled">
              <li>
                <h1 className="slideText">Privacy Policy Update</h1>
                <br />
              </li>
              <li>
                <h1 className="slideText">Important Privacy Policy Update.</h1>
              </li>
              <br />
              <br />
              <li>
                <Link to="/privacy-policy-update" className="slideBtn">
                  Take me there
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--/.Mask--> */}
      </div>
      {/* <!--/.First slide--> */}

      {/* <!--Second slide --> */}
      <div className="carousel-item">
        {/* <!--Mask--> */}
        <div className="view">
          <div className="full-bg-img flex-center mask rgba-purple-light white-text">
            <ul className="animated fadeInUp col-md-12 list-unstyled">
              <li>
                <h1 className="slideText">Retirement Aspirations Sorted?</h1>
                <br />
              </li>
              <li>
                <h5 className="slideText">Is it time for a pension review?</h5>
              </li>
              <br />
              <br />
              <li>
                <Link to="/services" className="slideBtn">
                  See our services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--/.Mask--> */}
      </div>
      {/* <!--/.Second slide --> */}

      {/* <!--Third slide--> */}
      <div className="carousel-item">
        {/* <!--Mask--> */}
        <div className="view">
          <div className="full-bg-img flex-center mask rgba-blue-light white-text">
            <ul className="animated fadeInUp col-md-12 list-unstyled">
              <li>
                <h1 className="slideText">
                  Our mission is to provide 1st class advice
                </h1>
                <br />
              </li>
              <li>
                <h5 className="slideText">
                  The prosses begins with a conversation
                </h5>
              </li>
              <br />
              <br />
              <li>
                <Link to="/contact-us" className="slideBtn">
                  Talk to us today
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--/.Mask--> */}
      </div>
      {/* <!--/.Third slide--> */}
    </div>
    {/* <!--/.Slides--> */}

    {/* <!--Controls--> */}
    <a
      className="carousel-control-prev"
      href="#carousel-example-1"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carousel-example-1"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
    {/* <!--/.Controls--> */}
  </div>

  /* <!--/.Carousel Wrapper--> */
)

export default Carousel
