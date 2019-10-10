import React from "react"

import saving from "../images/age_saving.jpg"
import costs from "../images/cost_us.jpg"
import Layout from "../layout/layout"

const PentionQrops = () => (
  <Layout>
    <div>
      <div className="intro qrops">
        <h2 className="introPicText">
          Retirement Plan? Check out the OIBME QROPS
        </h2>
      </div>
      <div className="page">
        <h3 className="text center">What Is A QROPS?</h3>
      </div>
      <div className="staticBackground">
        <h2 className="title titleText">RETIREMENT PLANNING QROPS</h2>
      </div>
      <div className="page">
        <p className="text">
          A QROPS is an overseas retirement scheme, recognised by HMRC (HM
          Revenue and Customs) as meeting standards and conditions equivalent to
          a UK pension. This recognition allows anyone with a UK registered
          pension who is living outside the UK, or is intending to leave the UK,
          to transfer his or her pension overseas.
        </p>

        <p className="text">
          A QROPS remains under UK pension rules up to the point you have been
          non-UK tax resident for at least 5 full complete and consecutive UK
          tax years. After this a QROPS gains increased flexibility.
        </p>
        <br />
        <h5 className="text">The key benefits of a QROPS are:</h5>
        <ul className="text key-features">
          <li>Tax Efficiency</li>
          <li>Single versus Multiple Pensions</li>
          <li>Investment Choices</li>
          <li>Investment Flexibility</li>
          <li>No Inheritance Tax</li>
          <li>Simplified Estate Planning</li>
        </ul>
        <p className="text">
          Many types of UK pensions can be transferred to a QROPS, but not all.
          We can tell you if your existing pension plan(s) can be transferred
          and most importantly if your circumstances allow you to transfer.
        </p>
        <div className="bulletPage">
          <i className="file alternate icon "></i>
          <h5 className="text">Delay Is Your Enemy</h5>
          <p className="text">
            Your retirement may seem an age away, but it can sneak up on you
            before you know it. The surprise could be more of a shock when you
            realise retirement day isn’t the end of the story. Not only will
            living costs have risen hugely – they’re going to keep rising for
            the 30 or so years you’re retired.
            <br />
            <br />
            If you haven’t prepared for your retirement, you’re not alone.
            <br />
            <br />
            Skandia International recently surveyed over 440 financial advisers
            around the world. Two thirds of them believe their clients can
            afford to save for retirement but aren’t doing so. Their clients’
            reasons for not investing included confusion over how much they need
            to save and high expectations for the level of their state pension.
            If that sounds familiar, you could well become one of the millions
            of people working beyond their desired retirement age.
          </p>
          <i className="lightbulb outline icon"></i>
          <h5 className="text">Assuring A Bright Future</h5>
          <p className="text">
            The sooner you identify the sort of retirement you want, the better
            off you’ll be. Work out the things that are important to you and how
            much they will cost in the future (well beyond your retirement day).
            Then create an investment plan that will help you support that
            lifestyle for decades to come.
          </p>
          <i className="stopwatch icon"></i>
          <h5 className="text">The Impact of Delay</h5>
          <p className="text">
            The negative impact of putting off investing in your retirement fund
            is significant. If you begin investing £100 in your early thirties
            and you aim to retire at sixty your retirement pot may be worth up
            to £120,000. If you delay the start of your investing by just five
            years your pot will only be worth up to £70,000.
          </p>
          <div>
            <img className="chart" src={saving} alt="chart with savings" />
          </div>
          <i className="thumbs up outline icon"></i>
          <h5 className="text">Good Advice</h5>
          <ul className="text key-features">
            <li>
              Be clear about your retirement objectives. We will help you do
              this.
            </li>
            <li>
              Be aware that you may need retirement income for 30-40 years.
            </li>
            <li>
              Prices will not stop rising. It’s important to look at where costs
              will be.
            </li>
            <li>when you want to retire.</li>
            <li>
              Consider how much risk you want to take with your investments.
            </li>
            <li>Don’t delay your retirement planning.</li>
          </ul>

          <i className="stopwatch icon"></i>

          <h5 className="text">The Impact of Delay</h5>
          <p className="text">
            The negative impact of putting off investing in your retirement fund
            is significant. If you begin investing £100 in your early thirties
            and you aim to retire at sixty your retirement pot may be worth up
            to £120,000. If you delay the start of your investing by just five
            years your pot will only be worth up to £70,000.
          </p>

          <div>
            <img className="chart" src={costs} alt="" />
          </div>

          <i className="user icon"></i>

          <h5 className="text">Talk To An OIB Advisor</h5>
          <p className="text">
            Speak to one of our financial advisors about your retirement goals
            and start putting in place a plan that ensures you get the
            retirement you want. Whatever you do, don’t put this off. Delaying
            your retirement planning by just one year can have dramatic effect
            on the final amount available.
          </p>

          <i className="calculator icon"></i>

          <h5 className="text">Work Out What You Need</h5>
          <p className="text">
            Use the following calculator to get an idea of how much you need to
            be allocating to your retirement needs. Be honest with the numbers.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default PentionQrops
