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
                <div className ="projectImgContainer">
                    <Link to = '/sft-samsung' onLoad = {check}>
                        <div className="imgContainer"><Img fluid={data.sftSamsung.childImageSharp.fluid} fadeIn={false} alt= 'Solve For Tomorrow'/></div>
                        <div className= "overlay">
                            <div className= "text">View</div>
                        </div>
                    </Link> 
                </div>
                <p>HTML5, SASS, Javascript</p>
                <h2>Solve For Tomorrow</h2>
            </div>
            <div className = 'projectItems' id = 'frsVerizon'>
                <div className ="projectImgContainer">
                    <Link to = '/frs-verizon' onLoad = {check}>
                        <div className="imgContainer"><Img fluid={data.frsVerizon.childImageSharp.fluid} fadeIn={false} alt= 'First Responders'/></div>
                        <div className= "overlay">
                            <div className= "text">View</div>
                        </div>
                    </Link>
                </div>
                <p>HTML5, SASS, React.js</p>
                <h2>First Responders</h2>
            </div> 
            <div className = 'projectItems' id = 'aboveAllSecurity'>
                <div className ="projectImgContainer">
                    <Link to = '/above-all-security' onLoad = {check}>
                        <div className="imgContainer"><Img fluid={data.AboveAllSecurity.childImageSharp.fluid} fadeIn={false}  alt= 'Above All Security'/></div>
                        <div className= "overlay">
                            <div className= "text">View</div>
                        </div>
                    </Link>
                </div>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Above All Security</h2>
            </div>
            <div className = 'projectItems' id = 'provideServices'>
                <div className ="projectImgContainer">
                    <Link to = '/provide-services' onLoad = {check}>
                        <div className="imgContainer"><Img fluid={data.ProvideServices.childImageSharp.fluid} fadeIn={false} alt= 'Provide Services'/></div>
                        <div className= "overlay">
                            <div className= "text">View</div>
                        </div>
                    </Link>
                </div>
                <p>HTML5, CSS3, React.js, Node.js </p>
                <h2>Provide Services</h2>
            </div>
            <div className = 'projectItems' id = 'myWeather'>
                <div className ="projectImgContainer">
                    <Link to = "/my-weather" onLoad = {check}>
                    <div className="imgContainer"><Img fluid={data.WeatherApp.childImageSharp.fluid} fadeIn={false} alt= 'My Weather'/></div>
                    <div className= "overlay">
                        <div className= "text">View</div>
                    </div>
                </Link>
                </div>
                <p>HTML5, CSS3, React.js </p>
                <h2>My Weather</h2>
            </div>
            <div className = 'projectItems' id ='foodSearches'>
                <div className ="projectImgContainer">
                    <Link to = '/food-searches' onLoad = {check}>
                        <div className="imgContainer"><Img fluid={data.FoodSearches.childImageSharp.fluid} fadeIn={false} alt= 'Food Searchers'/></div>
                        <div className= "overlay">
                            <div className= "text">View</div>
                        </div>
                    </Link>
                </div>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Food Searches</h2>
            </div>
            <div className = 'projectItems' id = 'triviaGame'>
                <div className ="projectImgContainer">
                    <Link to = '/trivia-game' onLoad = {check}>
                        <div className="imgContainer"><Img fluid={data.TriviaGame.childImageSharp.fluid} fadeIn={false} alt= 'Trivia Game'/></div>
                        <div className= "overlay">
                            <div className= "text">View</div>
                        </div>
                    </Link>
                </div>
                <p>THTML5, CSS3, and jQuery </p>
                <h2>Trivia Game</h2>
            </div>
            <div className = 'projectItems' id = 'shoppingList'>
                <div className ="projectImgContainer">
                    <Link to = '/shopping-list' onLoad = {check}>
                        <div className="imgContainer"><Img fluid={data.ShoppingList.childImageSharp.fluid} fadeIn={false} alt= 'Shopping List'/></div>
                        <div className= "overlay">
                            <div className= "text">View</div>
                        </div>
                    </Link>
                </div>
                <p>HTML, CSS, Ruby on Rails</p>
                <h2>Shopping List</h2>
            </div>
            <div className = 'projectItems' id = 'homeFinder'>
                <div className ="projectImgContainer">
                    <Link to = '/home-finder' onLoad = {check}>
                        <div className="imgContainer"> <Img fluid={data.HomeFinder.childImageSharp.fluid} fadeIn={false} alt= 'Home Finder'/></div>
                        <div className= "overlay">
                            <div className= "text">View</div>
                        </div>
                    </Link>
                </div>
                <p>HTML5, CSS3, React.js, Node.js</p>
                <h2>Home Finder</h2>
            </div>
        </div>
    </section>
)} /> )


export default Projects