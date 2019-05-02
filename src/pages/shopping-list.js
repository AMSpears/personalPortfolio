import React from 'react'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from "../components/projects/projects"
import '../components/projectPages.scss'


const ShoppingList = () => (
    <StaticQuery query = { graphql `{
        HeaderImg: file(relativePath: {eq: "projects/shoppingList/shopping-list-1.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ProjectImgOne: file(relativePath: {eq: "projects/shoppingList/shopping-list-2.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1600 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
    <Layout>
        <SEO title='Shopping List'/>
        <section className = 'imgPlaceholder'>
            <Img fluid={data.HeaderImg.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p><strong>Shopping List</strong> is one of the first projects I worked on while at General Assembly. For this project, I collaborated with a UX/UI designer to create a fun and interactive shopping list app where the user can create personalized shopping lists. </p>
        </section>
        <section className = 'projectImg'>
            <Img fluid={data.ProjectImgOne.childImageSharp.fluid} fadeIn={false} alt= 'header'/>
        </section>
        <section className = 'about'> 
            <p>Some technologies used for this project are Ruby, Rails, HTML5, and CSS3.</p>
        </section>
        <section className = 'projectImg'>
        </section>
        <section className ='projectsLinksContainer'> 
            <div className= "links"> <a href= "https://as-shopping-list.herokuapp.com/users/sign_in" target= "blank">Website</a></div> 
            <div className= "links"><a href= "https://github.com/AMSpears/shoppinglist" target= "blank">Github</a></div>
        </section>
        <section className = "projects">
            <h1>Other projects</h1>
            <hr/>
            <Projects/>
        </section>
    </Layout>
)}/>)

export default ShoppingList