import React from "react"
import Link from "gatsby-link"
import Layout from "../layout/layout"
import privacy from "../images/privacy.jpg"
import jimmy from "../images/jimmy-white.jpg"
import vietnam from "../images/profile-pic/saigon-night.jpg"
import brexit from "../images/brexit.jpg"
import notes from "../images/structured_notes.jpg"
import gold from "../images/gold.jpg"
import fed from "../images/fed.jpg"
import asia from "../images/asia.jpg"

const TheNews = () => (
  <Layout>
    <div>
      <div className="intro newsIntro">
        <p className="introPicText">Keep Up With OIB News</p>
      </div>
      <div className="page">
        <h2 className="text center">
          Being a good investor is all about education. Keep up with OIB News,
          investment news from around the globe and find out what our
          experienced advisors have to say.
        </h2>
      </div>
      <div className="staticBackground">
        <h1 className="title titleText">NEWS</h1>
      </div>
      <div className="page">
        <div className="grid-container">
          <div className="item1">
            <Link to="/privacy-policy">
              <div className="cardcontainer">
                <div className="thecard">
                  <div className="thefront">
                    <img
                      className="cardimage"
                      src={privacy}
                      alt="privacy img"
                    />
                    <h1>Your Privacy Is Important To Us.</h1>
                  </div>
                  <div className="theback">
                    <img
                      className="cardimage"
                      src={privacy}
                      alt="privacy img"
                    />
                    <h3>May 3, 2018</h3>
                    <div className="description">
                      OIB Privacy Policy Update. There are many dimensions to
                      our digital worlds. We buy everything online. We entertain
                      ourselves with endless piles of digital content. We
                      communicate and socialize with friends and colleagues.
                      We’re all digital, all the time. But what we...
                      <br />
                      read more
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
                    <img className="cardimage" src={vietnam} alt="vietnam" />
                    <h1>Vietnam Tour 2018</h1>
                  </div>
                  <div className="theback">
                    <img className="cardimage" src={vietnam} alt="vietnam" />
                    <h3>Jan 23, 2018</h3>
                    <div className="description">
                      The Vietnam Tour. Saturday, January 27th & Sunday, January
                      28th 2018. Exhibition Day One is a must go to event. This
                      event is sponsored by OIBME. A must go to pool tournament.
                      Watch the commercial below to get all the details.
                      <br />
                      read more
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
                      alt="jimmy whirlwind"
                    />
                    <h1>Jimmy “The Whirlwind” White 9Ball Pool Event</h1>
                  </div>
                  <div className="theback">
                    <img
                      className="cardimage"
                      src={jimmy}
                      alt="jimmy whirlwind"
                    />
                    <h3>Nov 23, 2016</h3>
                    <div className="description">
                      OIBME's Jimmy "The Whirlwind" White event was a great
                      success! On June 17th, 2016. OIBME was proud to be the
                      main sponsor for the 9 Ball event that took place in
                      Saigon, Vietnam. OIBME hosted 6 time World Snooker
                      Championship finalist and winner of over 30 major...
                      <br />
                      read more
                    </div>
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
                    <h1>Ma’salama Europe?</h1>
                  </div>
                  <div className="theback">
                    <img className="cardimage" src={brexit} alt="brexit" />
                    <h3>Jun 22, 2016</h3>
                    <div className="description">
                      Tomorrow the UK will decide on whether to leave or remain
                      in the EU. It’s a huge decision and fear abounds. Votes
                      have been fought for by instilling fear and will be cast
                      by those feeling it. Everywhere we look, alarming
                      headlines, imagery and soundbites are screaming...
                      <br />
                      read more
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="item5">
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
                      MAZE Capital Solutions are a company that OIBME utilize in
                      order to offer Structured Notes to our Clients. Structured
                      Notes differ from the normal fund options that you may be
                      familiar with in a number of key areas. There is a time
                      period on the Note - normally 2 - 5...
                      <br />
                      read more
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="item6">
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

          <div className="item7">
            <Link to="/federal-reserve">
              <div className="cardcontainer">
                <div className="thecard">
                  <div className="thefront">
                    <img className="cardimage" src={fed} alt="" />
                    <h1> Federal Reserve Expects US Economy to Strengthen</h1>
                  </div>
                  <div className="theback">
                    <img className="cardimage" src={fed} alt="" />
                    <h3>May 26, 2015</h3>
                    <div className="description">
                      The US economy is very likely to strengthen, following
                      first quarter setback that was heavily influenced by
                      fleeting factors such as bad weather, which leaves the
                      Federal Reserve primed for a first rate rise this year.
                      The US is 'well positioned' for continued growth,...
                      <br />
                      read more
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="item8">
            <Link to="/asia">
              <div className="cardcontainer">
                <div className="thecard">
                  <div className="thefront">
                    <img className="cardimage" src={asia} alt="" />
                    <h1>Offshore Investment Brokers have landed in ASIA</h1>
                  </div>
                  <div className="theback">
                    <img className="cardimage" src={asia} alt="" />
                    <h3>Apr 29, 2015</h3>
                    <div className="description">
                      Offshore Investment Brokers have now started operations in
                      Veitnam, we have hit the ground and we are enjoying the
                      lifestyle in Nam. We are still looking to expand into
                      other areas of Asia. If you are an expat living and
                      working in Asia please use our contact page to...
                      <br />
                      read more
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default TheNews
