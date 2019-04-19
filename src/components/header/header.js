import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import "gatsby-plugin-sass"
import Resume from "../resume/AngieSpears_Resume.pdf"

import "./header.scss"

const Header = ({ siteTitle, home, aboutMe, resume }) => (
  <header>
      <nav>
        <ul>
          <li><Link to='/' id= 'logo'> {siteTitle}</Link></li>
          <div className= 'linksContainer'>
            <li><Link to= '/' className= 'links'>{home}</Link></li>
            <li><Link to= '#aboutMe' className= 'links'>{aboutMe}</Link></li>
            <li><a href= {Resume} target= "blank"  className= 'links' id= 'resume'>{resume}</a></li>
          </div>
        </ul>
      </nav>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
  home: PropTypes.string,
  aboutMe: PropTypes.string,
  resume: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  home: `Home`,
  aboutMe: `About Me`,
  resume: `Resume`
}

export default Header

