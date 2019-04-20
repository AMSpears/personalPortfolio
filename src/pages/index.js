import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//header 
import headerImage from "../images/home_header.png"
// brands
import Samsung from "../images/logos/samsung.png"
import Verizon from "../images/logos/verizon.png"
//projects
import SFTProject from "../images/projects/SFT_Project.png"
import FRSProject from "../images/projects/FRS_Project.png"
import AboveAllSecurity from "../images/projects/above-all-security.png"
// import ProvideServices from "../images/projects/provide-services.png"
import WeatherApp from "../images/projects/weather-app.png"
import FoodSearches from "../images/projects/food-searches.png"
import TriviaGame from "../images/projects/trivia-game.png"
import ShoppingList from "../images/projects/shopping-list.png"
import HomeFinder from "../images/projects/home-finder.png"
//icons
import { FaGithub, FaCodepen, FaLinkedinIn } from 'react-icons/fa';

import "../components/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Angie Spears" keywords={[`gatsby`, `application`, `react`, `front-end software Engineer`, `software Engineer`, `nyc`]} />
    <section className = "imgPlaceholder">
      <img id= "headerImg" src= {headerImage} alt= "header"/>
    </section>
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
          <div><img id ="samsung" src= {Samsung} alt= "samsung"/></div>
          <div><img id = "verizon" src= {Verizon} alt= "verizon"/></div>
        </div>
    </section>
    <section className= 'technologies'> 
        <h1>Technologies</h1>
        <hr/>
         <div>
          <div></div>
        </div>
        <div className = "techList">
        </div>
    </section>
    <section className= 'projects'> 
        <h1>Projects</h1>
        <hr/>
        <div className = "projectsList">
          <div className = "projectItems">
            <img src= {SFTProject} alt= "Solve For Tomorrow"/>
            <p>HTML5, SASS, Javascript</p>
            <h2>Solve For Tomorrow</h2>
          </div>
          <div className = "projectItems">
            <img src= {FRSProject} alt= "First Responders"/>
            <p>HTML5, SASS, React.js</p>
            <h2>First Responders</h2>
          </div> 
          <div className = "projectItems">
            <img src= {AboveAllSecurity} alt= "Above All Security"/>
            <p>HTML5, CSS3, React.js, Node.js</p>
            <h2>Above All Security</h2>
          </div>
          <div className = "projectItems">
          <img src= "#" alt= "Provide Services"/>
            <p>HTML5, CSS3, React.js, Node.js </p>
            <h2>Provide Services</h2>
          </div>
          <div className = "projectItems">
            <img src= {WeatherApp} alt= "My Weather App"/>
            <p>HTML5, CSS3, React.js </p>
            <h2>My Weather</h2>
          </div>
          <div className = "projectItems">
            <img src= {FoodSearches} alt= "Food Searchers"/>
            <p>HTML5, CSS3, React.js, Node.js</p>
            <h2>Food Searches</h2>
          </div>
          <div className = "projectItems">
            <img src= {TriviaGame} alt= "Trivia Game"/>
            <p>THTML5, CSS3, and jQuery </p>
            <h2>Trivia Game</h2>
          </div>
          <div className = "projectItems">
            <img src= {ShoppingList} alt= "Shopping List"/>
            <p>HTML, CSS, Ruby on Rails</p>
            <h2>Shopping List</h2>
          </div>
          <div className = "projectItems">
            <img src= {HomeFinder} alt= "Home Finder"/>
            <p>HTML5, CSS3, React.js, Node.js</p>
            <h2>Home Finder</h2>
          </div>
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
