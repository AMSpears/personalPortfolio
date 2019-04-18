import PropTypes from "prop-types"
import React from "react"
import "gatsby-plugin-sass"
import Resume from "../resume/AngieSpears_Resume.pdf"

import "./header.scss"

const Header = ({ siteTitle, home, aboutMe, resume }) => (
  <header>
      <nav>
        <ul>
          <li><a  href='/' id= 'logo'> {siteTitle}</a></li>
          <div className= 'linksContainer'>
            <li><a href= '/' className= 'links'>{home}</a></li>
            <li><a href= '#aboutMe' className= 'links'>{aboutMe}</a></li>
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

