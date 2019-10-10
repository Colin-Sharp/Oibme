import React from "react"

import Link from "gatsby-link"
import Layout from "../layout/layout"

import will from "../images/profile-pic/will-brodie-pic.jpg"
import nikki from "../images/profile-pic/nikki-profile-pic-1.jpg"
import stephen from "../images/profile-pic/stephen-dempsey.jpg"
import sam from "../images/profile-pic/sam-brooks-pic.jpg"
import javier from "../images/profile-pic/javier-moreno.jpg"
import sheeney from "../images/profile-pic/sheeney.jpg"
import rachel from "../images/profile-pic/rachel-web.jpg"
import william from "../images/profile-pic/wb.jpg"
import adrian from "../images/logo-head.png"

const TheTeam = () => (
  <Layout>
    <div>
      <div className="intro teamIntro">
        <h2 className="introPicText">Meet The OIB Team</h2>
      </div>
      <div className="page center">
        <h2 className="text">
          Meet Key Members Of Our Experienced Team Who Are Committed To Helping
          You Achieve Your Financial Objectives.
        </h2>
      </div>
      <div className="staticBackground">
        <h1 className="title titleText">THE TEAM</h1>
      </div>
      <div className="page">
        <div className="grid-container">
          <div className="item1">
            <div className="ui card">
              <div className="image">
                <img src={will} alt="" />
              </div>
              <div className="content">
                <p className="header">Will Brodie</p>
                <div className="meta">Director</div>
              </div>
            </div>
          </div>

          <br />

          <div className="item2">
            <Link to="/grayson-nikki" style={{ textDecoration: "none" }}>
              <div className="ui card">
                <div className="image">
                  <img src={nikki} alt="" />
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
            <div className="ui card">
              <div className="image">
                <img src={stephen} alt="" />
              </div>
              <div className="content">
                <p className="header">Stephen Dempsey</p>
                <div className="meta">Head of Sales</div>
              </div>
            </div>
          </div>

          <br />

          <div className="item4">
            <Link to="/sam-brookes" style={{ textDecoration: "none" }}>
              <div className="ui card">
                <div className="image">
                  <img src={sam} alt="" />
                </div>
                <div className="content">
                  <p className="header">Sam Brookes</p>
                  <div className="meta">Financial Advisor</div>
                </div>
              </div>
            </Link>
          </div>

          <br />

          <div className="item5">
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

          <div className="item6">
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

          <br />

          <div className="item7">
            <div className="ui card">
              <div className="image">
                <img src={rachel} alt="" />
              </div>
              <div className="content">
                <p className="header">Rachel Nguyen</p>
                <div className="meta">Wealth Manager</div>
              </div>
            </div>
          </div>

          <br />

          <div className="item8">
            <Link to="/william-botham" style={{ textDecoration: "none" }}>
              <div className="ui card">
                <div className="image">
                  <img src={william} alt="" />
                </div>
                <div className="content">
                  <p className="header">William Botham</p>
                  <div className="meta">Senior Associate</div>
                </div>
              </div>
            </Link>
          </div>

          <br />

          <div className="item9">
            <Link to="/adrian-foster" style={{ textDecoration: "none" }}>
              <div className="ui card">
                <div className="image">
                  <img src={adrian} alt="" />
                </div>
                <div className="content">
                  <p className="header">Adrian Foster</p>
                  <div className="meta">Financial Advisor</div>
                </div>
              </div>
            </Link>
          </div>

          <br />
        </div>
      </div>
    </div>
  </Layout>
)

export default TheTeam
