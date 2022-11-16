import React from "react"
import { Link } from "gatsby"

import Pill from "../../components/Pill/Pill"

const BlogPostListing = ({ post }) => {
  return (
    <div className="mb-4 flex flex-col border-b-2 border-gray-100 pb-8">
      <Link to={post.fields.slug} className="text-4xl text-sky-400 mb-2">
        {post.frontmatter.title}
      </Link>
      <div className="mb-2">{post.frontmatter.description}</div>
      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-center">
        <small className="mb-2 flex-1 md:mb-0">{post.frontmatter.date}</small>
        <span className="flex flex-row flex-wrap">
          {post.frontmatter.tags.map((tag, index) => (
            <Pill key={index}>{tag}</Pill>
          ))}
        </span>
      </div>
    </div>
  )
}

export default BlogPostListing
