import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../pages/BlogPost.css"
import DefaultPageContainer from "../components/DefaultPageContainer/DefaultPageContainer"

const BlogPostTemplate = props => {
  const {
    data: { markdownRemark: post },
  } = props

  return (
    <Layout>
      <DefaultPageContainer>
        <div>
          <div>
            <h1 className="mb-6 text-4xl font-bold">
              {post.frontmatter.title}
            </h1>
            <div className="flex flex-col md:flex-row">
              <small className="mb-2 flex-1 md:mb-0">
                {post.frontmatter.date}
              </small>
              <small>Tags: {post.frontmatter.tags.join(", ")}</small>
            </div>
            <small>Time to Read: {post.timeToRead} minutes</small>
            <div className="blog-post-content">
              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
                className="markdown"
              />
            </div>
          </div>
        </div>
      </DefaultPageContainer>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
