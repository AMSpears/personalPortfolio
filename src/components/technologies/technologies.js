import React from 'react'
import 'gatsby-plugin-sass'
import { graphql , StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import './technologies.scss'

const Technologies= () => (
    <StaticQuery query = { graphql `{
        JavaScript: file(relativePath: {eq: "logos/javascript.png"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        MongoDB: file(relativePath: {eq: "logos/mongodb.png"}) {
            childImageSharp {
                fluid(maxWidth: 200 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        Api: file(relativePath: {eq: "logos/apiLogo.png"}) {
            childImageSharp {
                fluid(maxWidth: 200 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        HtmlCss: file(relativePath: {eq: "logos/logo_html-css.png"}) {
            childImageSharp {
                fluid(maxWidth: 200 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        Reactjs: file(relativePath: {eq: "logos/logo_react.png"}) {
            childImageSharp {
                fluid(maxWidth: 200 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        Express: file(relativePath: {eq: "logos/express-js.png"}) {
            childImageSharp {
                fluid(maxWidth: 200 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        Sass: file(relativePath: {eq: "logos/logo_sass.png"}) {
            childImageSharp {
                fluid(maxWidth: 200 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        Node: file(relativePath: {eq: "logos/node-logo.png"}) {
            childImageSharp {
                fluid(maxWidth: 200 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        Ruby: file(relativePath: {eq: "logos/logo_ruby.png"}) {
            childImageSharp {
                fluid(maxWidth: 200 ) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`} render={(data) => (
      <section className= 'technologies'> 
        <h1>Technologies</h1>
        <hr/>
        <div className = 'techList'>
            <div className= 'techItem'><Img fluid={data.JavaScript.childImageSharp.fluid} fadeIn={false} alt= 'JavaScript'/></div>
            <div className= 'techItem'><Img fluid={data.Api.childImageSharp.fluid} fadeIn={false} alt= 'RestFulAPIs'/></div>
            <div className= 'techItem'><Img fluid={data.Reactjs.childImageSharp.fluid} fadeIn={false} alt= 'ReactJS'/></div>
            <div className= 'techItem'><Img fluid={data.Node.childImageSharp.fluid} fadeIn={false} alt= 'NodeJS'/></div>
            <div className= 'techItem'><Img fluid={data.Express.childImageSharp.fluid} fadeIn={false} alt= 'ExpressJS'/></div>
            <div className= 'techItem'><Img fluid={data.MongoDB.childImageSharp.fluid} fadeIn={false} alt= 'MongoDB'/></div>
            <div className= 'techItem'><Img fluid={data.Ruby.childImageSharp.fluid} fadeIn={false} alt= 'Ruby'/></div>
            <div className= 'techItem'><Img fluid={data.HtmlCss.childImageSharp.fluid} fadeIn={false} alt= 'HtmlCss'/></div>
            <div className= 'techItem'><Img fluid={data.Sass.childImageSharp.fluid} fadeIn={false} alt= 'Sass'/></div>
        </div>
    </section>
)}/>)



export default Technologies