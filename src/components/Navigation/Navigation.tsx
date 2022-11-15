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
      className="py-4 text-base text-gray-50 no-underline focus:outline outline-offset-2 outline-2 outline-purple-700 hover:text-gray-500"
    >
      {label}
    </Link>
  )
}

const SocialMediaLink = ({ to, title, Icon }) => {
  return (
    <a href={to} title={title}>
      <Icon className="h-9 w-9 hover:ring ring-sky-800 focus:outline outline-offset-2 outline-white bg-gradient-to-r from-sky-400 to-indigo-400" />
    </a>
  )
}

const Navigation = (props: NavigationProps) => {
  return (
    <div className="flex flex-col bg-[#000212]">
      <div className="w-full px-8">
        <div className="mx-auto flex w-full lg:w-3/4">
          <nav className="flex h-14 flex-1 items-center border-b border-solid border-slate-700 py-8 px-2">
            <div className="flex flex-1 justify-center md:justify-start">
              <Link to="/">
                <div className="mr-16 hidden py-4 text-lg font-bold text-white md:block">
                  Daniel Vu
                </div>
              </Link>
              <div className="flex flex-row items-center justify-center gap-8">
                <NavLink to="/" label="Home" />
                <NavLink to="/resume" label="About" />
                <NavLink to="/projects" label="Projects" />
                <NavLink to="/blog" label="Blog" />
              </div>
            </div>
            <div className="hidden h-full flex-shrink flex-row items-center justify-center gap-2 md:flex md:flex-row">
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
        </div>
      </div>
      <div className="flex-1">{props.children}</div>
    </div>
  )
}

export default Navigation
