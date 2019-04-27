import React from 'react'
import { Link, graphql , StaticQuery } from 'gatsby'
import 'gatsby-plugin-sass'
import Img from 'gatsby-image'

import './projects.scss'

// projects nav function
import check from './projectsFunc'


const Projects = () => (
    <StaticQuery query = { graphql `{
        sftSamsung: file(relativePath: {eq: "projects/SFT_Project.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 380 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        frsVerizon: file(relativePath: {eq: "projects/FRS_Project.jpg"}) {
            childImageSharp {
                fluid( maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        AboveAllSecurity: file(relativePath: {eq: "projects/above-all-security.jpg"}) {
            childImageSharp {
                fluid( maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ProvideServices: file(relativePath: {eq: "projects/provide-services.jpg"}) {
            childImageSharp {
                fluid( maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        WeatherApp: file(relativePath: {eq: "projects/weather-app.jpg"}) {
            childImageSharp {
                fluid( maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        FoodSearches: file(relativePath: {eq: "projects/food-searches.jpg"}) {
            childImageSharp {
                fluid( maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        TriviaGame: file(relativePath: {eq: "projects/trivia-game.jpg"}) {
            childImageSharp {
                fluid( maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ShoppingList: file(relativePath: {eq: "projects/shopping-list.jpg"}) {
            childImageSharp {
                fluid( maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        HomeFinder: file(relativePath: {eq: "projects/home-finder.jpg"}) {
            childImageSharp {
                fluid( maxWidth: 380) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
    <section className= 'projects'> 
        <div className = 'projectsList'>
            <div className = 'projectItems' id = 'sftSamsung'>
                <Link to = '/sft-samsung' onLoad = {check}><Img fluid={data.sftSamsung.childImageSharp.fluid} fadeIn={false} alt= 'Solve For Tomorrow'/></Link> 
                <p>HTML5, SASS, Javascript</p>
                <h2>Solve For Tomorrow</h2>
            </div>
            <div className = 'projectItems' id = 'frsVerizon'>
                <Link to = '/frs-verizon' onLoad = {check}><Img fluid={data.frsVerizon.childImageSharp.fluid} fadeIn={false} alt= 'First Responders'/></Link>
                <p>HTML5, SASS, React.js</p>
                <h2>First Responders</h2>
            </div> 
            <div className = 'projectItems' id = 'aboveAllSecurity'>
                <Link to = '/above-all-security' onLoad = {check}><Img fluid={data.AboveAllSecurity.childImageSharp.fluid} fadeIn={false}  alt= 'Above All Security'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Above All Security</h2>
            </div>
            <div className = 'projectItems' id = 'provideServices'>
                <Link to = '/provide-services' onLoad = {check}><Img fluid={data.ProvideServices.childImageSharp.fluid} fadeIn={false} alt= 'Provide Services'/></Link>
                <p>HTML5, CSS3, React.js, Node.js </p>
                <h2>Provide Services</h2>
            </div>
            <div className = 'projectItems' id = 'myWeather'>
                <Link to = "/my-weather" onLoad = {check}><Img fluid={data.WeatherApp.childImageSharp.fluid} fadeIn={false} alt= 'My Weather'/></Link>
                <p>HTML5, CSS3, React.js </p>
                <h2>My Weather</h2>
            </div>
            <div className = 'projectItems' id ='foodSearches'>
                <Link to = '/food-searches' onLoad = {check}><Img fluid={data.FoodSearches.childImageSharp.fluid} fadeIn={false} alt= 'Food Searchers'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Food Searches</h2>
            </div>
            <div className = 'projectItems' id = 'triviaGame'>
                <Link to = '/trivia-game' onLoad = {check}><Img fluid={data.TriviaGame.childImageSharp.fluid} fadeIn={false} alt= 'Trivia Game'/></Link>
                <p>THTML5, CSS3, and jQuery </p>
                <h2>Trivia Game</h2>
            </div>
            <div className = 'projectItems' id = 'shoppingList'>
                <Link to = '/shopping-list' onLoad = {check}><Img fluid={data.ShoppingList.childImageSharp.fluid} fadeIn={false} alt= 'Shopping List'/></Link>
                <p>HTML, CSS, Ruby on Rails</p>
                <h2>Shopping List</h2>
            </div>
            <div className = 'projectItems' id = 'homeFinder'>
                <Link to = '/home-finder' onLoad = {check}><Img fluid={data.HomeFinder.childImageSharp.fluid} fadeIn={false} alt= 'Home Finder'/></Link>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Home Finder</h2>
            </div>
        </div>
    </section>
)} /> )


export default Projects