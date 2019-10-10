import React from "react"

import fed from "../images/fed.jpg"
import Layout from "../layout/layout"

const RederalReserve = () => (
  <Layout>
    <div className="page">
      <h1 className="center">
        Federal Reserve Expects US Economy to Strengthen
      </h1>
      <h5 className="center">May 26, 2015 | OIB News</h5>

      <img className="imageProfile" src={fed} alt="" />

      <p className="text">
        The US economy is very likely to strengthen, following first quarter
        setback that was heavily influenced by fleeting factors such as bad
        weather, which leaves the Federal Reserve primed for a first rate rise
        this year. The US is ‘well positioned’ for continued growth, even if
        this was likely to be moderate, because of factors such as slow
        improvement in the housing market, modest business investment and
        persistent weakness in the energy sector.
      </p>

      <p className="text">
        The Fed chair announced: “If the economy continues to improve as I
        expect, I think it will be appropriate at some point this year to take
        the initial step to raise the federal funds rate target and begin the
        process of normalising monetary policy.”
      </p>

      <p className="text">
        The Markets of course have the jitters too. They’ve been on shaky
        grounds since the Global Financial Crash so it comes as no surprise that
        Sterling has been swinging about wildly for the last few months reacting
        to fears of a Brexit. Latest polls showing that Britons are more likely
        to vote to remain has eased fears and Sterling posted its biggest gains
        last Monday with stock markets also making up lost ground as investors
        bet that the remain camp would triumph.
      </p>

      <p className="text">
        The Fed pointed to positive signs in the labour market, including an
        impressive rise in the number of job openings and evidence of wage
        increases by large retailers such as Walmart and Target that could point
        to quicker wage gains. Taking into account savings on oil prices, on top
        of job gains, households’ real disposable income had risen almost 4%
        nationally over the past four quarters. In essence, the fall in the oil
        price was on balance a plus for consumers. However this does not mean
        that the US was on course for stellar growth over the remainder of 2015
        or beyond.
      </p>

      <p className="text">
        Janet Yellen said most projections from the Federal Open Market
        Committee members were for growth of around 2.5% for the next couple of
        years, with unemployment set to drop to 5% by the end of the year.
        Inflation would move towards the Fed’s 2% objective as the economy
        strengthened.
      </p>

      <p className="text">
        One longer-term worry, however, is weak productivity data and it is
        therefore important for the US to pursue measures to boost productivity:
      </p>

      <p className="text">
        “Policies to strengthen education, to encourage entrepreneurship and
        innovation, and to promote capital investment, both public and private,
        can all be of great benefit.”
      </p>
    </div>
  </Layout>
)

export default RederalReserve
