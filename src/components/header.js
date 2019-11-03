import React from "react"
import Link from "gatsby-link"
import logo from "../images/Logo/Logo-V2-small.png"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sideDrawerOpen: true,
    }
  }
  handleToggle() {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen })
  }
  render() {
    const { sideDrawerOpen } = this.state
    if (
      "querySelector" in document &&
      "localStorage" in window &&
      "addEventListener" in window
    ) {
      // bootstrap the javascript application
    }
    return (
      <div className="toolbar">
        <div
          id="backdrop"
          className={`${sideDrawerOpen ? "" : "open"}`}
          onClick={e => this.handleToggle()}
        />

        <nav className="toolbar_nav">
          <Link to="/">
            <img src={logo} alt="logo" className="toolbar_logo" />
          </Link>
          <div className="spacer" />
          <div className="toolbar_nav_items">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/about-us">
                <li>About Us</li>
              </Link>
              <Link to="/news">
                <li>News</li>
              </Link>
              <Link to="/contact-us">
                <li>Contact Us</li>
              </Link>
              <Link to="/careers">
                <li>Careers</li>
              </Link>
              <Link to="/team">
                <li>The Team</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div
          id="toggleBtn"
          className="toolbar_toggle-button"
          onClick={e => this.handleToggle()}
        >
          <i className="toggle-button th list icon"></i>
        </div>
        <div>
          <nav className={`${sideDrawerOpen ? "" : "open"}`} id="side-drawer">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/about-us">
                <li>About Us</li>
              </Link>
              <Link to="/news">
                <li>News</li>
              </Link>
              <Link to="/contact-us">
                <li>Contact Us</li>
              </Link>
              <Link to="/careers">
                <li>Careers</li>
              </Link>
              <Link to="/team">
                <li>The Team</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
