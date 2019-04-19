import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Samsung from "../images/samsungLogo.png"
import Verizon from "../images/verizonLogo.png"
import {
  FaGithub, FaCodepen, FaLinkedinIn
} from 'react-icons/fa';

import "../components/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Angie Spears" keywords={[`gatsby`, `application`, `react`, `front-end software Engineer`, `software Engineer`, `nyc`]} />
    <a id="home">
      <section className = "imgPlaceholder"></section>
    </a>
    <a id="aboutMe">
      <section className = 'intro'> 
        <h1>About Me</h1>
        <hr/>
        <p>Hi, I'm <strong>Angie Spears</strong>, a <strong>Front End Software Engineer</strong>. I am an ambitious, self-motivated and solutions-driven individual. I recognize needs, perfect the details and use strategic thinking to achieve goals</p>
      </section>
    </a>
    <section className= 'brands'> 
        <h1>Brands I've worked with</h1>
        <hr/>
        <div className = "brandLogos">
          <img src= {Samsung} alt= "samsung" style = {{width: `233px`, height:`93px`}}/>
          <img src= {Verizon} alt= "verizon" style = {{width: `231px`, height:`72px`}} />
        </div>
    </section>
    <section className= 'technologies'> 
        <h1>Technologies</h1>
        <hr/>
        <div className = "techList">
        </div>
    </section>
    <section className= 'projects'> 
        <h1>Projects</h1>
        <hr/>
        <div className = "projectsList">
        </div>
    </section>
    <footer>
        <div className ="footerDetails">
          <div className = "social">
            <h1>Social</h1>
            <div class ="icons">
              <div><a href= "https://github.com/amspears" target = "blank"><FaGithub/></a></div>
              <div><a href= "https://codepen.io/AMSpears/" target = "blank"><FaCodepen/></a></div>
              <div><a href= "https://www.linkedin.com/in/angiespears/" target = "blank"><FaLinkedinIn/></a></div>
            </div>
          </div>

          <div className = "contact">
            <h1>Contact</h1>
            <p>hello@angiespears.com</p>
            <p>571-659-8072</p>
          </div>

          <div className = "location">
              <h1>Proudly based in NYC.</h1>
          </div>
        </div>
    </footer>
  </Layout>
)


export default IndexPage
