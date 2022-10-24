import * as React from "react"

import { Link } from "gatsby"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

import "./Navigation.css"

interface NavigationProps {
  children: React.ReactNode
  toggleSidebarMenu: () => void
}

const Navigation = (props: NavigationProps) => {
  return (
    <div className="navigation-container" {...props}>
      <nav className="nav-links">
        <Link to="/" onClick={props.toggleSidebarMenu}>
          Home
        </Link>
        <Link to="/resume" onClick={props.toggleSidebarMenu}>
          About
        </Link>
        <Link to="/blog" onClick={props.toggleSidebarMenu}>
          Blog
        </Link>
        <div className="navigation-social-media">
          <a href="https://twitter.com/TheDanielVu" title="Twitter">
            <FaTwitterSquare className="navigation-social-media-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-vu-a2576699/"
            title="LinkedIn"
          >
            <FaLinkedin className="navigation-social-media-icon" />
          </a>
          <a href="https://github.com/dv297" title="GitHub">
            <FaGithubSquare className="navigation-social-media-icon" />
          </a>
        </div>
      </nav>
      <div className="navigation-content-container">{props.children}</div>
    </div>
  )
}

export default Navigation
