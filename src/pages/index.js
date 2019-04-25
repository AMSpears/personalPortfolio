import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
//header 
import headerImage from '../images/home_header.png'
// brands
import Samsung from '../images/logos/samsung.png'
import Verizon from '../images/logos/verizon.png'
// logos 
import JavaScript from '../images/logos/javascript.png'
import MongoDB from '../images/logos/mongodb.png'
import Api from '../images/logos/apiLogo.png'
import HtmlCss from '../images/logos/logo_html-css.png'
import Reactjs from '../images/logos/logo_react.png'
import Express from '../images/logos/express-js.png'
import Ruby from '../images/logos/logo_ruby.png'
import Sass from '../images/logos/logo_sass.png'
import Node from '../images/logos/node-logo.png'

import '../components/index.scss'
//projects
import Projects from "../components/projects/projects"

const IndexPage = () => (
  <Layout>
    <SEO title='Angie Spears' keywords={[`gatsby`, `application`, `react`, `front-end software Engineer`, `software Engineer`, `nyc`]} />
    <section className = 'imgPlaceholder'>
      <img id= 'headerImg' src= {headerImage} alt= 'header'/>
    </section>
    <section className = 'intro'> 
        <h1>About Me</h1>
        <hr/>
        <p>Hi, I'm <strong>Angie Spears</strong>, a <strong>Front End Software Engineer</strong>. I am an ambitious, self-motivated and solutions-driven individual. I recognize needs, perfect the details and use strategic thinking to achieve goals</p>
    </section>
    <section className= 'brands'> 
        <h1>Brands I've worked with</h1>
        <hr/>
        <div className = 'brandLogos'>
          <div><img id = 'samsung' src= {Samsung} alt= 'samsung'/></div>
          <div><img id = 'verizon' src= {Verizon} alt= 'verizon'/></div>
        </div>
    </section>
    <section className= 'technologies'> 
        <h1>Technologies</h1>
        <hr/>
        <div className = 'techList'>
          <div><img id='js' src={JavaScript} alt='Javascript' /></div>
          <div><img id = 'api' src= {Api} alt= 'RestFulAPIs'/></div>
          <div><img id = 'reactjs' src= {Reactjs} alt= 'ReactJS'/></div> 
          <div><img id = 'node' src= {Node} alt= 'NodeJS'/></div>
          <div><img id = 'express' src= {Express} alt= 'ExpressJS'/></div> 
          <div><img id= 'mongodb' src={MongoDB} alt= 'MongoDB' /></div>
          <div><img id = 'htmlCss' src= {HtmlCss} alt= 'HTML5 | CSS3'/></div>
          <div><img id = 'sass' src= {Sass} alt= 'Sass'/></div>
          <div><img id = 'ruby' src= {Ruby} alt= 'Ruby'/></div>
        </div>
    </section>
    <Projects/>
  </Layout>
)


export default IndexPage
