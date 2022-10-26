import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./Home.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="home-body">
        <div className="home-content">
          <div className="profile-picture-container">
            <StaticImage
              src="../images/profile-optimized.jpg"
              className="profile-picture"
              alt="Daniel Vu"
              imgStyle={{ objectFit: "contain" }}
              style={{ width: "174px" }}
            />
          </div>
          <div className="skills-header-container">
            <h1>Musician</h1>
            <h1>Developer</h1>
            <h1>Educator</h1>
          </div>
          <div className="home-text-container">
            <h2 className="welcome-header">Hey! I'm Daniel Vu!</h2>
            <p>
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
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
