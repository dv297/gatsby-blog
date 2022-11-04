import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="flex h-screen flex-col items-center py-8">
        <div className="container">
          <div className="mb-4 flex w-full items-center justify-center">
            <StaticImage
              src="../images/profile-optimized.jpg"
              className="h-48 w-48 rounded-full"
              alt="Daniel Vu"
            />
          </div>
          <div className="flex w-full flex-row items-center justify-center">
            <div className="flex w-full max-w-[75%] flex-col items-center justify-center gap-2 sm:flex-row sm:divide-[#fe8a71] md:divide-x-2">
              <h1 className="flex-1 text-center text-3xl text-[#0074d9]">
                Musician
              </h1>
              <h1 className="flex-1 text-center text-3xl text-[#0074d9]">
                Developer
              </h1>
              <h1 className="flex-1 text-center text-3xl text-[#0074d9]">
                Educator
              </h1>
            </div>
          </div>
          <div className="mx-8 mt-10 flex flex-col items-center justify-center">
            <h2 className="mb-6 text-2xl">Hey! I'm Daniel Vu!</h2>
            <p className="prose-lg">
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
