import React from "react"

import saving from "../images/age_saving.jpg"
import costs from "../images/cost_us.jpg"
import Layout from "../layout/layout"

const Planning = () => (
  <Layout>
    <div>
      <div className="intro retirementPlane">
        <h2 className="introPicText">How Good is Your Retirement Plan?</h2>
      </div>

      <div className="page">
        <h3 className="text center">
          Giving You Confidence That You Will Achieve The Retirement You Want
        </h3>
      </div>

      <div className="staticBackground">
        <h2 className="title titleText">RETIREMENT PLANNING</h2>
      </div>
      <div className="page">
        <p className="text">
          You know that the earlier you start planning and saving for
          retirement, the better chance you stand of living the lifestyle we
          want.
          <br />
          <br />
          Living and working abroad you may be finding it difficult to set up
          suitable plans. For Instance, you may not be comfortable with local
          arrangements. Perhaps you’ve discovered that you can’t actually pay
          into a pension in your home country, or that you’re unable to get tax
          relief on your contributions while working abroad.
          <br />
          <br />
          These may all seem like good reasons to defer thoughts of a retirement
          but remember, every moment you delay is costing you valuable income in
          retirement.
          <br />
          <br />
          In order to help you meet these costs, OIB and our network of
          professional independent financial advisors are able to offer truly
          flexible online retirement investment accounts that will enable you to
          achieve your retirement goals.
        </p>

        <i className="stopwatch icon"></i>

        <h4 className="text">Delay Is Your Enemy</h4>
        <p className="text">
          Your retirement may seem an age away, but it can sneak up on you
          before you know it. The surprise could be more of a shock when you
          realise retirement day isn’t the end of the story. Not only will
          living costs have risen hugely – they’re going to keep rising for the
          30 or so years you’re retired.
          <br />
          <br />
          If you haven’t prepared for your retirement, you’re not alone.
          <br />
          <br />
          Skandia International recently surveyed over 440 financial advisers
          around the world. Two thirds of them believe their clients can afford
          to save for retirement but aren’t doing so. Their clients’ reasons for
          not investing included confusion over how much they need to save and
          high expectations for the level of their state pension. If that sounds
          familiar, you could well become one of the millions of people working
          beyond their desired retirement age.
        </p>

        <i className="lightbulb outline icon"></i>

        <h4 className="text">Assuring A Bright Future</h4>
        <p className="text">
          The sooner you identify the sort of retirement you want, the better
          off you’ll be. Work out the things that are important to you and how
          much they will cost in the future (well beyond your retirement day).
          Then create an investment plan that will help you support that
          lifestyle for decades to come.
        </p>

        <i className="stopwatch icon"></i>

        <h4 className="text">The Impact of Delay</h4>
        <p className="text">
          The negative impact of putting off investing in your retirement fund
          is significant. If you begin investing £100 in your early thirties and
          you aim to retire at sixty your retirement pot may be worth up to
          £120,000. If you delay the start of your investing by just five years
          your pot will only be worth up to £70,000.
        </p>

        <img className="chart" src={saving} alt="" />

        <i className="thumbs up outline icon"></i>

        <h4 className="text">Good Advice</h4>
        <ul className="text key-features">
          <li>
            Be clear about your retirement objectives. We will help you do this.
          </li>
          <li>Be aware that you may need retirement income for 30-40 years.</li>
          <li>
            Prices will not stop rising. It’s important to look at where costs
            will be <br />
            when you want to retire.
          </li>
          <li>
            Consider how much risk you want to take with your investments.
          </li>
          <li>Don’t delay your retirement planning.</li>
        </ul>

        <i className="stopwatch icon"></i>

        <h4 className="text">Future Cost Of Retirement</h4>
        <p className="text">
          Below you’ll see a simple graph showing the projected monthly costs of
          utilities. As an example, we’re comparing the cost of two people
          living in an 85m2 apartment in London, New York, Sydney and Bangkok.
          We have only taken it as far as 2037, but you could easily live longer
          than this. And you’ll always need energy and water.
        </p>

        <img className="chart" src={costs} alt="" />

        <i className="user icon"></i>

        <h4 className="text">Talk To An OIB Advisor</h4>
        <p className="text">
          Speak to one of our financial advisors about your retirement goals and
          start putting in place a plan that ensures you get the retirement you
          want. Whatever you do, don’t put this off. Delaying your retirement
          planning by just one year can have dramatic effect on the final amount
          available.
        </p>

        <i className="calculator icon"></i>

        <h4 className="text">Work Out What You Need</h4>
        <p className="text">
          Use the following calculator to get an idea of how much you need to be
          allocating to your retirement needs. Be honest with the numbers.
        </p>
      </div>
    </div>
  </Layout>
)

export default Planning
