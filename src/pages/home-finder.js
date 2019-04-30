import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"
import '../components/projectPages.scss'


const HomeFinder = () => (
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
        <SEO title='Home Finder'/>
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p><strong>Home Finder</strong> is a project I worked on while at General Assembly. For this project, I collaborated with other engineers to create a fun and interactive app where the user can search for and add listings. We developed this project with the intent of gaining a deeper understanding of building full stack applications. </p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className = 'about'> 
            <p>Some technologies used for this project are React.js, Node.js, Express.js, HTML5, and CSS3. </p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className = 'linksContainer'> 
            <div className= "links"> <a href= "http://home-finder.surge.sh/homes" target= "blank">Website</a></div> 
            <div className= "links"><a href= "https://github.com/AMSpears/home-app-frontend" target= "blank">Github</a></div>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)

export default HomeFinder