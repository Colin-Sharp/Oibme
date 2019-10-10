import React from "react"

import brexit from "../images/brexit.jpg"
import Layout from "../layout/layout"

const Europe = () => (
  <Layout>
    <div className="page ">
      <h1 className="center">Ma’salama Europe?</h1>
      <h5 className="center">Jun 22, 2016 | Investment, OIB News</h5>
      <div>
        <img className="imageProfile" src={brexit} alt="" />

        <p className="text">
          Tomorrow the UK will decide on whether to leave or remain in the EU.
          It’s a huge decision and fear abounds. Votes have been fought for by
          instilling fear and will be cast by those feeling it.
        </p>

        <p className="text">
          Everywhere we look, alarming headlines, imagery and soundbites are
          screaming at us. There’s been talk of Hitler, world war 3, pleasing
          Putin, ISIS, racism, xenophobia & financial meltdowns.
        </p>

        <p className="text">
          There’s been so many figures and statistics skewed and regurgitated
          for the benefit of one side or the other that no one quite knows what
          to believe any more. Facts in this debate are hard to find, they
          shouldn’t be. But why talk facts when you can talk fear? It gets you
          noticed after all. News editors have taught politicians that. Scary
          headlines sell papers fast.
        </p>

        <p className="text">
          The Markets of course have the jitters too. They’ve been on shaky
          grounds since the Global Financial Crash so it comes as no surprise
          that Sterling has been swinging about wildly for the last few months
          reacting to fears of a Brexit. Latest polls showing that Britons are
          more likely to vote to remain has eased fears and Sterling posted its
          biggest gains last Monday with stock markets also making up lost
          ground as investors bet that the remain camp would triumph.
        </p>

        <p className="text">
          Both sides can be accused of scaremongering. Words like ‘project fear’
          and ‘project hate’ will now forever be associated with this
          referendum. A recent study has shown that during the Scottish
          referendum, 26% of voters said a fear of an economic fallout following
          a vote for independence, was what prompted them to vote stay. The fear
          of the unknown is a powerful thing. Who knows what will happen if the
          UK choose to stay or go? The only issue that both sides of this debate
          have agreed upon is that the short term economic effects of Brexit
          would be negative. Everything else is still up for debate it seems!
        </p>

        <p className="text">
          Whatever the outcome of this referendum, political parties will have
          to heal from the inside out and a lot of hard work and effort will
          have to go in to alleviating the fear that this campaign generated.
          And the sooner that starts, the better.
        </p>
      </div>
    </div>
  </Layout>
)

export default Europe
