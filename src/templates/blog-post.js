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
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="blog-post-title">{post.frontmatter.title}</h1>
            <div className="blog-post-header">
              <small className="blog-post-header-date">
                {post.frontmatter.date}
              </small>
              <small className="blog-post-header-tags">
                Tags: {post.frontmatter.tags.join(", ")}
              </small>
            </div>
            <div>
              <small>Time to Read: {post.timeToRead} minutes</small>
            </div>
            <div className="blog-post-content">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
