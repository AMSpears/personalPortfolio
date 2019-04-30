import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"
import '../components/projectPages.scss'


const TriviaGame = () => (
    <StaticQuery query = { graphql `{
        HeaderImg: file(relativePath: {eq: "projects/triviaGame/state-capital-1.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        } 
        TriviaImg1: file(relativePath: {eq: "projects/triviaGame/state-capital-2.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

    }
`} render={(data) => (
    <Layout>
        <SEO title='Trivia Game'/>
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>State Capitals is a trivia game I created while at  General Assembly. For this project,  I create a fun and interactive quiz that allows the user to test their knowledge of the state capitals within 60 seconds. </p>
        </section>
        <section className = 'projectImg'>
            <Img fluid={data.TriviaImg1.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>Some technologies used to create this project are JQuery, HTML5, and CSS3. </p>
        </section>
        <section className = 'linksContainer'> 
            <div className= "links"> <a href= "https://amspears.github.io/TriviaGame/" target= "blank">Website</a></div> 
            <div className= "links"><a href= "https://github.com/AMSpears/TriviaGame/" target= "blank">Github</a></div>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)


export default TriviaGame