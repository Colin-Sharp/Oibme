import React from "react"

import jimmy from "../images/jimmy-white.jpg"
import Layout from "../layout/layout"

const Whirlwind = () => (
  <Layout>
    <div className="page ">
      <h1 className="center">Jimmy “The Whirlwind” White 9Ball Pool Event</h1>
      <h5 className="center">Nov 23, 2016 | Uncategorized</h5>
      <div>
        <img className="imageProfile" src={jimmy} alt="" />

        <p className="text">
          OIBME’s Jimmy “The Whirlwind” White event was a great success! On June
          17th, 2016. OIBME was proud to be the main sponsor for the 9 Ball
          event that took place in Saigon, Vietnam. OIBME hosted 6 time World
          Snooker Championship finalist and winner of over 30 major
          championships, Jimmy “The Whirlwind” White. Jimmy faced off against
          Luong Chi Dung, who is the current Vietnamese 9 ball champion.
        </p>

        <p className="text">
          The event was held at the beautiful Evita Bistronomie and was sold
          out! Ticket holders had an amazing night watching championship 9Ball
          as well as receiving gifts and prizes along with an autograph session.
        </p>

        <p className="text">
          Keep up to date with the OIBME blog for upcoming events in your city.
        </p>
      </div>
    </div>
  </Layout>
)

export default Whirlwind
