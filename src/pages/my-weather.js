import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"

const MyWeather = () => (
    <StaticQuery query = { graphql `{
        HeaderImg: file(relativePath: {eq: "web-full-width.png"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
    <Layout>
        <SEO title='My Weather'/>
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>My Weather is a personal project of mine that I designed and developed to recreate a personalized weather app that queries real-time weather information from the open weather map API.</p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className = 'about'> 
            <p>Some technologies used to create this project are React.js, HTML5, and CSS3.</p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className = 'about'> 
            <div className = 'linksContainer'>
                <div className= "links"> <a href= "http://my-weather-personalized.surge.sh/" target= "blank">Website</a></div> 
                <div className= "links"><a href= "https://github.com/AMSpears/weatherapp" target= "blank">Github</a></div>
            </div>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)

export default MyWeather