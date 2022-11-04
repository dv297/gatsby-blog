import * as React from "react"

import { Link } from "gatsby"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

interface NavigationProps {
  children: React.ReactNode
}

const NavLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="text-lg text-white no-underline hover:text-yellow-200 hover:underline lg:text-3xl"
    >
      {label}
    </Link>
  )
}

const SocialMediaLink = ({ to, title, Icon }) => {
  return (
    <a href={to} title={title}>
      <Icon className="h-9 w-9 text-[#bf6e67] hover:text-white" />
    </a>
  )
}

const Navigation = (props: NavigationProps) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <nav className="flex h-14 flex-row items-center justify-end bg-[#7B2A21] lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-56 lg:flex-col lg:justify-center lg:pr-0 lg:pb-8">
        <div className="flex w-full flex-1 flex-row items-center justify-end gap-8 pr-8 lg:flex-col lg:justify-center lg:gap-6 lg:pr-0">
          <NavLink to="/" label="Home" />
          <NavLink to="/resume" label="About" />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/blog" label="Blog" />
        </div>
        <div className="hidden flex-shrink flex-row gap-2 lg:flex lg:flex-row">
          <SocialMediaLink
            to="https://twitter.com/TheDanielVu"
            title="Twitter"
            Icon={FaTwitterSquare}
          />

          <SocialMediaLink
            to="https://www.linkedin.com/in/daniel-vu-a2576699/"
            title="LinkedIn"
            Icon={FaLinkedin}
          />

          <SocialMediaLink
            to="https://github.com/dv297"
            title="Github"
            Icon={FaGithubSquare}
          />
        </div>
      </nav>
      <div className="flex-1 lg:ml-56">{props.children}</div>
    </div>
  )
}

export default Navigation
