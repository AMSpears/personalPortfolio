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

// function checks url and hides the active project item container link
const urlCheck = () => {
    const path = window.location.pathname
    const sftSamsungContainer = document.querySelector('#sftSamsung')
    const frsVerizonContainer = document.querySelector('#frsVerizon')
    const aboveAllSecurityContainer = document.querySelector('#aboveAllSecurity')
    const provideServicesContainer = document.querySelector('#provideServices')
    const myWeatherContainer = document.querySelector('#myWeather')
    const foodSearchesContainer = document.querySelector('#foodSearches')
    const triviaGameContainer = document.querySelector('#triviaGame')
    const shoppingListContainer = document.querySelector('#shoppingList')
    const homeFinderContainer = document.querySelector('#homeFinder')

switch (path) {
    case '/sft-samsung':
        sftSamsungContainer.style.display = 'none'
        break
    case '/frs-verizon':
        frsVerizonContainer.style.display = 'none'
        break
    case '/above-all-security':
        aboveAllSecurityContainer.style.display = 'none'
        break
    case '/provide-services':
        provideServicesContainer.style.display = 'none'
        break
    case '/my-weather':
       myWeatherContainer.style.display = 'none'
        break
    case '/food-searches':
        foodSearchesContainer.style.display = 'none'
        break
    case '/trivia-game':
        triviaGameContainer.style.display = 'none'
        break
    case '/shopping-list':
        shoppingListContainer.style.display = 'none'
    break
    case '/home-finder':
        homeFinderContainer.style.display = 'none'
        break
    default:
        break
}

}



const Projects = () => (
      <section className= 'projects'> 
        <div className = 'projectsList'>
            <div className = 'projectItems' id = 'sftSamsung'>
                <Link to = '/sft-samsung' onLoad = {urlCheck}><img src= {SFTProject} alt= 'Solve For Tomorrow'/></Link> 
                <p>HTML5, SASS, Javascript</p>
                <h2>Solve For Tomorrow</h2>
            </div>
            <div className = 'projectItems' id = 'frsVerizon'>
                <Link to = '/frs-verizon' onLoad = {urlCheck}><img src= {FRSProject} alt= 'First Responders'/></Link>
                <p>HTML5, SASS, React.js</p>
                <h2>First Responders</h2>
            </div> 
            <div className = 'projectItems' id = 'aboveAllSecurity'>
                <Link to = '/above-all-security' onLoad = {urlCheck}><img src= {AboveAllSecurity} alt= 'Above All Security'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Above All Security</h2>
            </div>
            <div className = 'projectItems' id = 'provideServices'>
                <Link to = '/provide-services' onLoad = {urlCheck}><img src= {ProvideServices} alt= 'Provide Services'/></Link>
                <p>HTML5, CSS3, React.js, Node.js </p>
                <h2>Provide Services</h2>
            </div>
            <div className = 'projectItems' id = 'myWeather'>
                <Link to = "/my-weather" onLoad = {urlCheck}><img src= {WeatherApp} alt= 'My Weather'/></Link>
                <p>HTML5, CSS3, React.js </p>
                <h2>My Weather</h2>
            </div>
            <div className = 'projectItems' id ='foodSearches'>
                <Link to = '/food-searches' onLoad = {urlCheck}><img src= {FoodSearches} alt= 'Food Searchers'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Food Searches</h2>
            </div>
            <div className = 'projectItems' id = 'triviaGame'>
                <Link to = '/trivia-game' onLoad = {urlCheck}><img src= {TriviaGame} alt= 'Trivia Game'/></Link>
                <p>THTML5, CSS3, and jQuery </p>
                <h2>Trivia Game</h2>
            </div>
            <div className = 'projectItems' id = 'shoppingList'>
                <Link to = '/shopping-list' onLoad = {urlCheck}><img src= {ShoppingList} alt= 'Shopping List'/></Link>
                <p>HTML, CSS, Ruby on Rails</p>
                <h2>Shopping List</h2>
            </div>
            <div className = 'projectItems' id = 'homeFinder'>
                <Link to = '/home-finder' onLoad = {urlCheck}><img src= {HomeFinder} alt= 'Home Finder'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Home Finder</h2>
            </div>
        </div>
    </section>

)


export default Projects