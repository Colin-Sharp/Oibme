import React from "react"

import notes from "../images/structured_notes.jpg"
import Layout from "../layout/layout"

const Notes = () => (
  <Layout>
    <div className="page">
      <h1 className="center">Structured Notes</h1>
      <h5 className="center">Apr 16, 2016 | Investment</h5>
      <div>
        <img className="imageProfile" src={notes} alt="" />

        <p className="text">
          MAZE Capital Solutions are a company that OIBME utilize in order to
          offer Structured Notes to our Clients.
        </p>

        <p className="text">
          Structured Notes differ from the normal fund options that you may be
          familiar with in a number of key areas.
        </p>

        <ul className="text key-features">
          <li>There is a time period on the Note – normally 2 – 5 years</li>
          <li>
            The Note offers a fixed coupon ( annual return). This may be
            guaranteed or dependant on performance of underlying assets –
            depends on type of structure selected
          </li>
          <li>
            The assets on which the note is based are explicitly mentioned –
            will be between 3 and 5 dependant on type of Note
          </li>
          <li>
            All Notes from MAZE offer a Protection Barrier that offers security
            of return of capital
          </li>
        </ul>

        <p className="text">
          For more information on these and other useful features please contact
          your OIBME Advisor.
        </p>

        <p className="text">
          Core offerings are the very popular Warren Buffett Series – which is
          the most successful Structured Note Series available to offshore
          investors. This is currently in its 22nd Series. The strategy here is
          to follow the most successful investor the world has ever seen and
          track which stocks he is placing new money in to, and to create a risk
          managed product around these selections.
        </p>

        <p className="text">
          MAZE also endeavour to always offer an income product, where income
          will be paid 3 monthly or 6 monthly on a regular basis for a fixed
          period of time – ideal for those looking for a steady stream such as
          pension monies.
        </p>
      </div>
    </div>
  </Layout>
)

export default Notes
