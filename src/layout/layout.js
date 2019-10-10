import React from "react"
import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"
import "../layout/layout.css"

const Layout = props => {
  return (
    <div>
      <div className="main">
        <Head />
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
