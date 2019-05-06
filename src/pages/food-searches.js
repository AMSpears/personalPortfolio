import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"
import '../components/projectPages.scss'



const FoodSearches = () => (
    <StaticQuery query = { graphql `{
        HeaderImg: file(relativePath: {eq: "projects/foodSearch/food-search-1.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ProjectImgOne: file(relativePath: {eq: "projects/foodSearch/food-search-2.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
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
            <Img fluid={data.ProjectImgOne.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>Some technologies used to create this project are React.js, Node.js, Express.js, HTML5, and CSS3. The information for the restaurants was obtained using the Yelp API. </p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className = 'projectsLinksContainer'> 
            <div className= "links"> <a href= "http://food-searches.surge.sh/" target= "blank">Website</a></div> 
            <div className= "links"><a href= "https://github.com/AMSpears/FoodSearch-Frontend" target= "blank">Github</a></div>
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