import React from "react"
import Link from "gatsby-link"

import Layout from "../layout/layout"
import Carousel from "../components/carousel"

import privacy from "../images/privacy.jpg"
import vietnam from "../images/profile-pic/saigon-night.jpg"
import brexit from "../images/brexit.jpg"
import jimmy from "../images/jimmy-white.jpg"
import notes from "../images/structured_notes.jpg"
import gold from "../images/gold.jpg"
import will from "../images/profile-pic/will-brodie-pic.jpg"
import nikki from "../images/profile-pic/nikki-profile-pic-1.jpg"
import stephen from "../images/profile-pic/stephen-dempsey.jpg"
import sam from "../images/profile-pic/sam-brooks-pic.jpg"
import javier from "../images/profile-pic/javier-moreno.jpg"
import sheeney from "../images/profile-pic/sheeney.jpg"

const Home = () => {
  return (
    <Layout>
      <div>
        <Carousel />
        <div className="page center">
          <div className="text">
            <h2 className="text">
              Our mission is to provide first class Personal Financial Advice
              Services and Products that maximize the advantages of working and
              living offshore.
            </h2>
            <br />
            <h3 className="text">
              The process begins with a conversation. Are you ready to talk to a
              team with a wealth of experience and who care?
            </h3>
          </div>
          <br />
          <br />
          <div>
            <Link to="/contact-us">
              <button className="blackBtn">Let's start the conversation</button>
            </Link>
          </div>

          {/*  our mission end  */}
          <hr className="line" />
          {/*  services start  */}

          <h1 className="subTitleWhite center">How Can We Assist You?</h1>

          <div className="service-grid-container">
            <div className="s-item1 servicesItem center">
              <Link to="/retirement-planning">
                <h3 className="subTitleWhite">Retirement Planning</h3>
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
            <div className="s-item2 servicesItem center">
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
            <div className="s-item3 servicesItem center">
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
            <div className="s-item4 servicesItem center">
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
          </div>
          <br />
          <div className="center">
            <Link to="/services">
              <button className="blackBtn">More about OIB services</button>
            </Link>
          </div>
        </div>
        {/*  services end  */}

        {/*  news start  */}

        <div className="staticBackground">
          <h2 className=" center">Offshore Investment Broker News</h2>
          <h3 className=" center">
            Stay up to date with New, Insights & Events
          </h3>

          <div className="grid-container">
            <div className="item1">
              <Link to="/privacy-policy">
                <div className="cardcontainer">
                  <div className="thecard">
                    <div className="thefront">
                      <img className="cardimage" src={privacy} alt="privacy" />

                      <h1>Your Privacy Is Important To Us</h1>
                    </div>

                    <div className="theback">
                      <img className="cardimage" src={privacy} alt="privacy" />
                      <h3>May 3, 2018 | OIB News</h3>
                      <div className="description">
                        OIB Privacy Policy Update. There are many dimensions to
                        our digital worlds. We buy everything online. We
                        entertain ourselves with endless piles of digital
                        content. We communicate and socialize with friends and
                        colleagues. We’re all digital, all the time. But what
                        we...
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="item2">
              <Link to="/vietnam-tour2018">
                <div className="cardcontainer">
                  <div className="thecard">
                    <div className="thefront">
                      <img
                        className="cardimage"
                        src={vietnam}
                        alt="Saigon Night"
                      />
                      <div className="content">
                        <h1>Vietnam Tour 2018</h1>
                      </div>
                    </div>

                    <div className="theback">
                      <img
                        className="cardimage"
                        src={vietnam}
                        alt="Saigon Night"
                      />
                      <h3 className="meta">Jan 23, 2018 | OIB News</h3>
                      <div className="description">
                        The Vietnam Tour. Saturday, January 27th & Sunday,
                        January 28th 2018. Exhibition Day One is a must go to
                        event. This event is sponsored by OIBME. A must go to
                        pool tournament. Watch the commercial below to get all
                        the details.
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="item3">
              <Link to="/jimmy-whirlwind">
                <div className="cardcontainer">
                  <div className="thecard">
                    <div className="thefront">
                      <img
                        className="cardimage"
                        src={jimmy}
                        alt="Jimmy Whirlwind"
                      />
                      <div className="content">
                        <h1>Jimmy “The Whirlwind” White 9Ball Pool Event</h1>
                      </div>
                    </div>

                    <div className="theback">
                      <img
                        className="cardimage"
                        src={jimmy}
                        alt="Jimmy Whirlwind"
                      />
                      <h3 className="meta">Nov 23, 2016 | Uncategorized</h3>
                      <p className="description">
                        OIBME's Jimmy "The Whirlwind" White event was a great
                        success! On June 17th, 2016. OIBME was proud to be the
                        main sponsor for the 9 Ball event that took place in
                        Saigon, Vietnam. OIBME hosted 6 time World Snooker
                        Championship finalist and winner of over 30 major...
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="item4">
              <Link to="/masalama-europe">
                <div className="cardcontainer">
                  <div className="thecard">
                    <div className="thefront">
                      <img className="cardimage" src={brexit} alt="brexit" />
                      <div className="content">
                        <h1>Ma’salama Europe?</h1>
                      </div>
                    </div>

                    <div className="theback">
                      <img className="cardimage" src={brexit} alt="brexit" />
                      <h3 className="meta">Jun 22, 2016</h3>
                      <div className="description">
                        Tomorrow the UK will decide on whether to leave or
                        remain in the EU. It’s a huge decision and fear abounds.
                        Votes have been fought for by instilling fear and will
                        be cast by those feeling it. Everywhere we look,
                        alarming headlines, imagery and soundbites are
                        screaming...
                        <br />
                        read more
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="item5 extra-card">
              <Link to="/structured-notes">
                <div className="cardcontainer">
                  <div className="thecard">
                    <div className="thefront">
                      <img
                        className="cardimage"
                        src={notes}
                        alt="structured notes"
                      />
                      <h1>Structured Notes</h1>
                    </div>
                    <div className="theback">
                      <img
                        className="cardimage"
                        src={notes}
                        alt="structured notes"
                      />
                      <h3>Apr 16, 2016</h3>
                      <div className="description">
                        MAZE Capital Solutions are a company that OIBME utilize
                        in order to offer Structured Notes to our Clients.
                        Structured Notes differ from the normal fund options
                        that you may be familiar with in a number of key areas.
                        There is a time period on the Note - normally 2 - 5...
                        <br />
                        read more
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="item6 extra-card">
              <Link to="/gold-comeback">
                <div className="cardcontainer">
                  <div className="thecard">
                    <div className="thefront">
                      <img className="cardimage" src={gold} alt="" />
                      <h1>Is Gold Making a Comeback?</h1>
                    </div>
                    <div className="theback">
                      <img className="cardimage" src={gold} alt="" />
                      <h3>Mar 2, 2016</h3>
                      <div className="description">
                        Gold hit its performance peak back in the heady days of
                        2011. Trading then at $1,900 per ounce, Gold was
                        unstoppable. It was running the race of its life, as
                        investors, thrilled by its run, roared it on like bulls
                        from the sidelines. Gold is a safe haven, somewhere...
                        <br />
                        read more
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="center">
            <Link to="/news">
              <button className="blue">More News</button>
            </Link>
          </div>
        </div>

        {/*  new end  */}

        {/*  team start  */}

        <div className="page">
          <h2 className="subTitleWhite center">Meet Our Team</h2>

          <div className="grid-container">
            <div className="item1">
              <Link to="/team">
                <div className="ui card">
                  <div className="image">
                    <img src={will} alt="William Brodie" />
                  </div>
                  <div className="content">
                    <p className="header">Will Brodie</p>
                    <div className="meta">Director</div>
                  </div>
                </div>
              </Link>
            </div>

            <br />

            <div className="item2">
              <Link to="/grayson-nikki">
                <div className="ui card">
                  <div className="image">
                    <img src={nikki} alt="Nikki Grayson" />
                  </div>
                  <div className="content">
                    <p className="header">Nikki Grayson</p>
                    <div className="meta">Head of Operations</div>
                  </div>
                </div>
              </Link>
            </div>

            <br />

            <div className="item3">
              <Link to="/team">
                <div className="ui card">
                  <div className="image">
                    <img src={stephen} alt="Stephen Dempsey" />
                  </div>
                  <div className="content">
                    <p className="header">Stephen Dempsey</p>
                    <div className="meta">Head of Sales</div>
                  </div>
                </div>
              </Link>
            </div>

            <br />

            <div className="item4">
              <Link to="/sam-brookes">
                <div className="ui card">
                  <div className="image">
                    <img src={sam} alt="Sam Brookes" />
                  </div>
                  <div className="content">
                    <p className="header">Sam Brookes</p>
                    <div className="meta">Financial Advisor</div>
                  </div>
                </div>
              </Link>
            </div>

            <br />
            <div className="item5 extra-card">
              <div className="ui card">
                <div className="image">
                  <img src={javier} alt="" />
                </div>
                <div className="content">
                  <p className="header">Javier Moreno Garcia</p>
                  <div className="meta">Financial Advisor</div>
                </div>
              </div>
            </div>

            <br />

            <div className="item6 extra-card">
              <div className="ui card">
                <div className="image">
                  <img src={sheeney} alt="" />
                </div>
                <div className="content">
                  <p className="header">Sheeney Panisales</p>
                  <div className="meta">Coordinator</div>
                </div>
              </div>
            </div>
          </div>

          <div className="center">
            <Link to="/team">
              <button className="blackBtn">
                Meet the rest of our OIB team
              </button>
            </Link>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default Home
