import React from "react"
import { Link } from "gatsby"

import "./BlogPostListing.css"
import Pill from "../../components/Pill/Pill"

const BlogPostListing = ({ post }) => {
  console.log(post)
  return (
    <div className="blog-post-listing">
      <Link to={post.fields.slug} className="blog-post-listing-title">
        {post.frontmatter.title}
      </Link>
      <div className="blog-post-listing-excerpt">
        {post.frontmatter.description}
      </div>
      <div className="blog-post-listing-footer">
        <small className="blog-post-listings-date">
          {post.frontmatter.date}
        </small>
        <span className="blog-post-listing-tags">
          {post.frontmatter.tags.map((tag, index) => (
            <Pill key={index}>{tag}</Pill>
          ))}
        </span>
      </div>
    </div>
  )
}

export default BlogPostListing
