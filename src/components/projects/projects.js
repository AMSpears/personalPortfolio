import React from 'react'
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
        <h1>Projects</h1>
        <hr/>
        <div className = 'projectsList'>
            <div className = 'projectItems'>
                <img src= {SFTProject} alt= 'Solve For Tomorrow'/>
                <p>HTML5, SASS, Javascript</p>
                <h2>Solve For Tomorrow</h2>
            </div>
            <div className = 'projectItems'>
                <img src= {FRSProject} alt= 'First Responders'/>
                <p>HTML5, SASS, React.js</p>
                <h2>First Responders</h2>
            </div> 
            <div className = 'projectItems'>
                <img src= {AboveAllSecurity} alt= 'Above All Security'/>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Above All Security</h2>
            </div>
            <div className = 'projectItems'>
                <img src= {ProvideServices} alt= 'Provide Services'/>
                <p>HTML5, CSS3, React.js, Node.js </p>
                <h2>Provide Services</h2>
            </div>
            <div className = 'projectItems'>
                <img src= {WeatherApp} alt= 'My Weather App'/>
                <p>HTML5, CSS3, React.js </p>
                <h2>My Weather</h2>
            </div>
            <div className = 'projectItems'>
                <img src= {FoodSearches} alt= 'Food Searchers'/>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Food Searches</h2>
            </div>
            <div className = 'projectItems'>
                <img src= {TriviaGame} alt= 'Trivia Game'/>
                <p>THTML5, CSS3, and jQuery </p>
                <h2>Trivia Game</h2>
            </div>
            <div className = 'projectItems'>
                <img src= {ShoppingList} alt= 'Shopping List'/>
                <p>HTML, CSS, Ruby on Rails</p>
                <h2>Shopping List</h2>
            </div>
            <div className = 'projectItems'>
                <img src= {HomeFinder} alt= 'Home Finder'/>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Home Finder</h2>
            </div>
        </div>
    </section>

)


export default Projects