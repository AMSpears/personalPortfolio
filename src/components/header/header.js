import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import 'gatsby-plugin-sass'
//resume
import Resume from '../resume/AngieSpears_Resume.pdf'

//icons
import { FiExternalLink } from 'react-icons/fi'
import { TiThMenu, TiTimes } from 'react-icons/ti'

// header nav function
import UpdateHeader from "./headerNavFunc"

import './header.scss'

const Header = ({ siteTitle, home, aboutMe, resume }) => (
  <header>
      <nav>
        <ul>
          <div className = 'mobileNav'>
            <li><Link to='/' id= 'logo'> {siteTitle}</Link></li>
            <div>
              <li><button id = 'menuIcon' onClick = {UpdateHeader}><TiThMenu/></button></li>
              <li><button id = 'menuExitIcon' onClick = {UpdateHeader}><TiTimes/></button></li>
            </div>
          </div>
          <div className= 'linksContainer'>
            <li><Link to= '/' className= 'links'>{home}</Link></li>
            <li><Link to= '/about-me' className= 'links'>{aboutMe}</Link></li>
            { window.innerWidth < 768 ? 
              <li><a href= {Resume} target= 'blank'  className= 'links' id= 'resume'>{resume} <FiExternalLink/></a></li>
            : 
              <li><a href= {Resume} target= 'blank'  className= 'links' id= 'resume'>{resume}</a></li>
            }
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

