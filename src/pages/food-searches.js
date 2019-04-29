import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"


const FoodSearches = () => (
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
        <SEO title='Food Searches'/>
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p><strong> Food Search</strong> is a project I created while at General Assembly. For this project, I collaborated with a UX/UI designer to create a fun and interactive app where the user can search for restaurants based on the location or type of food they like similarly to yelp. </p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className = 'about'> 
            <p>Some technologies used to create this project are React.js, Node.js, Express.js, HTML5, and CSS3. The information for the restaurants was obtained using the Yelp API. </p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className = 'about'> 
            <div className = 'linksContainer'>
                <div className= "links"> <a href= "http://food-searches.surge.sh/" target= "blank">Website</a></div> 
                <div className= "links"><a href= "https://github.com/AMSpears/FoodSearch-Frontend" target= "blank">Github</a></div>
            </div>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
            </section>
        </Layout>
    )}/>
)

export default FoodSearches