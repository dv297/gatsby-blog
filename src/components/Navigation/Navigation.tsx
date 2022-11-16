import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

interface NavigationProps {
  children: React.ReactNode
}

const NavLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="py-4 text-base text-gray-50 no-underline hover:text-gray-400"
    >
      {label}
    </Link>
  )
}

const SocialMediaLink = ({ to, title, Icon }) => {
  return (
    <a href={to} title={title}>
      <Icon className="h-9 w-9 text-[#111111] hover:ring ring-sky-700 focus:outline outline-offset-2 outline-white bg-gradient-to-r from-sky-400 to-indigo-400" />
    </a>
  )
}

const Navigation = (props: NavigationProps) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor="#111111"
      style={{ backgroundRepeat: "repeat-y" }}
    >
      <div className="flex flex-col min-h-screen w-full">
        <div className="w-full px-8 flex-shrink mb-8">
          <div className="mx-auto flex w-full lg:w-3/4">
            <nav className="flex h-14 flex-1 items-center border-b border-solid border-slate-700 py-8 px-2">
              <div className="flex flex-1 justify-center md:justify-start">
                <div className="mr-16 hidden py-4 text-lg font-bold text-white md:block">
                  <Link
                    to="/"
                    className="focus:outline outline-offset-2 outline-2 outline-sky-400"
                  >
                    Daniel Vu
                  </Link>
                </div>
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
        <div className="flex flex-1 w-full lg:w-3/4 mx-auto px-8 pb-24">
          {props.children}
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Navigation
