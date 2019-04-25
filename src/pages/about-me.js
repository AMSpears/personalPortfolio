import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//header 
import HeaderImg from "../images/web-full-width.png"
import BioImg from "../images/web-half-width.png"

import "../components/about.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me"/>
    <section className = "imgPlaceholder">
      <img id= "headerImg" src={HeaderImg} alt= "header"/>
    </section>
    <section className = "bio">
      <div className = "outerContainer">
        <div className="mobileHeader"><h1>Lorem ipsum dolor sit amet consectetur</h1></div>
        <div><img id= "bio" src={BioImg} alt= "bioImg"/></div>
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <h2>Technologies</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
