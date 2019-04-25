import React from 'react'
import { Link } from 'gatsby'
import 'gatsby-plugin-sass'

//projects
import SFTProject from '../../images/projects/SFT_Project.png'
import FRSProject from '../../images/projects/FRS_Project.png'
import AboveAllSecurity from '../../images/projects/above-all-security.png'
import ProvideServices from '../../images/projects/provide-services.png'
import WeatherApp from '../../images/projects/weather-app.png'
import FoodSearches from '../../images/projects/food-searches.png'
import TriviaGame from '../../images/projects/trivia-game.png'
import ShoppingList from '../../images/projects/shopping-list.png'
import HomeFinder from '../../images/projects/home-finder.png'

import './projects.scss'

const Projects = () => (
      <section className= 'projects'> 
        <div className = 'projectsList'>
            <div className = 'projectItems'>
                <Link to = "/sft-samsung"><img src= {SFTProject} alt= 'Solve For Tomorrow'/></Link>
                <p>HTML5, SASS, Javascript</p>
                <h2>Solve For Tomorrow</h2>
            </div>
            <div className = 'projectItems'>
                <Link to = "/frs-verizon"><img src= {FRSProject} alt= 'First Responders'/></Link>
                <p>HTML5, SASS, React.js</p>
                <h2>First Responders</h2>
            </div> 
            <div className = 'projectItems'>
                <Link to = "/above-all-security"><img src= {AboveAllSecurity} alt= 'Above All Security'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Above All Security</h2>
            </div>
            <div className = 'projectItems'>
                <Link to = "/provide-services"><img src= {ProvideServices} alt= 'Provide Services'/></Link>
                <p>HTML5, CSS3, React.js, Node.js </p>
                <h2>Provide Services</h2>
            </div>
            <div className = 'projectItems'>
                <Link to = "/my-weather"><img src= {WeatherApp} alt= 'My Weather App'/></Link>
                <p>HTML5, CSS3, React.js </p>
                <h2>My Weather</h2>
            </div>
            <div className = 'projectItems'>
                <Link to = "/food-searches"><img src= {FoodSearches} alt= 'Food Searchers'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Food Searches</h2>
            </div>
            <div className = 'projectItems'>
                <Link to = "/trivia-game"><img src= {TriviaGame} alt= 'Trivia Game'/></Link>
                <p>THTML5, CSS3, and jQuery </p>
                <h2>Trivia Game</h2>
            </div>
            <div className = 'projectItems'>
                <Link to = "/shopping-list"><img src= {ShoppingList} alt= 'Shopping List'/></Link>
                <p>HTML, CSS, Ruby on Rails</p>
                <h2>Shopping List</h2>
            </div>
            <div className = 'projectItems'>
                <Link to = "/home-finder"><img src= {HomeFinder} alt= 'Home Finder'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Home Finder</h2>
            </div>
        </div>
    </section>

)


export default Projects