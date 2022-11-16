import * as React from "react"
import { motion, Variants } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import FsLightbox from "fslightbox-react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"

const SocialMediaLink = ({ to, title, Icon }) => {
  return (
    <a href={to} title={title}>
      <Icon className="h-12 w-12 text-[#111111] hover:ring ring-sky-700 focus:outline outline-offset-2 outline-white bg-gradient-to-r from-sky-400 to-indigo-400" />
    </a>
  )
}

const BlogIndex = () => {
  const [toggler, setToggler] = useState(false)

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  }

  return (
    <Layout>
      <div className="h-full w-full">
        <div className="max-w-screen-2xl mx-auto flex flex-col mb-12 items-center">
          <div className="w-full flex flex-col items-center mb-16">
            <h1 className="text-2xl lg:text-6xl text-white mb-8">
              Hi, I'm Daniel Vu!
            </h1>
            <StaticImage
              src="../images/profile-optimized.jpg"
              className="h-48 w-48 rounded-full"
              alt="Daniel Vu"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <motion.ul variants={container} initial="hidden" animate="show">
              <motion.li
                className="mb-6 text-xl lg:text-3xl text-white text-extrabold text-center"
                variants={item}
              >
                I like to spend time improving as a...
              </motion.li>

              <motion.li
                className="mb-12 text-3xl lg:text-4xl text-white text-extrabold text-center"
                variants={item}
              >
                Developer,
              </motion.li>
              <motion.li
                className="mb-12 text-3xl lg:text-4xl text-white text-extrabold text-center"
                variants={item}
              >
                Musician,
              </motion.li>
              <motion.li
                className="mb-12 text-3xl lg:text-4xl text-white text-extrabold text-center"
                variants={item}
              >
                And Educator.
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div className="mb-12">
          <div className="px-12 py-8 bg-gray-700 bg-opacity-75 rounded-xl">
            <p className="prose-lg text-white">
              I graduated from the University of South Carolina with a B.S. in
              Computer Science and moved to Kansas City to pursue a career in
              Software Engineering. I love front-end development and I strongly
              focus on creating a productive team environment by continuously
              helping create fruitful, enjoyable development experiences and
              helping others keep up to date with the latest technology stacks.
              I enjoy giving talks, and I love finding new ways to promote
              varying aspects of software engineering to developers and students
              of all skill levels.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-12">
          <span className="text-white text-4xl w-full text-center mb-24">
            My Latest Project
          </span>
          <div
            className="rounded-xl shadow-lg	shadow-blue-900"
            onClick={() => setToggler(value => !value)}
          >
            <StaticImage
              src="../images/planner.png"
              alt="Screenshot of Planner application"
            />
          </div>
          <FsLightbox
            toggler={toggler}
            sources={[
              <div>
                <StaticImage
                  src="../images/planner.png"
                  alt="Screenshot of Planner application"
                />
              </div>,
            ]}
          />
        </div>
        <div className="mb-12">
          <div className="px-12 py-8 bg-gray-700 bg-opacity-75 rounded-xl">
            I've been working on "Planner", a NextJS app that helps you
            visualize the breakdown of a project and how different tasks might
            relate to one another. I found that traditional project planning
            tools made it difficult to see the bigger picture, to see what has
            already been covered and what might be missing.
          </div>
        </div>
        <div className="mb-12 flex flex-col justify-center items-center gap-y-8">
          <span className="text-3xl text-center w-full">
            Catch up with me on my socials.
          </span>
          <div className="flex flex-row items-center justify-center gap-8">
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
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" children={undefined} lang="en" />
