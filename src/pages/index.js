import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Samsung from "../images/sg_logo.png"
import Verizon from "../images/vzlogo_lg.png"
import SFTProject from "../images/projects/SFT_Project.jpg"
import FRSProject from "../images/projects/FRS_Project.jpg"
import AboveAllSecurity from "../images/projects/above-all-security.jpg"
import ProvideServices from "../images/projects/provide-services.jpg"
import WeatherApp from "../images/projects/weather-app.jpg"
import FoodSearches from "../images/projects/food-searches.jpg"
import TriviaGame from "../images/projects/trivia-game.jpg"
import ShoppingList from "../images/projects/shopping-list.jpg"
import HomeFinder from "../images/projects/home-finder.jpg"



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
          <img id ="samsung" src= {Samsung} alt= "samsung"/>
          <img id = "verizon" src= {Verizon} alt= "verizon"/>
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
          <div className = "projectItems"><img src= {SFTProject} alt= "Solve For Tomorrow"/></div>
          <div className = "projectItems"><img src= {FRSProject} alt= "First Responders"/></div> 
          <div className = "projectItems"><img src= {AboveAllSecurity} alt= "Above All Security"/></div>
          <div className = "projectItems"><img src= {ProvideServices} alt= "Provide Services"/></div>
          <div className = "projectItems"><img src= {WeatherApp} alt= "My Weather App"/></div>
          <div className = "projectItems"><img src= {FoodSearches} alt= "Food Searchers"/></div>
          <div className = "projectItems"><img src= {TriviaGame} alt= "Trivia Game"/></div>
          <div className = "projectItems"><img src= {ShoppingList} alt= "Shopping List"/></div>
          <div className = "projectItems"><img src= {HomeFinder} alt= "Home Finder"/></div>
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
